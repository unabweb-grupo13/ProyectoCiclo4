function cedula_vali(cedula){
 
    let contar=0;
    while(cedula!=0){
      cedula=Math.trunc(cedula/10);
      contar=contar+1;
    }

    if(contar>5 && contar<=9){
    return ""; //bien ingresada
      
    }else{
    return "Cedula Mal ingresada"; //mal ingresada
    }

}


function validar_nombre(nombre_retorno_valido){

    let tamano=String(nombre_retorno_valido).length;
     
      for(x=0;x<tamano; x++){

           c=nombre_retorno_valido.charAt(x);
           
          if(!((c >= 'a' && c <='z') || (c >= 'A' && c <='Z') || c==' ' || c=='ñ' || c=='Ñ')){
             return "Solo se pueden digitar letras";

          }

            
      }
      return ""; //significa que todo esta bien

}


