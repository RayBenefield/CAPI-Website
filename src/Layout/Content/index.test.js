import React from 'react';
import renderer from 'react-test-renderer';
import Content from '.';

describe('App Content', () => {
    it('looks how we want it to look', () => {
        const content = renderer.create(<Content />).toJSON();
        expect(content).toMatchSnapshot();
    });
});
