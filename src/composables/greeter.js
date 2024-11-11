import {ref} from "vue";

const greeting = 'hello';

export function useGreeter() {
    const greet = (name) => {
        return `greeting ${name}!`;
    }

    const debug = (obj) => {
        return JSON.stringify(obj, null, 2);
    }
    return {
        greet,
        debug
    }
}
