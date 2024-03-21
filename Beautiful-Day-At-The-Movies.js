let x = 49860
let y = 205494
let d = 155635764

function beautifulDays(x,y,k){
    // console.log(Math.abs(x-y))
    let loopCount = Math.abs(x-y)
    let xLength = x.toString().length
    let flippedNum = ''
    let zerosGone = false
    let beautifulDays = 0
    for(let i=0;i<=loopCount;i++){
        for(let f=xLength; f>0; f--){
            // console.log((x + i).toString()[f - 1])
            if(((x + i).toString()[f -1]) != '0'){
                // console.log(`the num is ${((x + i).toString()[f -1])}`)
                flippedNum += ((x + i).toString()[f -1])
                zerosGone = true
            }else if(zerosGone && ((x + i).toString()[f -1]) == '0'){
                flippedNum += ((x + i).toString()[f -1])
            }
        }
        // console.log(`flipped num ${flippedNum}`)
        // console.log('-------')
        if((((x + i)-(parseInt(flippedNum)))%k) === 0){
            beautifulDays += 1
            // console.log('beautiful day')
        }
        flippedNum = ''
    }
    return beautifulDays
}

console.log(beautifulDays(x,y,d))