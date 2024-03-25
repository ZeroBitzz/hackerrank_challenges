let x = 49860
let y = 205494
let d = 155635764

function beautifulDays(x,y,k){
    let loopCount = Math.abs(x-y)
    let xLength = x.toString().length
    let flippedNum = ''
    let zerosGone = false
    let beautifulDays = 0
    for(let i=0;i<=loopCount;i++){
        for(let f=xLength; f>0; f--){
            if(zerosGone && ((x + i).toString()[f - 1]) === '0'){
                flippedNum += ((x + i).toString()[f - 1])
            }else if(((x + i).toString()[f -1]) !== '0'){
                flippedNum += ((x + i).toString()[f - 1])
                zerosGone = true
            }
        }
        if((((x + i)-(parseInt(flippedNum)))%k) === 0){
            beautifulDays += 1
        }
        flippedNum = ''
    }
    return beautifulDays
}

console.log(beautifulDays(x,y,d))