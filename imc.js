var calcular = document.querySelector("#calcular")


function imc(){
    var nome = document.querySelector("#nome").value
    var altura = document.querySelector("#altura").value
    var peso = document.querySelector("#peso").value
    var resultado = document.querySelector("#resultado")


    

    if(nome !== '' && altura !=='' && peso !== ''){
        var valorIMC= (peso/(altura**2)).toFixed(1)

        let classificacao = ''

        if(valorIMC < 18.5){
            classificacao = "abaixo do peso."
        }else if(valorIMC < 25){
            classificacao = "peso ideal."
        }else if(valorIMC < 25){
            classificacao = "acima do peso"
        }else if (valorIMC <35){
            classificacao = "obeso de grau 1"
        }else if (valorIMC <40){
            classificacao= "obeso de grau 2"
        }else{
            classificacao = "obeso de grau 3"
        }

        resultado.textContent= `O IMC de ${nome} é igual a ${valorIMC} e esta classificado(a) como: ${classificacao}`
    }else{
        resultado.textContent = "Preencha todos os dados."
    }


    
}

calcular.addEventListener("click", imc);