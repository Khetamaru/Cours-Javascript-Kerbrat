function padRight(char, str, quantity) {

    if (str.length > quantity) {

        return str;
    }

    let diff = quantity - str.length;

    for (let i = 0; i < diff; i++) {

        str += char;
    }

    return str;
}

const padZeros = function(str, quantity) { return padRight("0", str, quantity); }
const padSpaces = function(str, quantity) { return padRight(" ", str, quantity); }

console.log(padRight("u", "test", 8));
console.log(padRight("u", "test", 2));
console.log(padZeros("test", 8));
console.log(padSpaces("test", 8));