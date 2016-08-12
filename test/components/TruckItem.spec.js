import React from 'react';
import { shallow, render, mount } from 'enzyme';
import { expect } from 'chai';
import TestUtils from "react-addons-test-utils";
import TruckItem from '../../client/components/TruckItem';

describe('<TruckItem />', () => {
  let fakeTruck;
  beforeEach(() => {
    fakeTruck = {
      name: 'Fake Truck',
      handle: '@faketruck',
      description: 'I\'m a fake truck',
      message: 'This is my latest tweet',
      timeStamp: '19:19:19',
      img: 'url'
    };
  });

	it('should exist', () => {
    const wrapper = shallow(<TruckItem truck={ fakeTruck }/>);
    expect(wrapper).to.exist;
  });
  it('renders the truck name', () => {
    const wrapper = shallow(<TruckItem truck={ fakeTruck }/>);
    expect(wrapper.find('.TruckName')).to.have.length(1);
  });
  it('renders the truck\'s Twitter handle', () => {
		const wrapper = shallow(<TruckItem truck={ fakeTruck }/>);
    expect(wrapper.find('.TruckHandle')).to.have.length(1);
  });
  it('displays the truck\'s description', () => {
    const wrapper = shallow(<TruckItem truck={ fakeTruck }/>);
    expect(wrapper.find('.TruckDescription')).to.have.length(1);
  });
  it('displays the truck\'s tweet', () => {
		const wrapper = shallow(<TruckItem truck={ fakeTruck }/>);
    expect(wrapper.find('.TruckTweet')).to.have.length(1);
  });
  it('displays the timestamp of the truck\'s tweet', () => {
		const wrapper = shallow(<TruckItem truck={ fakeTruck }/>);
    expect(wrapper.find('.TruckTimeStamp')).to.have.length(1);
  });
  it('displays the truck\'s profile image', () => {
		const wrapper = shallow(<TruckItem truck={ fakeTruck }/>);
    expect(wrapper.find('.TruckAvatar')).to.have.length(1);
  });
});