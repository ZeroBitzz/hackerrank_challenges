let x = 20
let y = 23
let d = 6

function beautifulDays(x,y,k){
    console.log(Math.abs(x-y))
    let loopCount = Math.abs(x-y)
    let xLength = x.toString().length
    let flippedNum;
    for(let i=0;i<=loopCount;i++){
        for(let i=xLength; i>0; i--){
            console.log('flip')
        }
    }
}

beautifulDays(x,y,d)