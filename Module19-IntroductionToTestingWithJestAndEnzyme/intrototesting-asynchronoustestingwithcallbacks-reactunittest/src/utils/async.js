import { setTimeout } from 'timers';

export const getDataCallback = (callback) => {
    
    // Api HTTP Request
    const name = 'Luisángel Marcia'
    
    setTimeout(() => {
        callback(name);
    }, 2000);
}
