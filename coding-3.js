// Ques-3:- 3	Write a function that takes in an array of numbers and returns the average of the numbers.
// Soln:-


function AverageOfNumbers(arr){
    let sum=0;
    let count=0;
    for(let i=0;i<arr.length;i++){
        sum+=arr[i];
        count++;
    }
    return(sum/count);
}