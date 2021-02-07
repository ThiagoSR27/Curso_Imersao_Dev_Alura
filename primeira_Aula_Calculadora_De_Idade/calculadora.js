function idade(){
    idade=age.value
    
    if(idade <0 || idade >125){
      resposta.innerHTML='<p>Impossivel voçê ser tao velho assim</p>'
    }
    dias=idade*365;
    primeiraResp.innerHTML=("Voçê tem " + idade + " anos de idade")
    resp.innerHTML=(" Voçê viveu " + dias +" dias");    
  }