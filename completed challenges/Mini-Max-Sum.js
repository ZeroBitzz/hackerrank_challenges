let arr = [2,1,3,5,4]

function minmaxsum(arr){
    let minArr = []
    let maxArr = []
    let maxSum = 0
    let minSum = 0
    let indexToRemoveMax = arr.indexOf(arr[0])
    let indexToRemoveMin = arr.indexOf(arr[0])
    let maxRemoved = false
    let minRemoved = false
    //grabs the smallest numbers index
    for(let i=1; i<arr.length; i++){
        if(arr[indexToRemoveMax] < arr[i]){
            indexToRemoveMax = arr.indexOf(arr[i])
        }
    }
    //removes the biggest number
    for(let i=0; i<arr.length; i++){
        if(arr[indexToRemoveMax] === arr[i] && !maxRemoved){
            maxRemoved = true
            continue
        }
        minArr.push(arr[i])
    }
    //adds all the smallest numbers
    for(let i=0; i<minArr.length; i++){
        minSum += minArr[i]
    }
    

    //grabs the biggest numbers index
    for(let i=1; i<arr.length; i++){
        if(arr[indexToRemoveMin] > arr[i]){
            indexToRemoveMin = arr.indexOf(arr[i])
        }
    }
    //removes the smallest number
    for(let i=0; i<arr.length; i++){
        if(arr[indexToRemoveMin] === arr[i] && !minRemoved){
            minRemoved = true
            continue
        }
        maxArr.push(arr[i])
    }
    //adds all the biggest numbers
    for(let i=0; i<maxArr.length; i++){
        maxSum += maxArr[i]
    }

    console.log(minSum, maxSum)
}

minmaxsum(arr)

// completed