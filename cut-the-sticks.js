function cutTheSticks(arr) {
    let sticksLeftArr = [arr.length]
    while(arr.length > 0){
        for(let i=0; i<arr.length; i++){
            if(arr[i] != 1){
                arr[i] /= 2
                Math.ceil(arr[i])
            }else{
                arr.splice(arr.indexOf(arr[i]), 1)
            }
        }
        sticksLeftArr.push(arr.length)
    }
    console.log(sticksLeftArr)
}

testArr = [1,2,3,4,3,3,2,1]
cutTheSticks(testArr)