export const sum = (a, b) => {
    return a + b;
}

export const minus = (a, b) => {
    return a - b;
}

export const multiply = (a, b) => {
    return a * b;
}

export const divide = (a, b) => {
    return a / b;
}

export const getRandomNum = (min, max) => {
    return Math.floor(
        Math.random() * (max - min + 1) + min
    );
}