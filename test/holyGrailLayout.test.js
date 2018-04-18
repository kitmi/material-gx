import React from 'react';
import renderer from 'react-test-renderer';
import { holyGrailLayoutCreator } from '../build';

const HolyGrailLayout = holyGrailLayoutCreator(240);

it('renders correctly', () => {
    const tree = renderer
        .create(<HolyGrailLayout header={<div>header</div>} left={<div>left sidebar</div>} right={<div>right sidebar</div>} content={<div>content</div>} footer={<div>footer</div>} />)
        .toJSON();
    expect(tree).toMatchSnapshot();
});