import { expect } from 'chai';
import geocoder from "../../utils/utils"

describe('Geocoding function', function(){
  it('should exist', function(){
    expect(geocoder).to.not.equal(undefined)
  })
  xit('should return a promise', function(){})
  xit('should resolve to an object with lat and lng properties', function(){})
  xit('should resolve to a lat/lng position in San Francisco', function(){})
})
