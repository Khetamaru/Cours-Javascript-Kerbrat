class Range {

    // Initialise l'objet
    constructor(from, to) {

        this.from = from;
        this.to = to;
    }

    includes(x) { return !!(this.from < x & this.to > x); }
    toString() { return "(" + this.from + "..." + this.to + ")"; }

    // Analyse une chaîne de caractère au format "(from...to)" et retourne une nouvelle instance
    static parse(s) {

        let regex = this.integerRangePattern;
        let tab = regex.exec(s);

        return new Range(tab[1], tab[2]);
    }

    static integerRangePattern = /^\((-?\d+)...(-?\d+)\)$/;
}

class Span extends Range {

    constructor(value, extend) {

        if(extend < 0) {

            super(value + extend, value);
        }
        else {

            super(value, value + extend);
        }
    }
}

let range1 = new Range(3, 8);
console.log(range1.toString());

let range2 = Range.parse("(1...5)");
console.log(range2.toString());

console.log(range1.includes(6));
console.log(range2.includes(2));
console.log(range2.includes(6));

console.log(new Span(2, 4).toString());
console.log(new Span(12, -8).toString());