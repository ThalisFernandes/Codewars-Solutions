snail = function(array) {
  let result = [];
  let arr = array;
  let length = arr.length;
  let volta = 0;
  
  if(arr.length > 1){
    
    while(arr.length > 1){
      // primeira volta
      if(volta == 0){ // direita > Esquerda
        result.push(...arr[0]);
        arr.splice(0, 1);
        volta +=1 
      }
      if(volta == 1){// descendo
        for(let x=0; x < arr.length; x++ ){
          
          result.push(arr[x][arr[x].length -1]);
          arr[x].splice(-1, 1);
        }
        volta +=1
      }
      if(volta == 2 && arr[arr.length - 1]){ // esquerda < direita
        let reversed = arr[arr.length - 1].reverse();
        result.push(...reversed);
        arr.splice(-1, 1);
        volta +=1
      }
      if(volta == 3){ // subindo
          for(let x = 0; x < arr.length; x ++){
            result.push(arr[arr.length -1 - x][0]);
            arr[arr.length -1 - x].splice(0, 1);
          }
          volta = 0;
        }
    }
    if(arr.length == 1){
      result.push(...arr[0]);
    }
  }else {
    if(arr[0].length === 1 || arr[0].length == 1){
      result.push(...arr[0]);
    }  
  }
  console.log(result);
 return result 
}



console.log(snail([[1, 2, 3], [4, 5, 6], [7, 8, 9]]))
console.log(snail([[]]))
console.log(snail([[1]]))
console.log(snail([[1,2,3,4,5],[6,7,8,9,10],[11,12,13,14,15],[16,17,18,19,20],[21,22,23,24,25]]))