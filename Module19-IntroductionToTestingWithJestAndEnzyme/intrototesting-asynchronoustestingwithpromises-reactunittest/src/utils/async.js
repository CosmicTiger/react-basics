import { setTimeout } from 'timers';

export const getDataCallback = (callback) => {
    
    // Api HTTP Request
    const name = 'Luisángel Marcia'
    
    setTimeout(() => {
        callback(name);
    }, 2000);
}

export const getDataPromise = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Luisángel Marcia');
        }, 2000);
    });
}

export const getDataPromiseError = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject('Error');
        }, 2000);
    });
}
