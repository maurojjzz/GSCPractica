class Furniture {
    constructor(private manufacturer: string = 'IKEA') { }
   
    get manufacture():string{
        return this.manufacturer;
    }
}
    
class Desk extends Furniture {
    kind() {
        console.log('[Ejercicio 5.5]', `Este es un escritorio hecho por ${this.manufacture}`);
    }
}
    
class Chair extends Furniture {
    kind() {
        console.log('[Ejercicio 5.5]', `Esta es una silla hecha por ${this.manufacture}`);
    }
}
    
const desk = new Desk();
desk.kind();
desk.manufacture; // debe devolver error
    
const chair = new Chair();
chair.kind();
chair.manufacture; // debe devolver error
    