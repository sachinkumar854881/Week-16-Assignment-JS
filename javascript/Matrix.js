function transposeMatrix(matrix)
{
    const rows = matrix.length;
    const col = matrix[0].length;
    const resultMatrix = [];
    
    for(let c=0;c<col;c++)
    {
        const transposeMatrix=[];
        for(let r=0;r<rows;r++)
        {
            transposeMatrix.push(matrix[r][c])
        }
        resultMatrix.push(transposeMatrix)
    }
    return resultMatrix
}
const Matrix =[
    [2,4,6],
    [1,3,5],
    [7,8,9]
]
const transposeMatrixRes = transposeMatrix(Matrix)
console.log("original matrix",Matrix)
console.log("transpose Matrix is ",transposeMatrixRes)

// sum of two matrix
let mat1 = [ 
    [1, 1, 1], 
    [2, 2, 2], 
    [3, 3, 3] 
]; 
  
let mat2 = [ 
    [4, 4, 4], 
    [5, 5, 5], 
    [6, 6, 6] 
]; 
let resmat = []; 
for (let i = 0; i < mat1.length; i++) { 
    let r = ""; 
    for (let j = 0; j < mat1[i].length; j++) { 
        r += mat1[i][j] + mat2[i][j] + " "; 
    } 
    resmat.push(r.trim()); 
} 
const sumMatrixRes = resmat;
console.log("original matrix",mat1)
console.log("original matrix",mat2)
console.log("sum of two matrix is ")
resmat.forEach(r => console.log(r));