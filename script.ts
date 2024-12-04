class Sorteo<T>{
    private numero?: T;

    constructor( private nombre : string){}

    // Getters y setters

    setNumero(numero: T){
        this.numero = numero;
    }
    
    getNumero(): T | undefined{
        return this.numero;
    }

    public sortear(): string{
        return `para ${this.nombre} el tiquet es ${this.numero}`
    }
}

let sortear = new Sorteo<number>("juan");

sortear.setNumero(42)

console.log(sortear.sortear())