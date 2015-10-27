var expect = require('chai').expect;
var greet = require('./greet.js');

var str = 'some string';

describe('access string', function() {
    it('should return a string', function(done) {
        expect(str).to.be.a('string');
        done();
    });
    it('should equal some string', function(done) {
        expect(str).to.eql('some string');
        done();
    });
    it('should return a greeting', function(done) {
        expect(greet.sayName('Brian')).to.eql('hello, I am Brian');
        done();
    });
});