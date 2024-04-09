//strings sao textos que ficam em aspas duplas
var nome = "Miguel"
var sobrenome = "Fabrao"

console.log("bem vindo" + nome + sobrenome + "! 👍"); //console.log //

var idade = 25 //number
var idadeString = "25" //string

var numero = 7


var soma1 = idade + numero;
var soma2 = idadeString + numero;

console.log("teste 1:" + soma1); //soma
console.log("teste 2:" + soma2); //concatena


function soma(a, b){
        return a + b;
}

console.log("a soma de A + B e:" + soma(2, 5));

    
// array []

var cestaDeFrutas = [ 'uva', 'morango', 'laranja']

var comprimento = cestaDeFrutas.length 

console.log("quantas frutas tenho?" + comprimento)
console.log("a fruta preferida do fessor e?" + cestaDeFrutas[1]);
// pegar a posiçao do elemento do meu array "cestaDeFrutas[1]"

var frutasSemUva = cestaDeFrutas.push
( 'banana')
console.log(frutas); // push = acrescenta

var corte = cestaDeFrutas.splice(5)
console.log(corte);  // splice = corta

//loop = for
// (i = i + 1) === (i++)

for(let i = 1; i <= 5 ; i = i + 1){
    console.log(i)
}

function mostrarMensagem(mensagem) {
    return mensagem;
}

console.log(mensagem( hello ));

//booleanos
var booleanos = true;
var booleanos = false;

//objeto {}

var carro = {
    marca: 'bmw',
    ano: 2009,
    valor: 50000000,

}

var marca = carro.marca

console.log(carro);
console.log(" a marca do carro e:" + 
marca);
console.log("a cor do carro e:" + carro.
cor);

