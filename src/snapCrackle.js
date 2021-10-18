// Seu código vai aqui

function snapCrackle(maxValue){
    
    let conjuntoNum = [];
  
    for ( let contador=1 ; contador <= maxValue; contador++){
            
        if (contador % 5 === 0 && contador % 2 === 1 ){
            conjuntoNum.push(' SnapCrackle');       
                        }
      else  if (contador % 5 === 0){      
            conjuntoNum.push(' Crackle');    
                    } 

      if (contador % 2 === 1 ){
             conjuntoNum.push(' Snap');
                }
    
        if (contador % 2 !== 1 &&  contador % 5 !==0){
            conjuntoNum.push(contador);       
            
             }    
               
         
       } return conjuntoNum;
  }
    
  
  
  console.log(snapCrackle(12));