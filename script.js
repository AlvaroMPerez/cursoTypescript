"use strict";
class Sorteo {
    constructor(nombre) {
        this.nombre = nombre;
    }
    // Getters y setters
    setNumero(numero) {
        this.numero = numero;
    }
    getNumero() {
        return this.numero;
    }
    sortear() {
        return `para ${this.nombre} el tiquet es ${this.numero}`;
    }
}
let sortear = new Sorteo("juan");
sortear.setNumero(42);
console.log(sortear.sortear());
