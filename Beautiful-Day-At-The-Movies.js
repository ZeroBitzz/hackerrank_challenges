let x = 49860 
let y = 205494 
let d = 155635764
function beautifulDays(x,y,k){
    let beautifulDays = 0
    for(let i=0;i<=(Math.abs(x-y));i++){
        let flippedValue=(x+i).toString().split('').reverse().join('')
        Number.isInteger(Math.abs(((x+i)-flippedValue)/k)) ? beautifulDays += 1 : null
    }
    return beautifulDays
}
console.log(beautifulDays(x,y,d))