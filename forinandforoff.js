let arr=[10,20,30,40,50]
console.log(arr[0]);
for(let i=0;i<arr.length;i++){ //forloop
    console.log(arr[i]); 
}
let str = "javascript"
for(let i=0;i<str.length;i++){
    console.log(str[i]);
}
//for of loop 
for(let i of arr){
    console.log(i);
}
//for in loop
let obj={
    id:1,
    name:"ishu",
    walk(){
        console.log("im walking");
    }

}
for(let i in obj){
    console.log(obj[i]);
}
