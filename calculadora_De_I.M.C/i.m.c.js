function calcIMC(){
    peso = inputPeso.value
    altura = inputAltura.value
    
    alt= altura*2;
    imc= peso/alt;
    mostraResultado.innerHTML=("Seu I.M.C é: " +imc)
    
    
    if(imc<17){
      mostraResultado2.innerHTML=("Muito abaixo do peso")
    }
    if(imc>=17 && imc<=18.49){
      mostraResultado2.innerHTML=("Voçê está abaixo do peso")
    }
    if(imc>=18.49 && imc<=24.99){
      mostraResultado2.innerHTML=("Seu peso esta normal")
    }
    if(imc>=25 && imc<=29.99){
      mostraResultado2.innerHTML=("Voçê está acima do peso")
    }
    if(imc>=30 && imc<=34.99){
      mostraResultado2.innerHTML=("Voçê esta com obesidade grau I")
    }
    if(imc>=35 && imc<=39.99){
      mostraResultado2.innerHTML=("Voçê está com obesidade grau II")
    }
    else if(imc>=40){
        alert('erro')
        mostraResultado.innerHTML=('')
    }
  }
  
  