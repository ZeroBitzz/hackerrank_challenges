function cutTheSticks(arr) {
    let stickLengthArr = [arr.length]
    let smallestStick = arr[0]
    let rewriterArr = []
    while(arr.length > 0){
        rewriterArr = []
        // gets smallest stick
        for(let i=0; i<arr.length; i++){
            if(arr[0] < smallestStick){
                smallestStick = arr[0]
            }
        }
        console.log(`The current array: ${arr}`)
        console.log(`Smallest Stick ${smallestStick}`)
        // subtracts from each stick
        for(let x=0; x<arr.length; x++){
            arr[x] -= smallestStick
            if(arr[x] >= 1){
                rewriterArr.push(arr[x])
            }
        }
        // set the array to the new values with no zeros or negatives then push length to stickLengthArr
        arr = rewriterArr
        if(arr.length > 0){
            stickLengthArr.push(arr.length)
        }
        console.log(`New arr: ${arr}`)
        console.log('-----------')
    }
    return stickLengthArr
}

// testArr = [5,4,4,2,2,8]
testArr = [1,2,3,4,3,3,2,1]
console.log(cutTheSticks(testArr))
