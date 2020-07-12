import { getDataCallback } from './async';

describe('Doing test to asynchronous operations', () => {

    test('Doing test to callback', (done) => {

        getDataCallback((name) => {
            expect(name).toBe('Luisángel Marcia');
            done();
        })

    });

});