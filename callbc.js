function add(a,b,callback){
    return (a+b)
    console.log(callback(20,10))
}
function subtract(a,b){
    return a-b;
}
console.log(add(20,30,subtract)) 