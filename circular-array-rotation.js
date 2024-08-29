function circularArrayRotation(a, k, queries) {
    let savedInt
    let rewriterArr = []
    let queriesArr = []
    //sets rewriter array
    for(let y=0; y<a.length; y++){
        rewriterArr.push(a[y])
    }
    // first for loop if for shifting array "k" many times to the right
    for(let i=0; i<k; i++){
        // second for loop if for setting the new values of the shifted array 
        for(let x=0; x<a.length; x++){
            if(a[x - 1] === undefined){
                a[x] = rewriterArr[rewriterArr.length - 1]
            }else if(a[x + 1] === undefined){
                a[x] = rewriterArr[rewriterArr.length - 2]
            }else{
                a[x] = rewriterArr[x - 1]

            }
        }
        // resets rewriter array
        rewriterArr = []
        for(let y=0; y<a.length; y++){
            rewriterArr.push(a[y])
        }
    }

    // gets the value of the queries and returns
    for(let g=0; g<queries.length; g++){
        queriesArr.push(a[queries[g]])
    }
    return queriesArr
}

arr = [3,5,9,7]

console.log(circularArrayRotation(arr, 1, [1,2]))