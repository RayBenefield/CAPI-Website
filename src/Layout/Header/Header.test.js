import React from 'react';
import Header from '.';
import renderer from 'react-test-renderer';

describe('App Header', () => {
    it('looks how we want it to look', () => {
        const header = renderer.create(<Header />).toJSON();
        expect(header).toMatchSnapshot();
    });
});
