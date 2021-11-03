function startsWith(str, start) {

    if (str.length <= 0 || start.length <= 0 || str.length < start.length) {

        return false;
    }

    for (let i = 0; i < str.length; i++) {

        if (str[i] == start[0]) {

            if (i + start.length > str.length) {

                return false;
            }

            let j = 1;
            while (j < start.length && str[i + j] == start[j]) {

                j++;
            }

            if (j == start.length) {

                return true;
            }
        }
    }

    return false;
}

console.log(startsWith("ceci est un test", "teste"));
console.log(startsWith("cec", "test"));
console.log(startsWith("ceci est un test", "test"));
console.log(startsWith("ceci est un test", "wouite"));