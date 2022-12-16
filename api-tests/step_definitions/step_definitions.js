var { Given, When, Then } = require('@cucumber/cucumber')
const expect = require('chai').expect

Given(/^the mandatory request headers are set$/, function(){
    let headers = this.dataStore.retrieveRequestHeaders(this.getScenarioName())
    return headers
})

When(/^I send GET Request with URI (.*)$/, function(uri){
    uri = JSON.parse(uri)
    const petId = this.parseResponse.getPetIdFromResponse(this.getResponseData())
    return this.sendRequest(uri +'/' + petId, 'GET')
})

When(/^I send POST Request to create pet with URI (.*)$/, function(uri){
    uri = JSON.parse(uri)
    let petId = JSON.parse(this.dataStore.retrieveValueFromMatchingKeyBasedOnScenarioName(this.getScenarioName(), 'petId'))
    let createPetRequest = this.dataStore.retrieveRequestBasedOnMatchingKey("createPetRequest")
    createPetRequest.id = petId
    this.attach('Request Body is : '+JSON.stringify(createPetRequest))
    return this.sendRequest(uri, 'POST', createPetRequest)
})

When(/^I send PUT Request to update pet with URI (.*)$/, function(uri){
    uri = JSON.parse(uri)
    let updatedDogName = this.dataStore.retrieveValueFromMatchingKeyBasedOnScenarioName(this.getScenarioName(), 'updatedDogName')
    let categoryName = this.dataStore.retrieveValueFromMatchingKeyBasedOnScenarioName(this.getScenarioName(), 'categoryName')
    let petId = JSON.parse(this.dataStore.retrieveValueFromMatchingKeyBasedOnScenarioName(this.getScenarioName(), 'petId'))
    let updatePetRequest = this.dataStore.retrieveRequestBasedOnMatchingKey("updatePetRequest")
    updatePetRequest.id = petId
    updatePetRequest.category.name = categoryName
    updatePetRequest.name = updatedDogName
    this.attach('Request Body is : '+JSON.stringify(updatePetRequest))
    return this.sendRequest(uri, 'PUT', updatePetRequest)
})

When(/^I send DELETE Request to delete pet with URI (.*)$/, function(uri){
    uri = JSON.parse(uri)
    const petId = this.parseResponse.getPetIdFromResponse(this.getResponseData())
    return this.sendRequest(uri +'/' + petId, 'DELETE')
})

Then(/^response body should have (.*)$/, function(expression){
    let response = JSON.stringify(this.getResponseData())
    this.attach('Response returned from server is : '+JSON.stringify(response))
    expect(response).to.include(expression)
})

Then(/^http status returned from the server should be (.*)$/, function(statusText){
    this.attach('Response returned from server is : '+JSON.stringify(this.getResponseData()))
    return this.parseResponse.validateHttpStatusCode(this.getResponseStatusCode(), statusText)
})
