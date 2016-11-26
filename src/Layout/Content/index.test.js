import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import Content from '.';

it('renders without crashing', () => {
    const wrapper = shallow(<Content files={[]} item={{ width: 320, height: 320 * 0.5635179153 }} />);
    expect(shallowToJson(wrapper)).toMatchSnapshot();
});
