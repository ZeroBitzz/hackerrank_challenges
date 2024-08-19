function cutTheSticks(arr) {
    let stickCountArr = [arr.length]
    let newArr = arr
    while(arr.length != 0){
        for(let i=0; i<newArr.length; i++){
            if(arr[i] > 1){
                arr[i] -= 1
            }
        }
    }    

}