// Ques-8:- Write a function that takes in an array of numbers and returns the largest number in the array.
// Soln:-


function LargestNumber(arr){
    let largest=0;
    for(let i=0;i<arr.length;i++){
        if(arr[i]>largest){
            largest=arr[i];
        }
    }
    return largest;
}