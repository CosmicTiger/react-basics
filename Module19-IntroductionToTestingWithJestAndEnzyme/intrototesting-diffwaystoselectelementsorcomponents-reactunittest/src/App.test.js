import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import App, { Title } from './App';


// this configuration to each test file that i'm going to use for testing component React
configure({
    adapter: new Adapter()
});

describe('Testing <App /> Component', () => {
    
    test('Testing rendering of component', () => {
        const wrapper = shallow(<App />); // Superficial rendering with shallow

        // console.log(wrapper.find('h1'));
        // console.log(wrapper.find('div ~ p').length);
        // console.log(wrapper.find('[type="checkbox"]').html());

        // console.log(wrapper.find('Title').html())

        // expect(wrapper.find('h1').html()).toBe('<h1>Introduccion a Unit Testing</h1>');
        // expect(wrapper.find('h1')).toHaveLength(1);

        // first reference, not recommended.
        // expect(wrapper.html()).toBe('<div><h1>Introduccion a Unit Testing</h1></div>');

    });

});