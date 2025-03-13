let arr = [1,2,3,[4,5,6]]

let newarr = arr.flat(); //it will remove the nested araay and returns the array as flat array
console.log(newarr)


let nestedarr = [1,2,3,4,[5,6,[7,8,[9,10]]]] //we have nested array inside nested array

let arraynew  = nestedarr.flat(2) //here we ues 2 bcos we have 2 nested array
console.log(arraynew)

///mulitple nested array can be remove using the infinity which removes all neted array and becomes flat array
let new_arr = nestedarr.flat(Infinity)
console.log(new_arr)

//----fill method 

let arrayy = [10,20,30];
arrayy.fill(101,0,2); //fill( element , start index, end  index)
console.log(arrayy)