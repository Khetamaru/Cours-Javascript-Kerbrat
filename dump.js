function dump(obj) {

    let str = "{";

    for (let [key, value] of Object.entries(obj)) {
        
        switch(typeof value) {

            case('number'):

                str += key + ":" + value + ", "
            break;

            case('string'):

                str += key + ":" + "\"" + value + "\", "
            break;

            case(typeof []):

                str += key + ":[" + value + "], ";
            break;
        }
    }
    str = str.slice(0, -2);
    str += "}";

    return str;
}

let obj = {};
obj.firstname = "Alan";
obj.lastname = "Turing";
obj.old = 28;
obj.birthday = [1921, 6, 23];
console.log(dump(obj)); // => {firstname:"Alan",lastname:"Turing",birthday:[1921,6,23]}