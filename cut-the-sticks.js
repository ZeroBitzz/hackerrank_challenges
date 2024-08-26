function cutTheSticks(arr) {
    // variable initialization
    let stickLengthArr = [arr.length]
    let smallestStick = arr[0]
    let rewriterArr = []
    while(arr.length > 0){
        // variable reset
        rewriterArr = []
        smallestStick = arr[0]
        // gets smallest stick
        for(let i=1; i<arr.length; i++){
            if(arr[i] < smallestStick){
                smallestStick = arr[i]
            }
        }
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
    }
    return stickLengthArr
}
// testArr = [1,13,3,8,14,9,4,4]
testArr = [5,4,4,2,2,8]
// testArr = [1,2,3,4,3,3,2,1]
console.log(cutTheSticks(testArr))

//completed