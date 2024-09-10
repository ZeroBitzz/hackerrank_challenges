function circularArrayRotation(a, k, queries) {
    let savedInt
    let rewriterArr = []
    let newArr = []
    for(let c=0; c<a.length; c++){
        rewriterArr.push(a[c])
        newArr.push(a[c])
    }
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

    for(let r=0; r<k; r++){
        console.log('----------')
        console.log('BEFORE LOOP')
        console.log(`loop number ${r + 1}`)
        console.log(`main array is ${a}`)
        console.log(`newArr is ${newArr}`)
        console.log(`rewriterArr is ${rewriterArr}`)
        console.log(`--------------`)
        for(let v=0; v<a.length; v++){
            if(a[v - 1] === undefined){
                console.log('first')
                console.log(`setting ${a[v]} a[v] to ${rewriterArr[rewriterArr.length - 1]} rewrite last`)
                console.log(`main array is ${a}`)
                console.log(`newArr is ${newArr}`)
                console.log(`rewriterArr is ${rewriterArr}`)
                a[v] = rewriterArr[rewriterArr.length - 1]
                newArr[v] = rewriterArr[rewriterArr.length - 1]
            }else if(a[v + 1] === undefined){
                console.log('last')
                console.log(`setting ${a[v]} a[v] to ${rewriterArr[rewriterArr.length - 2]} rewrite second last`)
                console.log(`main array is ${a}`)
                console.log(`newArr is ${newArr}`)
                console.log(`rewriterArr is ${rewriterArr}`)
                a[v] = rewriterArr[rewriterArr.length - 2]
                newArr[v] = rewriterArr[rewriterArr.length - 2]
            }else{
                console.log('lettuce and tomatoes')
                console.log(`setting ${a[v]} a[v] to ${rewriterArr[v - 1]} rewriterArr[v - 1]`)
                console.log(`main array is ${a}`)
                console.log(`newArr is ${newArr}`)
                console.log(`rewriterArr is ${rewriterArr}`)
                a[v] = rewriterArr[v - 1]
                newArr[v] = rewriterArr[v - 1]
            }
        }
        console.log('----------')
        console.log('AFTER LOOP')
        console.log(`loop number ${r + 1}`)
        console.log(`main array is ${a}`)
        console.log(`newArr is ${newArr}`)
        console.log(`rewriterArr is ${rewriterArr}`)
        console.log(`setting rewriterArr to newArr`)
        console.log(`--------------`)
        rewriterArr = newArr
        
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