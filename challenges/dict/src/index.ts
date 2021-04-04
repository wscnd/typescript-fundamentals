export type Dict<T> = {
    [k: string]: T | undefined;
};

// Array.prototype.map, but for Dict
export function mapDict<T, S>(
    dict: Dict<T>,
    fn: (currentValue: T) => S
): Dict<S> {
    const out: Dict<S> = {};
    Object.keys(dict).forEach(currentValue => {
        const item = dict[currentValue];

        if (typeof item !== 'undefined') {
            out[currentValue] = fn(item);
        }
    });
    return out;
}

mapDict({
    a: 'a',
    b: 'b',
    c: 'c'
}, str => ({ val: str }));

// Array.prototype.reduce, but for Dict
export function reduceDict<T, S>(
    dict: Dict<T>,
    reducer: (acc: S, curValue: T, idx: number) => S,
    initialValue: S
) {
    let accumulator: S = initialValue;
    Object.keys(dict).forEach((dictElm, idx) => {
        const key = dict[dictElm];

        if (typeof key !== 'undefined') {
            accumulator = reducer(accumulator, key, idx);
        }
    });
    return accumulator;
}