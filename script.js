var valores = []
let elementoResposta= document.getElementById("respostaDetalhada")
let elementoBotao = document.getElementById("finalizar")
var elementoSelect = document.querySelector("select#selecao")

elementoBotao.disabled=true
function analisar(){
    var elementoValorDeEntrada = Number(document.getElementById("entradaValor").value)
    elementoResposta.innerHTML=(`<p>Ao adicionar todos valores, clique em "Finalizar" para saber detalhadamente </p>`)

    if (elementoValorDeEntrada>=1 && elementoValorDeEntrada<=100) {

        mostrarNoSelect(elementoValorDeEntrada)
        
    } else{
        alert("Digite um valor de 1 a 100")
    }
}

function mostrarNoSelect(valorDeEntrada) {
        
    var pesquisaExistencia = valores.indexOf(valorDeEntrada)

    if (pesquisaExistencia == -1) {

        elementoSelect.innerHTML+=(`<option value="valor${valorDeEntrada}"> valor ${valorDeEntrada} adicionado </option>`)

        valores.push(valorDeEntrada)
        elementoBotao.disabled=false
        
    } else {
        alert ("ja existe este numero adicionado")
    }
}

function finalizar(){
   
    let quantidadeDeValoresAdicionados = valores.length

    elementoResposta.innerHTML=(`<p> A quantidade de valores cadastrados é ${quantidadeDeValoresAdicionados} ao todo </p>`)

    let somatoria=0 
    let maiorNumeroArray = 0
    let menorNumeroArray = 101
    for (let posicao = 0; posicao < valores.length; posicao++) {
    
        guardando= valores[posicao]
        somatoria = somatoria+guardando

        if (maiorNumeroArray < guardando){
            maiorNumeroArray= guardando
        } 

        if( menorNumeroArray>guardando){

            menorNumeroArray = guardando
        }

        }

        elementoResposta.innerHTML+=(`<p> A soma dos valores cadastrados é ${somatoria} ao todo </p>`)

        elementoResposta.innerHTML+=(`<p> O maior valor cadastrado é ${maiorNumeroArray}  </p>`)
    
        elementoResposta.innerHTML+=(`<p> O menor valor cadastrado é ${menorNumeroArray}  </p>`)
    
        elementoResposta.innerHTML+=(`<p> A media dos valores cadastrado é ${somatoria/quantidadeDeValoresAdicionados}  </p>`)
        
    }


