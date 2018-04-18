import React from 'react';
import { render } from 'react-dom';

import { materialLayoutCreator } from '../build';

const MaterialLayout = materialLayoutCreator(240, 80);

render(<MaterialLayout sidebar={<div>sidebar</div>} content={<div>content</div>} />,
    document.getElementById('app')
);