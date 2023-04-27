/*
Write a function that when given a number >= 0, returns an Array of ascending length subarrays.

pyramid(0) => [ ]
pyramid(1) => [ [1] ]
pyramid(2) => [ [1], [1, 1] ]
pyramid(3) => [ [1], [1, 1], [1, 1, 1] ]
Note: the subarrays should be filled with 1s
*/

function pyramid(n) {
  let result = [];
  let element = [];
  for (let i = 1; i < n+1; i++){
    for(let y =0; y < i; y++){
      element.push(1)   
    }
    result.push(element)
    element = [];  
  }
  return result;
}
