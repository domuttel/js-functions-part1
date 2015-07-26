// // 1. Define a function called `sum` that takes two numbers as arguments and returns their sum.
//Trial 1
// function sum(num1, num2) {
//   var addEm = num1 + num2;
// }
// console.log(sum(2, 5));

//Corrected trial
function sum(num1, num2) {
  return num1 + num2
}
console.log(sum(2,4))


// // 1. Define a function called `isEqual` that takes two arguments and returns a boolean.
// // Return true if the two arguments are equal and return false if they are not.
// // My original solution **DESTRUCTIVE
// // function isEqual(num1, num2) {

function isEqual(numA, numB) {
  if (numA === numB) {
    return true;
  } else {
    return false;
  }
}
console.log(isEqual(3, 6));
// // Define a function called `discountPercentage` that returns the total discount ($),
// // given the original amount and discount percentage (as arguments).
// // Return a warning if the discount amount is greater than 100 or less that 0 percent.

//First attempt

// function discountPercentage(amount, discount) {
//   if (discount > 100 && discount < 0) {
//     prompt("Discount amount must be between 0-100", "ex");
//   } else {
//     return amount * (discount / 100);
//   }
// }
// console.log(discountPercentage(45, 34));

//Second attempt

function discountPercentage(amount, discount) {
  while (discount > 100 || discount < 0) {
    discount = prompt("Discount amount must be between 0-100");
  }
    return amount * (discount / 100);
}
console.log(discountPercentage(100, 20));

// Define a function called `stringCapitalize` that takes a string as an argument and
// returns the same string with the first letter of each word capitalized. Assume that each
// individual work is separated by only one space.

function stringCapitalize(string) {
  var words = string.split(" ");
  for (var i = 0; i < words.length; i++) {
    words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
  }
  return words.join(" ");
}
console.log(stringCapitalize("This, right here, is my, string!"));

// conver string to array

// loop through array passing each word

// function takes a word and capitalizes first letter

// return the word

// push each word to a new array in the loop

// once loop is done then convert the new array to a string and return it

// Define a function called `evenNumbers` that takes a random integer, from 0 to 100,
// and outputs all the even integers from 0 to that random number.

//Firtst attempt

// function evenNumbers(min, max) {
//   Math.floor((Math.random() * max) + min);
//   push.randomNum();
//   console.log(randomNum);
// }

function evenNumbers(ranNum) {

for (i = 0; i < ranNum; i = i + 2);
  return i;
}
console.log(evenNumbers(35));
// How to integrate a random number could be then placed as ranNum in function?
// (Math.floor((Math.random() * 100) + 1)

// 1. Define a function called `isDivisible` that takes two arguments
// and returns a boolean. Return true if the first argument
// is divisible by the second; otherwise, return false.

function isDivisible(a, b) {
  var divide = a % b;
  if (divide === 0) {
    return true;
  } else {
    return false;
  }
}
console.log(isDivisible(2, 2));

// Bonus**: Write a function called `oddNumbers` that takes a random integer, from 0 to 100. If the number is greater than 40 then output all the odd integers from 40 to the random number. If the number is less than 40, output all the odd integers from 0 to 40.
//Attempt 1 returns 1
// var randomNum = Math.floor((Math.random() * 100) + 1);

// function oddNumbers(newRandomNum) {
//   newRandomNum = randomNum;
//   for(i = 1; i < randomNum; i = i + 2);
//     return i;
// }
// console.log(oddNumbers(randomNum));

// function discountPercentage(amount, discount) {
//   while (discount > 100 || discount < 0) {
//     discount = prompt("Discount amount must be between 0-100");
//   }
//     return amount * (discount / 100);
// }
// console.log(discountPercentage(100, 20));

function oddNumbers (randomNum) {
  if (randomNum < 40 || randomNum > 0) {
    for (i = 1; i < randomNum; i = i + 2)
      return i;
  } else {

  } (randomNum > 40 || randomNum < 100) {
    for (var a = 1; a < randomNum; a = a + 2);
      return a;
    }
}
console.log();
}
