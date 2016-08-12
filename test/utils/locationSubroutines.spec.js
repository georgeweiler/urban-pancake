const chai = require('chai');
const expect = chai.expect;
const atFromSubroutine = require('../../server/getLocationFromTweets');

describe('atFromSubroutine', function() {
  it('should be a function', function() {
    expect(typeof atFromSubroutine).to.equal('function');
  });
  it('should return an intersection from a tweet with an "at"-"from" structure', function() {
    expect('We are serving at 1st st and Howard st from 11:15-1:45').to.satisfy(function(string) {
      return '1st st and Howard st'
    });
  });
  it('should return a street address from a tweet with an "at"-"from" structure', function() {
    expect('We are serving at 650 Shell Blvd from 11:15-1:45').to.satisfy(function(string) {
      return '650 Shell Blvd'
    });
  });
  it('should return "unknown" if it does not find a location', function() {
    expect('Lunch today at 650 Shell Blvd').to.satisfy(function(string) {
      return 'unknown'
    });
  });
});
