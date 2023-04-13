// Ques-1:- Write a function that takes in a number and returns the factorial of that number.
// Soln:- 

function factorialize(num) {
    if (num === 0 || num === 1)
      return 1;
    for (var i = num - 1; i >= 1; i--) {
      num *= i;
    }
    return num;
  }