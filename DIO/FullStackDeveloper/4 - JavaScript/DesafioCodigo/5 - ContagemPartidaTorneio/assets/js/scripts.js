/* var numeroTimes = 7
var numeroPartidas = 0;


while (numeroTimes > 1) {

    if (numeroTimes % 2 === 0) { //teste par
        numeroPartidas = numeroTimes / 2;
        console.log('Times' + ' ' + numeroTimes + ' Partidas ' + numeroPartidas);
        numeroTimes = numeroTimes/2;        
    } else { //teste impar
        numeroPartidas = (numeroTimes-1)/2;
        console.log('Times' + ' ' + numeroTimes + ' Partidas ' + numeroPartidas);        
        numeroTimes = (numeroTimes-1)/2+1;
    }    
};
 */

var numeroTimes = 7;
var numeroPartidas = 0;
var numberOfMatches = 0;

//var numeroTimes = parseInt(lines.shift);

while (numeroTimes > 1) {

    if (numeroTimes % 2 === 0) { //teste par
        numeroPartidas = numeroTimes / 2;
        console.log('Times' + ' ' + numeroTimes + ' Partidas ' + numeroPartidas);
        numeroTimes = numeroTimes/2;

        numberOfMatches = numberOfMatches + numeroPartidas;
    } else { //teste impar
        numeroPartidas = (numeroTimes-1)/2;
        console.log('Times' + ' ' + numeroTimes + ' Partidas ' + numeroPartidas);        
        numeroTimes = (numeroTimes-1)/2+1;
        numberOfMatches = numberOfMatches + numeroPartidas;        
    }    

    //console.log(numberOfMatches);
};

console.log(numberOfMatches);