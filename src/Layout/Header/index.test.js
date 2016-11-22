import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import Header from '.';

it('renders without crashing', () => {
    const wrapper = shallow(<Header />);
    expect(shallowToJson(wrapper)).toMatchSnapshot();
});
