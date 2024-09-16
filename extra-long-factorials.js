function extraLongFactorials(n) {
    // sets independent variable to change
    // note: BigInt is for handling massive number calculations
    let finalInt = BigInt(n)

    // multiplies n * (n-1) * (n-2)....
    for(let i=1; i<n-1; i++){
        finalInt *= BigInt(n-i)
    }

    // gets rid of the n at the end of the number that was a result of the BigInt func
    finalInt = finalInt.toString()
    console.log(finalInt)
}

extraLongFactorials(30)

// completed