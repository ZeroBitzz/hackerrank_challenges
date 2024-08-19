sequenceArr = [4, 3, 5, 1, 2]

function permutationEquation(p) {
    // creates new array to add organized values to
    let organizedArr = []

    //for the length of the array inputed, it checks the index of the index for each value and adds it to the new array
    for(let i=0; i<p.length; i++){
        organizedArr.push(p.indexOf((p.indexOf(i + 1) + 1)) + 1)
    }

    //returns new array
    return organizedArr
}

// intended output 1 3 5 4 2 with sequenceArr
permutationEquation(sequenceArr)

// completed