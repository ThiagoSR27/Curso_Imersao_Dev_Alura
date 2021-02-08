//(calculo)2 + distancia em km * 1,4+ tempo em min * 0,26
//.toFixed é para fixar as 2 casas apos a virgula
//(antigo)distancia=(prompt("insira a distancia percorrida durante a corrida"));
//(antigo)tempo =(prompt("Insira o tempo gasto durante a sua corrida(em minutos)"));

function ponto(numero){
  
    return numero.toFixed(2).replace(".",",");
    
  }
  
  function calcCorrida(){
    distancia= inputDistancia.value;
  
    tempo= inputTempo.value
  
    valor = 2+distancia*1.4+tempo*0.26;
    mostraValor.innerHTML=("Sua corrida deu R$" + ponto(valor));
  }
  