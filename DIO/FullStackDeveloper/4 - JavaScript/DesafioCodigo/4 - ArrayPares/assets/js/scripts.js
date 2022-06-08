function arrayPares(array) {

    //const array = [2, 3, 5, 7, 11, 13, 18, 34];

    const pares = [];

    for (let i = 0; i < array.length; i++) {
         if(array[i]%2 === 0){
            console.log(array[i]);
        pares.push(array[i]);


        }
    }
    return pares;

};


arrayPares([2, 3, 5, 7, 11, 13, 18, 34]);