// loop twice to access the individual index
// save that to a temp variable
// push it to it's new location

// const rotate = function(matrix){
//     let n = matrix.length;
//     for (let i =0; i < (n+1)/2; i++){
//         for (let j = 0; j < n/2 ; j ++){
//             let temp = matrix[n - 1 - j][i];
//             matrix[n - 1 - j][i]= matrix[n - 1 - i][n - j - 1];
//             matrix[n - 1 - i][n - j - 1] = matrix [j][n - 1 - i];
//             matrix[j][n - 1 - i] = matrix[i][j];
//             matrix[i][j] = temp;
//         }
//     }
//     return matrix;
// }

// var rotate = function(matrix) {
//     // const n = matrix.length;
    
//     // for(let row = 0; row < n / 2; row++) {
//     //     for(let col = row; col < n  - row - 1; col++) {
//     //         swap([row, col], [col, n - 1 - row], matrix);
//     //         console.log(matrix)
//     //         swap([row, col], [n - 1 - row, n - 1 - col], matrix);
//     //         console.log(matrix)
//     //         swap([row, col], [n - 1 - col, row], matrix);
//     //         console.log(matrix)
//     //     }
//     // }
//     return matrix[0].map((x,i) => matrix.map(x => x[i]))
// };

function swap (cell, anotherCell, matrix) {
    const temp = matrix[cell[0]][cell[1]];
    
    matrix[cell[0]][cell[1]] = matrix[anotherCell[0]][anotherCell[1]];
    matrix[anotherCell[0]][anotherCell[1]] = temp;
}

const rotate = function(matrix){
    console.log(matrix)
    let newArr = matrix[0].map((num,ind) => matrix.map(num => num[ind]))
    matrix = newArr.map(arr => arr.reverse())
    console.log(matrix)
    return matrix;
}



let matrix = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]];
 console.log(rotate(matrix));

 const transpose = m => m[0].map((x,i) => m.map(x => x[i]))


 