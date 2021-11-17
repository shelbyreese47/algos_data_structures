const transpose = function(matrix){
    // let arrRow = matrix.length;
    // let arrCol = matrix[0].length;
    // let row = new Array(matrix.length).fill(0);
    // let transposedArr = new Array({length: matrix[0].length},row);
    let transposedArr = Array.from({length: matrix[0].length}, () => new Array(matrix.length).fill(0))

    for (let i = 0; i < matrix.length; i++){ // i is looping over our rows
        for (let j =0; j < matrix[0].length; j++){ // j is looping through our columns
            // console.log(matrix[i][j])
            // console.log(transposedArr[j][i])
            transposedArr[j][i] = matrix [i][j]
            // console.log(transposedArr)
        }

    }
    return transposedArr;

}

let matrix = [
    [2,4,-1],
    [-10,5,11],
    [18,-7,6]
]

console.log(transpose(matrix))