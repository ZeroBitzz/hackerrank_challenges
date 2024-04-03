/*
jan - 31
feb - 28 leap(divisible 4) 29
march - 31
april - 30
may - 31
june - 30
july - 31
august - 31
september - 30
october - 31
november - 30
december - 31
*/

function dayOfProgrammer(year) {
    let dayOfProgrammerDate

    // if the year is before 1918 then the julian calender rules for leap years take place
    if(year > 1918){
        (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0) ? dayOfProgrammerDate = `12.09.${year}` : dayOfProgrammerDate = `13.09.${year}`
    // if the year is after 1918 then the gregorian calender rules for leap years take place
    }else if(year < 1918){
        year % 4 === 0 ? dayOfProgrammerDate = `12.09.${year}` : dayOfProgrammerDate = `13.09.${year}`
    // if the year is not greater or less than 1918, then it is 1918 and the 256th day is already known
    }else{
        dayOfProgrammerDate = `26.09.${year}`
    }
    return dayOfProgrammerDate
}

dayOfProgrammer(1917)