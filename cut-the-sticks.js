function cutTheSticks(arr) {
    let stickCountArr = []
    let newArr = arr
    let loopCount = arr[0]
    for(let i=0; i<arr.length; i++){
        if(arr[i] > loopCount){
            loopCount = arr[i]
        }
    }
    console.log(`loopcount: ${loopCount}`)
    for(let i=0; i<loopCount; i++){
        let tempArr = []
        for(let i=0; i<newArr.length; i++){
            if(newArr[i] !== 1){
                newArr[i] -= 1
                tempArr.push(newArr[i])
            }
        }
        stickCountArr.push(tempArr.length)
    }    
    console.log(stickCountArr)
}

testArr = [5,4,4,2,2,8]
cutTheSticks(testArr)