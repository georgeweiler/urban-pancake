import React from 'react';
import { shallow, render, mount } from 'enzyme';
import { expect } from 'chai';
import { FETCH_TRUCKS, FetchTrucks } from '../../client/actions/FetchTrucks';

describe('FetchTrucks action creator', () => {
  it('should return an action with a type', () => {
    expect(FetchTrucks()).to.have.property('type');
  })
  it('should return an action with a payload', () => {
    let payload = FetchTrucks().payload;
    expect(payload).to.exist;
  })
});
