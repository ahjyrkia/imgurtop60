var expect = require('chai').expect;
var request = require('request');

it('should return a 404 error', function (done) {
    request({
        method: 'POST',
        url: "http://localhost:3000/"
    }, function (error, response, body) {
        expect(response.statusCode).to.equal(404);
        done();
    });
});

it('should return a 200 ok', function (done) {
    request({
        method: 'GET',
        url: "http://localhost:3000/"
    }, function (error, response, body) {
        expect(response.statusCode).to.equal(200);
        done();
    });
});
describe('DOM tests', function () {
    request({
        method: 'GET',
        url: "http://localhost:3000/"
    },function (error, response, body) {
        console.log(body);
    });

});

