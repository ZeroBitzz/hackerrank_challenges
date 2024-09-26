function squares(a,b,c=0) {
    if(b === a) {
        return c
    }
    if(Math.sqrt(b) === Math.floor(Math.sqrt(b))){
        c++
    }
    return squares(a, b-1,c=c)
}
let cringe = squares(100,1000)
console.log(cringe)