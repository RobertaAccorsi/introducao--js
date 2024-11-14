//função sem retorno
function inicio() {
    const mensagem = 'Estou iniciando...';  

    console.log(mensagem);
} 

function processa(){
    const mensagem = 'Estou processando...'; 
    return mensagem; 
} 


//const resultado = processa(); 
//console.log(resultado); 

const run = processa(); 

function run() {
    inicio(); 

    const resultado = processa(); 

    console.log(resultado);
}


run(); 