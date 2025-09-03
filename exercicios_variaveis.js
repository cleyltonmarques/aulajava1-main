/*
===========================================================
Exercícios Práticos - Variáveis (var, let, const)
===========================================================
*/

// 1. Declare uma variável com `var` e atribua uma string com seu nome. Exiba no console.
var nome = "Cleylton"
console.log(typeof nome)
console.log ("Meu nome", nome);

// 2. Declare uma variável com `let` contendo um número e depois altere esse número para outro valor.
let numero = 12;
console.log("O tipo de dado da variavel numero e:",typeof numero);
numero = 16;
console.log("Numero alterado:",numero);
// 3. Declare uma constante `const` com um array vazio. Adicione três elementos a esse array e exiba.
const lista = []
list.push("maça","banana","morango");
console.log("Array:",lista);
// 4. Escreva um bloco `if` que declare uma variável `var` dentro dele. Exiba essa variável fora do bloco.
if(true){ 
    var testevar= "Estou dentro do if com var";
}
console.log(testevar);
// 5. Escreva um bloco `if` que declare uma variável `let` dentro dele. Tente exibir essa variável fora do bloco (comente a linha que causa erro).
if(true){
    let testlet = "Estou dentro do if com let"
    console.log(testelet);
}
// 6. Tente redeclarar uma variável usando `var` no mesmo escopo. Faça o mesmo com `let` e observe o erro.
var x= 2;
var x =3;
console.log("var redeclarado:",x);
let y 3;

// 7. Declare uma variável com `const` que contém um objeto com duas propriedades. Altere uma dessas propriedades e exiba o objeto.
const pessoa = {nome:"Cleylton",idade:28};
pessoa.idade=29
console.log("Objeto pessoa:",pessoa);
// 8. Declare uma variável com `let` sem inicializá-la. Depois atribua um valor e exiba.
let cor;
cor="Azul";
console.log("Cor;",cor);
// 9. Demonstre hoisting declarando uma variável com `var` depois de usá-la (exiba antes da declaração).
console.log("Valor de z antes da declaração:",z);
var z = 100;
console.log("Valor de z depois da declaração:"z);
// 10. Crie uma função que declare uma variável `var` dentro dela e tente acessar essa variável fora da função (explique o resultado).
function minhaFunção(){
    var interna = "Sou interna da função";
    console.log(interna);
}
minhaFunção();