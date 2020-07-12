import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import List from './List';

configure({
    adapter: new Adapter()
});

describe('Testing Component <List />', () => {
    test('Validating nodes', () => {

        const fruits = [
            { name: 'Strawberry', id: 1 },
            { name: 'Apple', id: 2 },
            { name: 'Orange', id: 3 },
            { name: 'Mango', id: 4 },
        ]

        const wrapper = shallow(<List title='Fuits' list={fruits} />);

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
});