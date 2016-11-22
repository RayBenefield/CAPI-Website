import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import Content from '.';

it('renders without crashing', () => {
    const wrapper = shallow(<Content />);
    expect(shallowToJson(wrapper)).toMatchSnapshot();
});
