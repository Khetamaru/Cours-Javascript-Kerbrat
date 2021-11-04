function padLeft(char, str, quantity) {

    if (str.length > quantity) {

        return str;
    }

    let diff = quantity - str.length;

    for (let i = 0; i < diff; i++) {

        str = char + str;
    }

    return str;
}

const padZeros = function(str, quantity) { return padLeft("0", str, quantity); }
const padSpaces = function(str, quantity) { return padLeft(" ", str, quantity); }

console.log(padLeft("u", "test", 8));
console.log(padLeft("u", "test", 2));
console.log(padZeros("test", 8));
console.log(padSpaces("test", 8));