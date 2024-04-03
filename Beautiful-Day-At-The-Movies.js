let x = 49860 
let y = 205494 
let d = 155635764
console.log(Number.isInteger(0))
console.log(Number.isInteger(-1))
function beautifulDays(x,y,k){
    let loopCount = Math.abs(x-y)
    let zerosGone
    let beautifulDays = 0
    for(let i=0;i<=loopCount;i++){
        zerosGone = false
        let flippedNum=(x+i).toString().split('').reverse().join('')
        // console.log(`flipped num is ${flippedNum}`)
        if(Number.isInteger(Math.abs(((x+i)-flippedNum)/k))){
            beautifulDays += 1
        }
    }
    return beautifulDays
}
console.log(beautifulDays(x,y,d))