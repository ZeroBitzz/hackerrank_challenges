let x = 49860 
let y = 205494 
let d = 155635764
function beautifulDays(x,y,k){
    //initialize beautiful days at zero
    let beautifulDays = 0

    //run through each value in between x and y, taking the number(ex.20) and subtracting it by it's reverse(ex.02) then dividing it by k
    //if the number is a whole number then it's a beautiful day and you add one to the beautiful days number
    for(let i=0;i<=(Math.abs(x-y));i++){
        let flippedValue=(x+i).toString().split('').reverse().join('')
        Number.isInteger(Math.abs(((x+i)-flippedValue)/k)) ? beautifulDays += 1 : null
    }
    return beautifulDays
}
console.log(beautifulDays(x,y,d))