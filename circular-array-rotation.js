function circularArrayRotation(a, k, queries) {
    let savedInt
    let rewriterArr = []
    for(let r=0; r<a.length; r++){
        rewriterArr.push(a[r])
    }
    for(let r=0; r<a.length; r++){
        rewriterArr.push(a[r])
    }
    const firstALength = a.length
    for(let h=0; h<firstALength; h++){
        a.unshift('f')
    }
    let queriesArr = []

    console.log(`a is ${a}`)
    console.log(`rewriterArr is ${rewriterArr}`)

    // removes excess loops from array and checks base case
    if(k > a.length){
        k -= a.length
        console.log(`cut down k! k's new value ${k}`)
    }else if(k === a.length){
        // gets the value of the queries and returns
        for(let g=0; g<queries.length; g++){
            queriesArr.push(a[queries[g]])
        }
        console.log('flat output')
        return queriesArr
    } 

    for(let i=(a.length); i>0; i--){
        if(i === (a.length/2)){
            break
        }
        console.log(`a[v]: ${a[i - 1]} from a:${a} is now rewriterArr[v-k]:${rewriterArr[(i-1)-k]} from rewriterArr:${rewriterArr}`)
        a[i-1] = rewriterArr[(i-1) - k]
    }
    // gets the value of the queries and returns
    console.log(`a is ${a}`)
    for(let g=0; g<queries.length; g++){
        queriesArr.push(a[queries[g]])
    }
    return queriesArr
}

arr = [3,5,9,7]

console.log(circularArrayRotation(arr, 2, [1,2]))