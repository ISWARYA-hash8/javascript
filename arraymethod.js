// all these methods affect the original array
let  arr = [20,30,40,50]
let poppedval = arr.pop();
console.log(arr,poppedval)

arr.push(1,2,3,"ishu",[22,222,2222])
console.log(arr)

//------

arr.shift() //to remove first element 
let firstele = arr.shift()//stores frst element
console.log(arr);

//------ unshift adds the element in the beginning

arr.unshift(-1,-2,-3,-4,1,2,3,4)
console.log(arr)

//--------------splice method splice(start,count, ...items)
let newArr = [1,11,1111,11111]

//newArr.splice() //doesnt remove any no condition so
//newArr.splice(1)
//newArr.splice(1,2)  // remove 2 element from first index
//newArr.splice(1,2,"newval",true,[11,12]) //replacing the element 
//newArr.splice(1,2,("newval",true,[11,12])) 
newArr.splice(0, 0 ,100,200,300 ) //doesnt remove any element it just add the element because index and count is 0
 newArr.splice(-1,0,100,200,300,400) // -1 means last index adds the number at last
console.log(newArr)
