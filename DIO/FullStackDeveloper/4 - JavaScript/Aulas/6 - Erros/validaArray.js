function validaArray(arr, num) {
    try {
        if (!arr && !num) throw new ReferenceError('Envie os parametros');

        if (typeof arr != 'object') throw new TypeError('Array precisa se do tipo object');

        if (typeof num != 'number') throw new TypeError('Num precisa se do tipo number');

        if (arr.length != num) throw new RangeError('Tamanho inválido!');

        return arr;
    } catch (e) {
        if (e instanceof ReferenceError) {
            console.log('Este é um ReferenceError')
        } else if (e instanceof TypeError) {
            console.log('Este erro é um TypeError');
        } else if (e instanceof RangeError) {
            console.log('Este erro é um RangerErro!');
        } else {
            console.log('Tipo de erro não esperado:' + e)
        }
    }
}

console.log(validaArray([]));
