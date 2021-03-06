import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import React from 'react';
import List from './List';

configure({
    adapter: new Adapter()
});

describe('Testing Component <List />', () => {

    const fruits = [
        { name: 'Strawberry', id: 1 },
        { name: 'Apple', id: 2 },
        { name: 'Orange', id: 3 },
        { name: 'Mango', id: 4 },
    ];

    let wrapper;

    // Refactoring our testing variables helps to give a new instance for each one
    // of the test. It helps a lot to make new values only for that test optimizing big O notation of execution on the whole tests that are running.
    beforeEach(() => {
        wrapper = shallow(<List title='Fuits' list={fruits} />);
    })

    test('Validating nodes', () => {
        // Validate if a node exists
        expect(wrapper.find('h1').exists()).toBe(true);

        // Validate if it has css class
        expect(wrapper.find('h1').hasClass('big')).toBe(true);

        // Validate quantitys of children elements
        expect(wrapper.find('ul').children().length).toBe(4);

        // Validate the text content
        expect(wrapper.find('ul').childAt(2).text()).toBe('Orange');
        // console.log(wrapper.find('ul').childAt(2).html());

        // Validate the type of node / element
        expect(wrapper.find('ul').childAt(2).type()).toBe('li');

        // Validate HTML
        expect(wrapper.find('ul').childAt(2).html()).toBe('<li>Orange</li>');
    });

    test('Validate updates in props', () => {
        // Validate quantity of li elements
        expect(wrapper.find('li').length).toBe(4);

        // Updating list prop
        wrapper.setProps({
            list: [ 
                { name: 'kiwi', id: 5 }
            ]
        });

        // Validate quantity of li elements
        expect(wrapper.find('li').length).toBe(1);
        
        // Updating Title prop
        wrapper.setProps({
            title: 'Super Fruits'
        });

        expect(wrapper.find('.big').text()).toBe('Super Fruits');
    });

    test('Validate that matches with Snapshots', () => {
        // we must use enzyme-to-json to make prettier the snapshots
        expect(toJson(wrapper)).toMatchSnapshot();
    });

});