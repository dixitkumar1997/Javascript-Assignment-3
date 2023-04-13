// Ques-9:- Write a function that takes in an array of strings and returns the shortest string in the array.
// soln:- 


function ShortestString(arr){
    let shortest= Infinity;
    for(let i=0;i<arr.length;i++){
        if(arr[i].length<shortest){
            shortest=arr[i].length;
        }
    }
    for(let j=0;j<arr.length;j++){
        if(arr[j].length==shortest){
            return arr[j];
        }
    }
}