import { getDataCallback, getDataPromise, getDataPromiseError } from './async';

describe('Doing test to asynchronous operations', () => {

    test('Doing test to callback', (done) => {

        getDataCallback((name) => {
            expect(name).toBe('Luisángel Marcia');
            done();
        })

    });

    test('Doing test to promise', (done) => {
        // First way, non optimal
        getDataPromise()
            .then((name) => {
                expect(name).toBe('Luisángel Marcia');
                done();
            });
        done();
    });

    test('Doing test to promise with expect', () => {

        // 2nd way, most optimal.
        return expect(getDataPromise()).resolves.toBe('Luisángel Marcia');
    });

    test('Doing test to rejected promise', (done) => {
        // First way, non optimal
        getDataPromiseError()
            .then((name) => {
                expect(name).toBe('Luisángel Marcia');
                done();
            })
            .catch((error) => {
                expect(error).toBe('Error');
                done();
            });
        done();
    });

    test('Doing test to rejected promise with expect', () => {

        // 2nd way, most optimal.
        return expect(getDataPromiseError()).rejects.toBe('Error');
    });

});