function cutTheSticks(arr) {
    let stickLengthArr = [arr.length]
    let smallestStick = arr[0]
    if(arr.length > 1){
        console.log('array length')
        console.log(arr.length)
        console.log("----------")
        
        // gets smallest stick
        for(let i=1; i<arr.length; i++){
            if(arr[i] < smallestStick){
                smallestStick = arr[i]
            }
        }

        for(let x=0; x<arr.length; x++){
            if((arr[x] - smallestStick) > 0){
                arr[x] -= smallestStick
            }else{
                arr.splice(arr.indexOf(arr[x]), 1)
            }
            console.log("newarr")
            console.log(arr)
            console.log('--------')
        }
        stickLengthArr.push(arr.length)
        cutTheSticks(arr)
    }else{
        return
    }
    
}

// testArr = [5,4,4,2,2,8]
testArr = [1,2,3,4,3,3,2,1]
cutTheSticks(testArr)