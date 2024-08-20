function cutTheSticks(arr) {
    let sticksLeftArr = [arr.length]
    let newArr = []
    let smallestStick = arr[0]
    for(let x=1; x<arr.length; x++){
        if(arr[x] < smallestStick){
            smallestStick = arr[x]
        }
    }
    while(true){
        newArr = []
        for(let i=0; i<arr.length; i++){
            if(arr[i] > 1){
                arr[i] -= smallestStick
                newArr.push(arr[i])
            }
        }
        if(newArr.length === 0){
            break
        }
        for(let y=1; y<newArr.length; y++){
            if(newArr[y] < smallestStick){
                smallestStick = newArr[y]
            }
        }
        sticksLeftArr.push(newArr.length)
    }
    console.log(sticksLeftArr)
    return sticksLeftArr
}

testArr = [5,4,4,2,2,8]
// testArr = [1,2,3,4,3,3,2,1]
cutTheSticks(testArr)