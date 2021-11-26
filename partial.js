function partial(action, x) {

    return (y, z) => f(x, y, z);
}

const f = (x, y, z) => x * (y - z);

let fun = partial(f, 2);

console.log(fun(3, 4));
console.log(fun(5, 4));