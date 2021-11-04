function partial(action, x) {

    return (y, z) => f(x, y, z);
}

const f = (x, y, z) => x * (y - z);

console.log(partial(f, 2)(3, 4));