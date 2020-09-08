/*
    Array Replace
    - Given an array of integers, replace all the occurrences of elemToReplace with substitutionElem

    - Example:
        - For inputArray = [1, 2, 1],
            elemToReplace = 1, and
            substitutionElem = 3, the output should be 
            arrayReplace(inputArray, elemToReplace, substitutionElem) = [3, 2, 3]
*/

let inputArray = [1, 2, 1]
let substitutionElem = 3
let elemToReplace = 1

let arrayReplace = (inputArray, elemToReplace, substitutionElem) => {
    console.log('Before: ' + inputArray)
    inputArray.forEach((elem, index) => {
        if (elem === elemToReplace) {
            inputArray[index] = substitutionElem
        } 
    })
    console.log('After: ' + inputArray)
}

arrayReplace(inputArray, elemToReplace, substitutionElem)


















/*
    Case Insensitive Palindrome

    Given a string, check if it can become a palindrome through a case of change of some
    (possible, none) letters
*/


let testString = "aaBAa"
let testString2 = 'abac'

function isPalindrome(testString) {
    // initialize an array
    let testArray = []
    // converts the under case version of the testString to an array
    for (const letter of testString) {
        testArray.push(letter.toLowerCase())
    }
    let reverseArray = [];
    // creates a copy of the test array, in reverse
    for (let i = testArray.length - 1; i > -1; i--) {
        reverseArray.push(testArray[i])
    }
    console.log(`Input String: ${testArray}
    Reversed: ${reverseArray}`)
    let isPalindrome = true;
    for (let i = 0; i < testArray.length; i++) {
        if (testArray[i] != reverseArray[i]) {
            isPalindrome = false;
        }
    }
    return isPalindrome;
}

console.log(isPalindrome(testString))
console.log(isPalindrome(testString2))













/*
    Enclose in Brackets - Solution
*/

function encloseInBrackets(str) {
    const solution1 = '(' + str + ')' // es5 solution
    const solution2 = `(${str})` // es6 solution
    const solution3 = '('.concat(str,')') // using concat
}















/*
    Number Factorial

    Returns the factorial of an input integer
*/

// using recursive function call...
function factorial(num) {
    if (num == 1) { // base case
        return 1
    } else { // recursive call
        num = num * factorial(num - 1)
        return num
    }
}

console.log(factorial(5))












/*
    First Digit - Solution
*/

function firstDigit(str) {
    const strNums = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    const chars = str.split('')

    for (const char of chars) {
        if (strNums.includes(char)) {
            return char
        }
    }
}

console.log(firstDigit('asdfoik3'))















/*
    Largest Number
    
    input: number of digits
    output: sub 9's for the number of digits
*/


// my solution:
function largestNum(num) {
    if (num <= 0) {
        return 0
    } else {
        let str = ''
        for (let i = 1; i <= num; i++) {
            str += '9'
        }
        return parseInt(str)
    }
}

console.log(largestNum(5))



// teacher's solution:
function largestNumber(num) {
    // one way:
    // let placeholder = ''
    // for (let i = 0; i < num; i++) {
    //     placeholder = placeholder.concat('9')
    // }
    // another way: (not supported by older browsers)
    const placeholder = '9'.repeat(num)

    return parseInt(placeholder)
}

console.log(largestNumber(2))

















/*
    Max Multiple

    Given a divisor and a bound, find the largest integer N such that:
        - N is divisible by a divisor
        - N is less than or equal to bound
        - N is greater than 0
    It is guaranteed that such a number exists

    Example: For divisor = 3 and bound = 10, the output should be = 9
    The largest integer divisible by 3 and not larger than 10 is 9
*/

// my solution:
function maximumMultiple(divisor, bound) {
    for (let i = bound; i > 0; i--) {
        if (i % divisor == 0) {
            return i
        }
    }
}

console.log(maximumMultiple(3, 10))

// teacher solution:
// idea: slow down, find the mathematical approach
function maxMultiple(divisor, bound) {
    // gives the remainder
    const remainder = bound % divisor
    // subtracts the remainder from the bound
    return bound - remainder
}