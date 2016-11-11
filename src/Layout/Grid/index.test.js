import React from 'react';
import renderer from 'react-test-renderer';
import Grid from '.';

describe('App Grid', () => {
    it('looks how we want it to look', () => {
        const grid = renderer.create(<Grid />).toJSON();
        expect(grid).toMatchSnapshot();
    });
});
