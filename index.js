const convert = require('./Answers/convert1.js');
const numberToEnglish = require('./Answers/NumberToEnglish.js');
const secondLargest = require('./Answers/SecondLarget.js');

// Convert Currency
console.log(convert(3, "CAD"), 'Convert Currency');

// Second Largest
console.log(secondLargest([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

// Number to English
console.log(numberToEnglish(1050));