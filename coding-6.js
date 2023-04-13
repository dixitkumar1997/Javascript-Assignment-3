// Ques-6:- Write a function that takes in a number and returns true if the number is prime, false otherwise.
// Soln:-


function prime(num){
    let factors=0;
    for(let i=1;i<=num;i++){
        if(num%i==0){
            factors++;
        }
    }
    if(factors==2){
        return true;
    }
    return false;
}