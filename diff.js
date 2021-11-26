function diff(source, propertyNames) {

    Array.from(Object.keys(propertyNames)).forEach(i => delete source[i]);
    
    return source;
}

let o1 = { r: 0, g: 0, b: 0, a: 0 };
let withoutOpacity = { a: null };
let objectWithoutOpacity = diff(o1, withoutOpacity);
console.log(objectWithoutOpacity); // => { r: 0, g: 0, b: 0 }
console.log(o1 === objectWithoutOpacity); //false