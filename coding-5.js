// Ques-5:-Write a function that takes in an array of objects and returns a new array with the values of a specific property.
// Soln:-


function specificProperties(arr,propname){
        let new_arr=[];
        for(let i=0;i<arr.length;i++){
          for(let key in arr[i]){
            if(key===propname){
                new_arr.push(arr[i][key])
            }
          }
        }
        return new_arr;
       }