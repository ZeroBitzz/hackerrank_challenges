function cutTheSticks(arr) {
    let sticksLeftArr = [arr.length]
    let newArr = []
    let smallestStick = arr[0]
    while(true){
        newArr = []
        for(let i=1; i<arr.length; i++){
            if()
        }
        for(let i=0; i<arr.length; i++){
            if(arr[i] > 1){
                arr[i] 
                newArr.push(Math.ceil(arr[i]))
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