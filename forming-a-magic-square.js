/*
5 3 4
1 5 8
6 4 2

8 3 4
1 5 9
6 7 2
*/
let squareArr = [
    [5,3,4],
    [1,5,8],
    [6,4,2]
]

function formingMagicSquare(s) {
    let magic = true

    //horizontal
    let horiz0 = [squareArr[0][0], squareArr[0][1], squareArr[0][2]]    //5 3 4
    let horiz1 = [squareArr[1][0], squareArr[1][1], squareArr[1][2]]    //1 5 8
    let horiz2 = [squareArr[2][0], squareArr[2][1], squareArr[2][2]]    //6 4 2

    //vertical
    let vert0 = [squareArr[0][0], squareArr[1][0], squareArr[2][0]]    //5 1 6
    let vert1 = [squareArr[0][1], squareArr[1][1], squareArr[2][1]]    //1 5 8
    let vert2 = [squareArr[0][2], squareArr[1][2], squareArr[2][2]]    //6 4 2

    //diagonal
    let diag0 = [squareArr[0][0], squareArr[1][1], squareArr[2][2]]    //5 5 2
    let diag1 = [squareArr[0][2], squareArr[1][1], squareArr[2][0]]    //6 4 2


    for(let i=0; i<3; i++){
        console.log(squareArr[i][0])
        console.log(squareArr[i][1])
        console.log(squareArr[i][2])
    }
}

formingMagicSquare(squareArr)