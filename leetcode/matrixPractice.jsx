const matrix = function(matrix){
    const _print=function(arr){
        for (let p = 0; p<matrix.length; p++){
            let row = matrix[p].toString().replace(/,/g,' ');
            console.log(row);
        }
        console.log('-------------------------')
    }
    _print(matrix)
    let newArr = Array.from({length: matrix[0].length}, () => new Array(matrix.length).fill(0))
    // first loop - looping over the matrix rows
    // second loop - loop over the columns (over the indeces in each row)
    for (let i = 0; i < matrix.length; i++){
        for(let j = 0; j < matrix[0].length; j++){
            // we want to place [0][1] => [1][0] [i][j] => [j][i]
            newArr[j][i] = matrix[i][j]
        }
    }
    // reverse each row
    matrix = newArr.map(i => i.reverse())
    return _print(matrix);
}

let matrixArr = [
    [1,2,3,4],
    [6,2,7,8],
    [2,2,1,9],
    [0,5,2,7]
]

console.log(matrix(matrixArr))