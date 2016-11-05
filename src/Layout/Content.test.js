import React from 'react';
import Content from './Content';
import renderer from 'react-test-renderer';

describe('App Content', () => {
    it('looks how we want it to look', () => {
        const content = renderer.create(<Content />).toJSON();
        expect(content).toMatchSnapshot();
    });
});
