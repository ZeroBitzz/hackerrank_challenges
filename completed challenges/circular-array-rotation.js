function circularArrayRotation(a, k, queries) {
    let savedInt
    let rewriterArr = []

    // creates two of the inputed array for scanning
    for(let r=0; r<a.length; r++){
        rewriterArr.push(a[r])
    }
    for(let r=0; r<a.length; r++){
        rewriterArr.push(a[r])
    }

    // puts dummy values in a so scanning still correlates properly with increased array size from above
    const firstALength = a.length
    for(let h=0; h<firstALength; h++){
        a.unshift('f')
    }
    let queriesArr = []

    // removes excess loops from array 
    if(k > a.length){
        k = (k%a.length)
    }

    // sets new a values and breaks when it hits the dummy values
    for(let i=(a.length); i>0; i--){
        if(i === (a.length/2)){
            break
        }
        a[i-1] = rewriterArr[(i-1) - k]
    }

    // gets the final array for the queries
    let newArr = []
    for(let l=0; l<a.length; l++){
        if(a[l] != 'f'){
            newArr.push(a[l])
        }
    }
    
    // gets the value of the queries and returns
    for(let g=0; g<queries.length; g++){
        queriesArr.push(newArr[queries[g]])
    }
    return queriesArr
}

arr = [3,5,9,7]

console.log(circularArrayRotation(arr, 2, [1,2]))

//completed