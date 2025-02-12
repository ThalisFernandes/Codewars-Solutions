/**
 *  Código para o codewars, desafio do dia 11/02/25
 * Não estou nem um pouco satisfeito com esse código, acho que poderia melhorar mais,
 * remover os ifs e else, mas não consegui pensar em solução melhor, usando 20 minutos por desafio.
 * 
 */


function rot13(str) {
    let first13 = [
        'a', 'A', 'b', 'B', 'c', 'C', 'd', 'D',
        'e', 'E', 'f', 'F', 'g', 'G', 'h', 'H',
        'i', 'I', 'j', 'J', 'k', 'K', 'l', 'L',
        'm', 'M'
      ]
    let second13 = [
        "n", "N", "o", "O", "p", "P", "q", "Q", "r", "R",
        "s", "S", "t", "T", "u", "U", "v", "V", "w", "W",
        "x", "X", "y", "Y", "z", "Z"
    ];
    let finalStr = "";
     if(str != null ){
       str.split('').forEach((e)=>{
        
         if(first13.includes(e)){
           let index = first13.indexOf(e);
           let letra = second13[index];
           finalStr += letra;
         } else if(second13.includes(e)){
            let index = second13.indexOf(e);
            let letra =first13[index];
           finalStr += letra;
         } else {
            if(e == " "){
                finalStr += " ";
            } else{
                finalStr += e;
            }
         }
       })
     }
    return finalStr;
  }


  console.log(rot13("SERR PBQR PNZC")) // FREE CODE CAMP
  console.log(rot13("SERR CVMMN!")) // FREE PIZZA!
  console.log(rot13("EBG13 rknzcyr.")) // FREE LOVE?