'use strict';

var chai = require('chai');
var chaiHttp = require('chai-http');

chai.use(chaiHttp);

var expect = chai.expect;

require(__dirname + '/server.js');

describe('Simple Vanilla Server', function() {
    it('should respond to a get request', function (done) {
        chai.request('localhost:3000')
            .get('/')
            .end(function (err, res) {
                expect(res.status).to.eql(200);
                expect(res.text).to.be.a('string');
                expect(res.text).to.eql('Hello World!');
                done();
            });
    });
});
