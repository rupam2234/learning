const strings = ["abc", "dad"];

// a b c
// d a d

function deleteColumn(array){
    if(array.length < 1){
        return 0;
    }

    let deleted = 0;

    const rows = array.length;
    const columns = array[0].length;

    for(let col = 0; col < columns; col++){
        for(let row = 0; row < rows - 1; row++){
            if(array[row][col] > array[row + 1][col]){
                deleted++;
                break;
            }
        }
    }

    return deleted;
}

console.log(deleteColumn(strings))