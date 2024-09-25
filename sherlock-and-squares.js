function squares(a, b) {
    let squares = 0
    for(let i=a; i<=b; i++){
        if(Math.sqrt(i) === Math.floor(Math.sqrt(i))){
            squares++
        }
    }
    return squares
}

squares(3,9)