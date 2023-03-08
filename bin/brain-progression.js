let arr = []
  const progres = Math.floor(Math.random()*10)
  console.log (progres)

  let firstElement = Math.floor(Math.random()*20)
  let result = firstElement
 for (i=0; i<=10; i+=1){
  result = result+progres
  arr.push(result)
   }
  console.log(arr)

let random = (arr, ind) => {
  let ind = Math.floor(Math.random()*10)
  let element = ".."
  arr[ind] = element
  return arr
}
console.log(arr)
