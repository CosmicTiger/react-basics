import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import React from 'react';
import Counter from './Counter';

configure({
    adapter: new Adapter()
});

describe('Testing <Counter /> component', () => {

    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<Counter />);
    });

    test('Validate that match with Snapshot', () => {
        expect(toJson(wrapper)).toMatchSnapshot();
    });

    test('Validate button feature', () => {
        wrapper.find('button').first().simulate('click');

        expect(wrapper.find('h1').text()).toBe('1');

        wrapper.find('button').last().simulate('click');
        wrapper.find('button').last().simulate('click');
        wrapper.find('button').last().simulate('click');

        expect(wrapper.find('h1').text()).toBe('-2');
    });

});