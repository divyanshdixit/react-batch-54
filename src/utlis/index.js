export const range = (start, end) => {
    let length = end - start+1;
    return Array.from({length}, (_, idx) => idx+ start)// creates an array from an iterable object
}