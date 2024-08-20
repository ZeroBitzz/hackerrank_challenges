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
                console.log(`current ${arr[i]}`)
                arr[i] -= smallestStick
                arr.push(arr[i])
            }
        }
        if(newArr.length === 0){
            break
        }
        console.log(newArr)
        sticksLeftArr.push(newArr.length)
    }
    console.log(sticksLeftArr)
}

testArr = [1,2,3,4,3,3,2,1]
cutTheSticks(testArr)