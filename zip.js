/*
Implémenter un generator zip(...iterables) 
qui combine les valeurs de plusieurs iterables 
une à la fois.

Quand l’un des iterable est vide, on arrête de lui 
demander des valeurs et on continue sur les 
iterables restants.

Exemple :
*/

function* zip(...iterables) {

    let array = [];

    iterables = iterables.map(
        iterable => (!iterable.next && iterable[Symbol.iterator]) ? 
        iterable[Symbol.iterator]() : 
        iterable);

    let iterable;
    let val;

    while(iterable = iterables.shift()) {

        val = iterable.next();

        if(!val.done) {
            array.push(val.value);
            iterables.push(iterable);
        }
    }

    console.log(array);
}

[...zip("abc", [1, 2, 3])]; // ['a', 1, 'b', 2, 'c', 3]
[...zip("abcd", "123", "+-")]; // ['a', '1', '+', 'b', '2', '-', 'c', '3', 'd']