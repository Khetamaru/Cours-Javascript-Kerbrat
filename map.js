/*
Implémenter une fonction map(iterable, f) qui retournera un objet iterable, 
qui lui-même énumèrera chaque élément de iterable transformé par la fonction f.

Premier exemple :

Create a iterable object (similar to the class Range).
*/

function map(iterable, f) {

    let index = 0;

    return {
        [Symbol.iterator]: () => ({
            next() {
                return index < iterable.length ?
                    { value: f(iterable[index++]), done: false } :
                    { done: true};
            }
        })
    };
}

const helloIterable = map("hello", v => v.toUpperCase());
const iterator = helloIterable[Symbol.iterator]();
console.log(iterator.next().value == "H");
console.log(iterator.next().value == "E");
console.log(iterator.next().value == "L");
console.log(iterator.next().value == "L");
console.log(iterator.next().value == "O");
console.log(iterator.next().done == true);