let x = 49860
let y = 205494 
let d = 155635764
console.log(Number.isInteger(0))
console.log(Number.isInteger(-1))
function beautifulDays(x,y,k){
    let loopCount = Math.abs(x-y)
    let xLength = x.toString().length
    let flippedNum = ''
    let zerosGone
    let beautifulDays = 0
    for(let i=0;i<=loopCount;i++){
        zerosGone = false
        flippedNum = ''
        // console.log(`regular num ${x+i}`)
        for(let f=xLength; f>0; f--){
            if(zerosGone && ((x + i).toString()[f - 1]) === '0'){
                flippedNum += ((x + i).toString()[f - 1])
            }else if(((x + i).toString()[f -1]) !== '0'){
                flippedNum += ((x + i).toString()[f - 1])
                zerosGone = true
            }
        }
        // console.log(`flipped num ${flippedNum}`)
        // console.log('----')
        if((((x+i)-(flippedNum))/k)%1 === 0 || ((x+i)-(flippedNum))/k === 0){
            beautifulDays += 1
        }
    }
    return beautifulDays

}
console.log(beautifulDays(x,y,d))