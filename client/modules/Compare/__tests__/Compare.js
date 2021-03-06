import React from 'react';
import Enzyme,{ shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

import CompareCarousels from '../index.js'

Enzyme.configure({ adapter: new EnzymeAdapter() });

test('renders CompareCarousels without problems', () => {
    const wrapper = shallow(<CompareCarousels />);
    const appComponent = wrapper.find("[data-test='component-compare']");
    expect(wrapper).toBeTruthy();
    expect(appComponent.length).toBe(1);
});


