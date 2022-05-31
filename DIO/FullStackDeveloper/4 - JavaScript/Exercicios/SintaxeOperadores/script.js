
var valor1;
var valor2;

let soma = 0;
var maior;
var menor;
var compara;

leValor();


function leValor() {
    valor1 = Number(prompt('Digite o primeiro valor'));
    valor2 = Number(prompt('Digite o segundo valor'));

    if (!valor1 || !valor2) {
        alert('Defina os valores');
        leValor();
    } else {
        return calcula(valor1, valor2);
    }
}


function calcula(x, y) {
    soma = x + y;

    alert(`${compara()} Soma ${soma}, ${_10()} ${_20()}`);

    function compara() {
        if (x === y) {
            compara = `Numeros ${x} e ${y} são iguais.`
        }
        else {
            compara = `Numeros ${x} e ${y} são diferentes.`
        }

        return compara;
    }

    function _10() {
        if (soma > 10) {
            maior = 'maior que 10 e';
        }
        else if (soma < 10) {
            maior = 'menor que 10 e';
        } else if (soma == 10) {
            maior = 'igual a 10'
        }
        return maior;
    }

    function _20() {
        if (soma < 20) {
            menor = 'menor que 20';
        } else if (soma > 20) {
            menor = 'maior que 20';
        } else if (soma == 20) {
            menor = 'igual a 20';
        }
        return menor;
    }
}