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
        a[i-1] = rewriterArr[(i-1) - k]
    }

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

arr = [3,5,9,7,6,5,4,3,4]

console.log(circularArrayRotation(arr, 2, [1,2]))