/*
console.log(Math.min(2, 3, 1));
// expected output: 1

console.log(Math.min(-2, -3, -1));
// expected output: -3

const array1 = [2, 3, 1];

console.log(Math.min(...array1));
// expected output: 1
*/

const qtdEntradas = Number(prompt('Digite qtd de entradas'));
const melhor = [];

for(let i = 0; i < qtdEntradas; i++){
    
    const tempo = parseFloat(prompt('Digite o valor'));
    melhor.push(tempo);

}

const minimo = Math.min.apply(null, melhor);

//console.log(Math.min(parseFloat(melhor)));
console.log(minimo);