import React from 'react';
import renderer from 'react-test-renderer';
import Header from '.';

describe('App Header', () => {
    it('looks how we want it to look', () => {
        const header = renderer.create(<Header />).toJSON();
        expect(header).toMatchSnapshot();
    });
});
