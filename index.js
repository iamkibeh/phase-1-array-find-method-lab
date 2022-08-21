// code your solution here
function superbowlWin(games) {

let target = games.find((elem,index,arr)=>{
    return elem.result === 'W'
})

// console.log(target.year)
if(target){
    return target.year
}
   return undefined
}


const record = [
 {year:'2039',result:'W'},
    { year: "1966", result: "N/A"},
    { year: "1965", result: "N/A"},
    { year: "1964", result: "N/A"},
    { year: "1963", result: "N/A"},
    { year: "1962", result: "N/A"},
    { year: "1961", result: "N/A"},
    { year: "1960", result: "N/A"}
  ]

 console.log(superbowlWin(record))