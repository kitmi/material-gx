import React from 'react';
import renderer from 'react-test-renderer';
import { materialLayoutCreator } from '../build';

const MaterialLayout = materialLayoutCreator(240, 80);

it('renders correctly', () => {
    const tree = renderer
        .create(<MaterialLayout sidebar={<div>sidebar</div>} content={<div>content</div>} />)
        .toJSON();
    expect(tree).toMatchSnapshot();
});