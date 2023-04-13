// Ques-7:-Write a function that takes in a string and returns true if the string is a palindrome, false otherwise.
// Soln:-



function Palindrome(str){
    let new_str="";
    for(let i=str.length-1;i>=0;i--){
        new_str+=str[i];
    }
    if(str==new_str){
        return true;
    }
    return false;
}