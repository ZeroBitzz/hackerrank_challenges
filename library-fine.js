function libraryFine(d1, m1, y1, d2, m2, y2) {
    if((d1 === d2) && (m1 === d2) && (y1 === y2)){//if the book is returned on time exactly
        return 0
    }else if(y1 > y2){ //if the book is a year late its a fixed value
        return 10000
    }else if((y1 < y2)){
        return 0
    }else if((m1 < m2)){
        return 0

    }else if((m1 === m2) && (y1 === y2) && (d1 < d2)){
        return 0
    }else if((m1 === m2) && (y1 === y2) && (d1 > d2)){ //if it's a matter of days, decides how much
        if(m1 === 1 || m1 === 3 || m1 === 5 || m1 === 7 || m1 === 8 || m1 === 12){
            return (d1 - d2)*15
        }else if(m1 === 2){
            //checks leap year
            if(((y1 % 4) === 0 && (y1 % 100) !== 0) || (y1 % 400 === 0)){
                return (d1 - d2)*15
            }else{
                return (d1 - d2)*15
            }
        }else{
            return (d1 - d2)*15
        } 
    }else if(m1 > m2){ // if it's a matter of months late
        return (m1 - m2)*500
    }

}

// completed