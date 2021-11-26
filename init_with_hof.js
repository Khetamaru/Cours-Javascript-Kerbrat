function initWith(size, f) {
    return Array.from(new Array(size)).map((_, i) => f(i)); 
}

const initWithZeros = function(size) { return initWith(size, () => 0); }
const initFrom = function(size, nb) { return initWith(size, index => nb + index); }

console.log(initWithZeros(8)); // [0, 0, 0, 0, 0, 0, 0, 0]
console.log(initFrom(12, 42)); // [42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53]