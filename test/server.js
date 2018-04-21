'use strict';

const Mowa = require('mowa');

let mowa = new Mowa('test', {
    etcPath: 'test/etc',
    logger: 'general',
    verbose: true,
    logWithModuleName: true
});

mowa
    .start_()
    .then(() => {})
    .catch(error => {
        console.error(error);
    });
