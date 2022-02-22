/**
 * Algorithm
 *
 * Step1: If the input is less than 0 (input <= 0), print 'Invalid number'
 * Step2: If the given input is 'number(10)' parse it to number
 * Step2.1: if input is NaN return 'Enter number'
 * Step3: Create a empty array -> arr []
 * Step4: Create a Loop and iterate over the given input
 * Step2: Check whether the given input is divisible by both 3 & 5.
 * Step2.1: If the given input (input % 3 == 0 && input % 5 == 0) print 'Fizz Buzz'
 * Step3: Check whether the given input is divisible by 5.
 * Step3.1: If the given input (input % 5 == 0) print 'Buzz'
 * Step4: Check whether the given input is divisible by 3
 * Step4.1: If the given input (input % 3 == 0) print 'Fizz'
 * Step5: return the arr
 */

function fizzBuzz(num) {
  if (num <= 0) {
    return "Invalid number";
  }
  const parsed = parseInt(num);
  if (isNaN(parsed)) {
    return "Enter number";
  }
  let arr = [];
  for (let i = 1; i <= parsed; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      arr[i] = "Fizz Buzz";
    } else if (i % 5 == 0) {
      arr[i] = "Buzz";
    } else if (i % 3 == 0) {
      arr[i] = "Fizz";
    }
  }
  return arr;
}
console.log(fizzBuzz("15"));
console.log(fizzBuzz(30));
console.log(fizzBuzz("afygfsygacsgxc"));
