function diagonalDifference(arr) {
    // Write your code here
    try{
        //The first diagonal will be always 0[0]-1[1]-2[2]
        //check if the matrix is a 3x3 matrix
        let tamanho = arr.length;
        let tamanhoLinha = arr[0].length;
        let primaryDiagonal = 0;
        let secondDiagonal = 0;
        let counter =0;
        //CALCULO DA primeira Diagonal      
        for(let i =0; i< tamanhoLinha; i++){
            if(String(arr[i][i])[0] == '-'){
                let removeSimbol = String(arr[i][i]).replace('-','');
                primaryDiagonal = primaryDiagonal - Number(removeSimbol)
            } else {
                primaryDiagonal+=arr[i][i];
            }
            
        }
        
        //calculo da segunda diagonal
        for(let i=tamanhoLinha-1; i >= 0; i--){
            
            console.log('2For=> '+arr[counter][i]);
            if(String(arr[counter][i])[0] == '-'){
                let removeSimbol = String(arr[counter][i]).replace('-','');
                secondDiagonal = secondDiagonal - Number(removeSimbol)
            } else {
                secondDiagonal+=arr[counter][i];
            }
            counter++
        }
        console.log('segunda=>'+secondDiagonal);
        let diference = primaryDiagonal - secondDiagonal;
        console.log(diference);
        return String(diference).replace('-','');
        // the second Diagonal will be always 2[2]-1[1]-0[0]
    }catch (Err){
        console.log(Err);
    }

}
let matrix = [[11, 2, 4], [4 ,5 ,6], [10, 8, -12]];
console.log('Diference=>'+diagonalDifference(matrix));


