import { createStore } from './objects';

describe('Test to Objects', () => {

    test('Add an item in store', () => {

        const store = createStore();

        store.addItem({
            name: 'Luisángel',
            id: 1,
            role: 'Frontend Responsible',
        });

        expect(store.getStore()[0]).toEqual({
            name: 'Luisángel',
            id: 1,
            role: 'Frontend Responsible'
        });

    });
    
    test('Search an item by id in store', () => {

        const store = createStore();

        store.addItem({
            name: 'Luisángel',
            id: 1,
            role: 'Frontend Responsible',
        });

        expect(store.getById(1)).toEqual({
            name: 'Luisángel',
            id: 1,
            role: 'Frontend Responsible'
        });

        expect(store.getById(1)).toMatchObject({
            name: 'Luisángel',
            id: 1,
        });

        expect(store.getById(1)).toHaveProperty('name', 'Luisángel');

     });

})