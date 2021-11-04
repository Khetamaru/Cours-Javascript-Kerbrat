/**
 * @param {string} haystack
 * @param {string} needle
 * @param {number} startIndex
 * @returns {number}
 */
function contains(haystack, needle, startIndex) {

    if (startIndex == null) { startIndex = 0 }

    if (startIndex + needle.length > haystack.length) {

        return -1;
    }
    
    for(let i = startIndex; i < haystack.length; i++) {

        if (haystack[i] == needle[0]) {

            if (wordTesting(haystack, needle, i)) {

                return i;
            }
        }
    }

    return -1;
}

/**
 * @param {string} haystack
 * @param {string} needle
 * @param {number} index
 * @returns {boolean}
 */
function wordTesting(haystack, needle, index) {

    for(let i = 0; i < needle.length; i++) {

        if (haystack[index + i] != needle[i]) {

            return false;
        }
    }

    return true;
}

console.log(contains("ce test est un test", "test", 10));
console.log(contains("ce test est un test", "test", 1));
console.log(contains("ce test est un test", "teste", 1));
console.log(contains("ce test est un test", "test"));