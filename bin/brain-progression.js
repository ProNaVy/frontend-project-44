let arr = []
  const progres = Math.floor(Math.random()*10)
 

  let firstElement = Math.floor(Math.random()*10)
  let result = firstElement
 for (i=0; i<=10; i+=1){
  result = result+progres
  arr.push(result)
   }

let ind = Math.floor(Math.random()*10)
let random = arr.splice(ind, 1, "..")

  console.log(arr)