
//TODO: Test the functionality for TruckList container


// import React from 'react';
// import { Provider } from 'react-redux';
// import { createStore } from 'redux';
// import { shallow, render, mount } from 'enzyme';
// import { expect } from 'chai';
// import TruckList from '../../client/containers/TruckList';
// import TruckItem from '../../client/components/TruckItem';
// import rootReducer from '../../client/reducers/reducers';

// describe('<TruckList />', () => {

// it('should render truck items on page load', () => {
// 	const storeFake = {
// 		trucks: [{name: 'truck1'}],
// 		default: () => {},
// 		subscribe: () => {},
// 		dispatch: () => {},
// 		getState: () => {
// 			return [{test: 'test'}]
// 		}
// };
// 	const wrapper = mount(<Provider store={createStore(() => {
// 		return {trucks: [{_id: 24242, name: 'truck1'}]}
// 	}
// 		)}><TruckList /></Provider>);
// 	expect(wrapper.find('<TruckItem />')).to.have.length.above(0);
// });


// });


// it should mount FetchTrucks before the rest of the page renders

// it should map trucks to the state

// it should dispatch FetchTrucks?