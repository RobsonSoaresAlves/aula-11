function impConceito(){
    var conceito=document.getElementById("conceito");

    var nota=parseInt(document.getElementById("notas").value);

    if(nota >8){
        conceito.innerHTML="otimo";

    }
    else if( nota > 5){
        conceito.innerHTML="bom";
    }
    else if(nota > 2){
        conceito.innerHTML="regular";
    }
    else{
        conceito.innerHTML="fraco"
    }

    conceito.innerHTML=nota;
}
