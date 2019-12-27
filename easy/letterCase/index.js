/**
 * @param {string} S
 * @return {string[]}
 */
const letterCasePermutation = function(S) {
    const isNum = char => ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'].includes(char);

    console.log(isNum(6));
};

const x = 'a1b2'; // ["a1b2", "a1B2", "A1b2", "A1B2"]

// eslint-disable-next-line prettier/prettier
console.log(letterCasePermutation(x));