import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import App from '.';

it('renders without crashing', () => {
    const wrapper = shallow(<App header={{ height: 150 }} window={{ height: 900 }} />);
    expect(shallowToJson(wrapper)).toMatchSnapshot();
});
