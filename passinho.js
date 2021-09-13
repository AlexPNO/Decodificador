// var msg=""
// var incremento=2
//a funçao por enquanto ignora qualquer tipo de espaço e lê somente as letras


//função que codifica uma msg, coloca todas as letras em um vetor aplica o incremento e retorna uma string com a nova msg)
function codifica(msg,incremento){
var vet = msg.split('')
var vet2=[]
for(var i=0;i<vet.length;i++){
    if(vet[i]!=' '){
    vet2.push((String.fromCharCode(vet[i].charCodeAt()+incremento))) 
    }
    else{
        vet2.push(vet[i])
    }
}
    cod=vet2.join('')

return cod
}

//função que decodifica.Recebe a msg encriptada diminui o incremento e retorna a string traduzida
function decodifica(msg,incremento){
    var vet = msg.split('')
    var vet2=[]
    for(var i=0;i<vet.length;i++){
        if(vet[i]!=' '){
        vet2.push((String.fromCharCode(vet[i].charCodeAt()-incremento)))
        }
        else{
            vet2.push(vet[i])
        }
    }
        decod=vet2.join('')
    
    return decod
    }
    
//codifica base64
function codifica64(msg){

    return window.btoa(msg)

}

// decodifica base64
function decodifica64(msg){

    return window.atob(msg)
}

var botao=document.getElementById('btn')
var dado=document.getElementById('msg')
var inc= document.getElementById('inc') 
var trad=document.getElementById('trad')
var crip=document.getElementById("Codificar")
// var crip2=document.getElementById("Decodificar")
// (crip.checked=true)



botao.addEventListener('click', function(){
var crip2 = document.querySelector('input[name="cod"]:checked')
var  incremento=Number(inc.value)
var  seletor=document.getElementById('seletor')
    if((seletor.value=="cifra")&&(crip2.value=='Codificar')){
        var retorno=codifica(dado.value,incremento)
        trad.innerText=retorno
        
    }
    else if((seletor.value=="cifra")&&(crip2.value=='Decodificar')){
        var retorno=decodifica(dado.value,incremento)
        trad.innerText=retorno
        console.log('2 etapa')
    }
    else if((seletor.value=="base64")&&(crip2.value=='Codificar')){
        var retorno=codifica64(dado.value)
        trad.innerText=retorno
        console.log('3 etapa')
    }
    else if((seletor.value=="base64")&&(crip2.value=='Decodificar')){
        var retorno=decodifica64(dado.value)
        trad.innerText=retorno
        console.log('4 etapa')
    }
}
)

// var radio1=document.getElementById('Codificar')
// var radio2=document.getElementById('')

// if()

// botao.addEventListener('click',function(){
//     console.log("Teste")
// })