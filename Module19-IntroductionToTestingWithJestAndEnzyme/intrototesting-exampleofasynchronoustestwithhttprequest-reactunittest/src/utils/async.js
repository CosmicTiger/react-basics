import { setTimeout } from 'timers';

export const getDataCallback = (callback) => {
    
    // Api HTTP Request
    const name = 'Luisángel Marcia'
    
    setTimeout(() => {
        callback(name);
    }, 300);
}

export const getDataPromise = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Luisángel Marcia');
        }, 300);
    });
}

export const getDataPromiseError = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject('Error');
        }, 300);
    });
}

export const getUsers = async () => {
    
    const res = await fetch('https://jsonplaceholder.typicode.com/users/5');
    const user = await res.json();

    return user;

}
