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
    let exprnew = [];
    exprnew = expr.match(/.{1,10}/g)
    exprnew = exprnew.join(' ');
    let temp = exprnew.replace(/10/g, ".");
    temp = temp.replace(/11/g, "-");
    temp = temp.replace(/00/g, "");
    temp = temp.replace(/\*\*\*\*\*\*\*\*\*\*/g, " ");
    console.log(temp);

    let messageConverted = [];

    temp.split('  ').map(function (word) {
        word.split(' ').map(function (letter) {
            messageConverted.push(MORSE_TABLE[letter]);
        });
        messageConverted.push(' ');
    });
    messageConverted = messageConverted.join('');
    messageConverted = messageConverted.substring(0, messageConverted.length - 1);
    return messageConverted;
}

module.exports = {
    decode
}