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
    // first for loop if for shifting array "k" many times to the right
    console.log(`rewriter array: ${rewriterArr}, rewriter array[0,2]: ${rewriterArr[0][1]}`)
    for(let x = k; x >= 0; x--){
        for(let i=0; i<a.length; i++){
            if(a[i - 1] === undefined){
                a[i] = rewriterArr[0][(rewriterArr.length - 1)]
            }else if(a[i + 1] === undefined){
                a[i] = rewriterArr[0][(rewriterArr.length - 2)] 
            }else{
                a[i] = rewriterArr[0][i - 1]
            }
        }
        rewriterArr = []
        rewriterArr.push(a)
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