const statusCode = require('http-status-codes')
const expect = require('chai').expect

class parseResponse {
    constructor(attach, log, parameters){
        this.attach = attach,
        this.log = log
        this.parameters = parameters
    }

    async validateHttpStatusCode(responseStatusCode, statusTextSupplied){
        const statusRetrieved = await statusCode[JSON.parse(statusTextSupplied).toUpperCase().replace(' ', '_')]
        this.attach('Status Retrieved is : '+statusRetrieved)
        expect(responseStatusCode).to.equal(statusRetrieved)
    }

    getPetIdFromResponse(response){
        this.attach('Response retrieved is : '+JSON.stringify(response))
        return response.id
    }

}
module.exports = parseResponse;