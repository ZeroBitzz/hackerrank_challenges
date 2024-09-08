function circularArrayRotation(a, k, queries) {
    let savedInt
    let rewriterArr = []
    rewriterArr.push(a)
    console.log(rewriterArr)
    let queriesArr = []
    if(k > a.length){
        k -= a.length
        console.log(`cut down k! k's new value ${k}`)
    }else if(k === a.length){
        // gets the value of the queries and returns
        for(let g=0; g<queries.length; g++){
            queriesArr.push(a[queries[g]])
        }
        return queriesArr
    }

    for(let i=0; i<a.length; i++){
        if(a[i + k] === undefined){
            
        }
    }

    // gets the value of the queries and returns
    for(let g=0; g<queries.length; g++){
        queriesArr.push(a[queries[g]])
    }
    console.log(`a is ${a}`)
    return queriesArr
}

arr = [3,5,9,7]

console.log(circularArrayRotation(arr, 2, [1,2]))