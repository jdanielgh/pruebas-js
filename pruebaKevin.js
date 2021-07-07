let cuposLibres = [];

const validarCliente = (time, edad, nombre) => {
    if(edad > 18) {
        if(time >= 2 && time < 7 && cuposLibres.length < 4 ) {
            cuposLibres.push({nombre, time, edad});

            console.log(time);
            return 'Podes pasar gratis';
        } else {
            console.log(time);
            return 'ya no puedes gratis';
        }
    } else {
        return 'sos menor';
    }
}

const primera = validarCliente(3, 19, 'Daniel');
console.log(primera);

const segunda = validarCliente(4, 20, 'Jorgito');
console.log(segunda);

const tercero = validarCliente(5, 20, 'Kevin');
console.log(tercero);

const cuarto = validarCliente(6, 20, 'Kevin');
console.log(cuarto);

const quinto = validarCliente(3, 20, 'Pepito');
console.log(quinto);


console.log(cuposLibres[0]);
console.log(cuposLibres[1]);
console.log(cuposLibres[2]);
console.log(cuposLibres[3]);
console.log(cuposLibres[4]);