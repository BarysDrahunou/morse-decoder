const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {
    let result = [];
    for (let i = 0; i < expr.length; i += 10) {
        let arg = expr.substr(i, 10);
        let key = "";
        if (arg === "**********") {
            result.push(" ")
        } else {
            for (let j = 0; j < 5; j++) {
                if (arg.substr(8 - 2 * j, 2) === "11") key = "-" + key;
                if (arg.substr(8 - 2 * j, 2) === "10") key = "." + key;
            }
            result.push(MORSE_TABLE[key]);
        }
    }
    return result.join("");
}


module.exports = {
    decode
}