import { getDataCallback, getDataPromise, getDataPromiseError, getUsers } from './async';

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

    test('Doing test to resolved promise with async await', async() => {
        // First way, non optimal
        const name = await getDataPromise();
        expect(name).toBe('Luisángel Marcia');
    });

    test('Doing test to rejected promise resolved with async await', async() => {
        // First way, non optimal
        try {
            const name = await getDataPromiseError();
            expect(name).toBe('Luisángel Marcia');
        } catch (error) {
            expect(error).toBe('Error');
        }
    });

    test('Testing Promise with HTTP Request', async () => {
        const user = await getUsers();
        expect(user).toHaveProperty('username');
        expect(user).toHaveProperty('id');
        expect(user).toHaveProperty('email');
        expect(user).toHaveProperty('address');
    });

});