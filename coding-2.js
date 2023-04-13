// Ques-2:- 2	Write a function that takes in a string and returns the string reversed.
// Soln:- 


function reversedstring(str){
    let new_str=""
    for(let i=str.length-1;i>=0;i--){
        new_str+= str[i];
    }
    return new_str;
}