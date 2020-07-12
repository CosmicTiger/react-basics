import { salute, getId, bye } from './strings';

describe('Test of Strings', () => {

    const hello = salute('Luisangel');
    const id = getId();
    const helloBye = bye();

    test('Testing the salute function', () => {
        expect(hello).toMatch('Hello i am')
    })

    test('Testing the getId function', () => {
        expect(id).toMatch(/\d{2}-\d{3}/)
    })

    test('Testing the bye function', () => {
        expect(helloBye).not.toMatch('Bye')
    })
})

// /\a/ -> to evalute digits