function circularArrayRotation(a, k, queries) {
    let savedInt
    let rewriterArr = a
    // first for loop if for shifting array "k" many times to the right
    for(let i=0; i<k; i++){
        console.log(`rewriter array: ${rewriterArr}`)
        // second for loop if for setting the new values of the shifted array 
        for(let x=0; x<a.length; x++){
            if(a[x - 1] === undefined){
                console.log('first')
                a[x] = rewriterArr[rewriterArr.length - 1]
                console.log(a)
            }else if(a[x + 1] === undefined){
                console.log('last')
                a[x] = rewriterArr[0]
                console.log(a)
            }else{
                console.log('lettuce and tomatoes')
                console.log(`setting ${a[x]} from ${a} to ${rewriterArr[x - 1]} from ${rewriterArr}`)
                a[x] = rewriterArr[x - 1]
                console.log(a)

            }
        }
        rewriterArr = a
    }
    return a
}

arr = [3,5,6]

console.log(circularArrayRotation(arr, 1, 0))