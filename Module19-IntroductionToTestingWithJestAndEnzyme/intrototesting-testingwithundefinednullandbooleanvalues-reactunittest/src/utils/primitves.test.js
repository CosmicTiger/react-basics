
const getValue = (exp) => {
    switch (exp) {
        
        case 'defined':
            return {};
        
        case 'undefined':
            return undefined;

        case 'true':
            return true;
        
        case 'false':
            return false;
        
        default:
            return null;
    }
}

describe('Testing null values, undefined and booleans', () => {

    test('Validate if exists or if its defined a value', () => {
        expect(getValue('defined')).toBeDefined(); // it only fails when at this point we obtain an undefined value
    });

    test('Validate if value is null', () => {
        expect(getValue()).toBeNull(); // it only fails when at this point we obtain a certain value
    });

    test('Validate if value is true', () => {
        expect(getValue('true')).toBeTruthy(); // it only fails when at this point we obtain a falsy value (remember the type of truthy values)
    });

    test('Validate if value is false', () => {
        expect(getValue('false')).toBeFalsy(); // it only fails when at this point we obtain a truthy value (remember the type of false values)
    });

    test('Validate if value is NaN', () => {
        expect(NaN).toBeNaN(); // it only fails when at this point we don't obtain NaN value
    });
})