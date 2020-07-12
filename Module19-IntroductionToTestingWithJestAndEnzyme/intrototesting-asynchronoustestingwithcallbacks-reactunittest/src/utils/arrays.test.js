import { createStore } from './arrays'

describe('Doing test to lists / Arrays', () => {

    test('Testing adding a new fruit', () => {
        const store = createStore();

        store.addFruit('Strawberry');

        expect(store.getFruits()).toStrictEqual([ 'Strawberry' ]);
    })

    test('Testing adding two new fruits', () => {
        const store = createStore();

        store.addFruit('Strawberry');
        store.addFruit('Peach')

        expect(store.getFruits()).toStrictEqual([ 'Strawberry', 'Peach' ]);
    })

    test('Testing if it contains a specific fruit', () => {
        const store = createStore();

        store.addFruit('Apple');
        store.addFruit('Pear');
        store.addFruit('Banana');

        expect(store.getFruits()).toContain('Pear');
        expect(store.getFruits()).not.toContain('Strawberry');
    })

    test('Testing if it contains a specific number of fruits', () => {
        const store = createStore();

        store.addFruit('Apple');
        store.addFruit('Pear');
        store.addFruit('Banana');

        expect(store.getFruits()).toHaveLength(3);
    })

    test('Testing if it could add an object with fruits information', () => {
        const store = createStore();

        store.addFruit({
            name: 'fruit',
            price: 10
        });

        expect(store.getFruits()).toContainEqual({name: 'fruit', price: 10});
    })
})