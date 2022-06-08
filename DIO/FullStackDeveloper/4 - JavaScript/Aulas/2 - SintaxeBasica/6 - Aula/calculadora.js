function calculadora() {
    const operacao = Number(prompt('Escolha uma operacao: \n 1 - soma (+)\n 2 - Subtracao (-)\n 3 - multiplicacao (*)\n 4 - Divisao Inteira (/)\n 5 - Resto (%)\n 6 - Potenciação (**)\n'));


    if (!operacao || operacao >= 7) {
        alert('Opcao invalida');
        calculadora();
    }
    else {
        let n1 = Number(prompt('Insira o primeiro valor'));
        let n2 = Number(prompt('Insira o segundo valor'));
        let resultado;

        if (!n1 || !n2) {
            alert('Parametros invalidos');
            calculadora();
        }
        else {
            function soma() {
                resultado = n1 + n2;
                alert(`${n1} + ${n2} = ${resultado}`);
                novaOperacao();
            };

            function subtracao() {
                resultado = n1 - n2;
                alert(`${n1} - ${n2} = ${resultado}`);
                novaOperacao();
            };

            function multiplicacao() {
                resultado = n1 * n2;
                alert(`${n1} * ${n2} = ${resultado}`);
                novaOperacao();
            };

            function divisao() {
                resultado = n1 / n2;
                alert(`${n1} / ${n2} = ${resultado}`);
                novaOperacao();
            };

            function resto() {
                resultado = n1 % n2;
                alert(` Resto entre ${n1} e ${n2} = ${resultado}`);
                novaOperacao();
            };

            function potenciacao() {
                resultado = n1 ** n2;
                alert(`O numero ${n1} elevado a ${n2} = ${resultado}`);
                novaOperacao();
            };

            function novaOperacao() {
                let opcao = Number(prompt('Deseja fazer outra operacao?\n 1 - Sim \n 2 - Não'));

                if (opcao == 1) {
                    calculadora();
                }
                else if (opcao == 2) {
                    alert('Até mais!');
                }
                else {
                    alert('Digite uma opcao valida');
                    novaOperacao();
                };
            }


/*             if (operacao == 1) {
                soma();
            } else if (operacao == 2) {
                subtracao();
            } else if (operacao == 3) {
                multiplicacao();
            } else if (operacao == 4) {
                divisao();
            } else if (operacao == 5) {
                resto();
            } else if (operacao == 6) {
                potenciacao();
            } */

            switch (operacao){
            case 1:
                soma()
                break;
            case 2:
                subtracao();
                break;
            case 3:
                multiplicacao();
                break;
            case 4:
                divisao();
                break;
            case 5:
                resto();
                break;
            case 6:
                potenciacao();
                break;                
        }
        }
    }
}

calculadora();