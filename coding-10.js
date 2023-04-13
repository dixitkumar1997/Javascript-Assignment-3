// Ques-10:- 10	Write a function that takes in an array of objects and returns the object with the highest value of a specific property.
// Soln:-


function HighestValueObj(arr , propname){
    let max=0;
    for(let i=0;i<arr.length;i++){
        
        for(let key in arr[i]){
            if(key===propname){
                if(arr[i][key]>max){
                    max= arr[i][key]
                }
            }
        }
    }
    for(let i=0;i<arr.length;i++){
        for(let key in arr[i]){
            if(key===propname){
                if(arr[i][key]==max){
                    return arr[i];
                }
            }
        }
    }
}