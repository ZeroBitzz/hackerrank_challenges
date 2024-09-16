function extraLongFactorials(n) {
    let finalInt = n
    for(let i=1; i<n-1; i++){
        // console.log(`multiplying ${n-i} with ${n-(i+1)}`)
        finalInt *= (n-i)
        // console.log(`finalInt is now ${finalInt}`)
    }
    console.log(finalInt)
}

extraLongFactorials(4)