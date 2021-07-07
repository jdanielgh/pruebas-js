const prueba = {
    nombre: 'daniel',
    apellido: 'gomez'
};
export interface Model {
    nombre: string;
    apellido: string;
}

const prueba2: Partial<Model> = { ...prueba, apellido: 'Perez'};
const prueba3: Model = {nombre: undefined, apellido: prueba2.apellido};

const pruebaValorNumerico = prueba3 ||  prueba3.nombre;
console.log(pruebaValorNumerico);


const variable: string = '';
const variable2 = undefined;

const variableBoolean = !!variable === !!undefined;
console.log(variableBoolean)

const a = Number(undefined);
console.log(a);

let c: number;
const b = true ? c = 1 : c = 2;

const pr = b;
console.log(pr);

console.log(c)
console.log(b + 1)

function hola2(): string {
    const ca = 'a';
    console.log(ca);
    return ca;
}

const d = hola2();
console.log(d);

class PruebDePruebas {
    d = 'n';
    
    hola(): string {
        console.log(d);
        return this.d;
    }
}

console.log(new PruebDePruebas().hola());

const pruebanumero = !!d ? () => {const a = 0; return !!a} : false;
console.log(pruebanumero)

const valores = {
    valor1: 'buenas',
    'valor2': 'preba'
}

console.log(valores['valor1']);
console.log(valores)

const valor45 = {...valores};
valor45.valor1 = 'hola';

console.log(valor45);
console.log(valores);




