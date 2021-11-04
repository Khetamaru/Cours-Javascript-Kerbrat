function compose(increment, double) {

    return value => increment(double(value));
}

const increment = x => x + 1;
const double = y => y * 2;
const timesTwoPlusOne = compose(increment, double);
console.log(timesTwoPlusOne(5));