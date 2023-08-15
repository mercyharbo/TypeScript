let myName: string = 'code with mercy'
let meaning: number;
let isLoading: boolean;
let album: any;

const sum = (a: number, b: string | number) => {
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new Error('Invalid input. Both parameters must be numbers.')
    }
    return a + b
}

