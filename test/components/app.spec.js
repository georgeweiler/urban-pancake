import React from 'react';
import { shallow, render, mount } from 'enzyme';
import { expect } from 'chai';
import App from '../../client/components/app';

describe('<App />', function() {
  it('should exist', function() {
    const wrapper = shallow(<App />);
    expect(wrapper).to.exist;
  })
  it('should render <TruckList />', function() {
    const wrapper = shallow(<App />);
    expect(wrapper.find(<TruckList />)).to.exist;
  })
})
