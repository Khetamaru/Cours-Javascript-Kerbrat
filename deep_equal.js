function deepEqual(a1, a2) {

    let temp1;
    let temp2;

    for (let i = 0; i < a1.length; i++) {

        if(a1[i] instanceof Array) {

            temp1 = a1[i];
            temp2 = a2[i];

            if (!temp1.every((val, index) => val === temp2[index])) { return false; }

            a1.splice(i, 1);
            a2.splice(i, 1);
        }
    }

    return a1.every((val, index) => val === a2[index]);
}

const a1 = [1, 2, [3, 4], 5];
const a2 = JSON.parse(JSON.stringify(a1)); // Deep copy
console.log(a1 === a2); // => false
console.log(deepEqual(a1, a2)); // => true