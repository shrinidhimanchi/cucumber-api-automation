@petStoreTest
Feature: Test PetStore

    Background: Set Mandatory Headers & Parameters
        Given the mandatory request headers are set
        When I send POST Request to create pet with URI "v2/pet"
        Then http status returned from the server should be "OK"
        And response body should have "doggie"

    Scenario: PetStore - Find Pet By PetId
        When I send GET Request with URI "v2/pet"
        Then http status returned from the server should be "OK"
        Then response body should have "id"
        And response body should have "category"
        And response body should have "name"
        And response body should have "tags"
        And response body should have "status"

    Scenario: PetStore - Update Pet Name
        When I send PUT Request to update pet with URI "v2/pet"
        Then http status returned from the server should be "OK"
        Then response body should have "id"
        And response body should have "category"
        And response body should have "name"
        And response body should have "tags"
        And response body should have "Doggie-2"

    Scenario: PetStore - Delete Pet By PetId
        When I send DELETE Request to delete pet with URI "v2/pet"
        Then http status returned from the server should be "OK"
        Then response body should have "code"
        And response body should have "type"
        And response body should have "message"
        And response body should have 200
