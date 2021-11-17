const isValidSudoku = function(board) {
    // have a counter object will add key value pairs to it 
    const _counter = function(arr){
        let counter = {};
        for (let i = 0; i< arr.length; i++){
            if (arr[i] !== '.'){
            counter[arr[i]] = ++counter[arr[i]] || 1;
            }
        }
        
        for (const key in counter){
            // console.log(counter)
            // if one of those rows repeats a number -> return false
            if (counter[key] > 1) return false;
            // if one of those rows has a number > 9 -> return false
            if (parseInt(key) > 9 || parseInt(key) < 0) return false
        }
        return true;
    }
    // check each row with a loop
    for (let j = 0; j < board.length; j++){
       let result =_counter(board[j]);
        if (result === false) return false;
    }
        
        
    // check each column with a loop
    for (let k = 0; k< board.length; k++){
        let column = [];
        for (let m = 0; m< board.length; m++){
            column.push(board[m][k])
        }
        let result = _counter(column);
        if(result === false) return false;
    }

    // check each box with a loop
    // first, need to splice the boxes together
    for (let n = 0; n<board.length-2; n+=3){
        let box = [];
        let box2 = [];
        let box3 = [];
        for (let o = 0; o <3; o++){
            box.push(board[n][o])
            box.push(board[n+1][o])
            box.push(board[n+2][o])
        }
        for (let o = 3; o <6; o++){
            box2.push(board[n][o])
            box2.push(board[n+1][o])
            box2.push(board[n+2][o])
        }
        for (let o = 6; o <9; o++){
            box3.push(board[n][o])
            box3.push(board[n+1][o])
            box3.push(board[n+2][o])
        }
        let result = _counter(box);
        let result2 = _counter(box2);
        let result3 = _counter(box3);
        if(!result || !result2 || !result3) return false;
    }
return true;
};

let board2 = 
[["8","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]

let board = 
[["5","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]

console.log(isValidSudoku(board2))