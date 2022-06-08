function exponencial(array, num = 1){
    const result= [];
    for(let i =0; i < array.length; i++){
        result.push(array[i] ** num);        
    }

    return result;
}

exponencial([1,2,3,4]);