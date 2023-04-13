// Ques-4:-4	Write a function that takes in an array of strings and returns a new array with each string reversed.
// Soln:-


function arraywithreversedstring(arr){
    let new_arr=[];
    for(let i=0;i<arr.length;i++){
        let new_str="";
        for(let j=arr[i].length-1;j>=0;j--){
            new_str=new_str+arr[i][j];
        }
        new_arr.push(new_str);
    }
    return new_arr;
}