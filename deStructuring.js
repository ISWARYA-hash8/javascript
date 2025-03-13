let arr =[10,20,30,40,50,60,70,80,90,100,110,120]
let fval = arr[0];
console.log(arr[0]);
console.log(fval); //destructuring
// let [a,b,c,d] =arr; //we are destructuring 4 values a , b c d
// console.log(a,c,d);

let [a,,,d] = arr //we are destructuring only 2 values a and d so we are skipping the b and c by using comma 
console.log( a , d ); //space is important in between each character else it wil throw error

let [a1,a2,a3, ...a4 ] = arr //here we are structuring the rest of the values so we call it here as rest operator not spread operator
console.log(a1,a2,a3,a4) // here we destructured first three values
//for destructuring balance values we have to use rest operator
