function split(str, sep) {

    let endStr = [];
    let k = 0;

    let startSep = 0;
    let endSep = 0;

    let lastEndSep = 0;

    if (str.length <= 0 || sep.length <= 0) {

        return "";
    }

    for (let i = 0; i < str.length; i++) {

        if (str[i] == sep[0]) {

            let j = 1;
            startSep = i;
            while (j < sep.length && str[i + j] == sep[j]) {

                j++;
            }

            if (j == sep.length) {

                endSep = i + j;
                let word = "";

                for (let m = lastEndSep; m < startSep; m++) {

                    word += str[m];
                }

                endStr[k] = word;
                k++;
                lastEndSep = endSep;
            }
        }
    }

    let word = "";

    for (let m = lastEndSep; m < str.length; m++) {

        word += str[m];
    }
    endStr[k] = word;

    return endStr;
}

console.log(split("testestetsetsest", "e"));