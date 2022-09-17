"use strict";
class Animalz {
    constructor(nombre) {
        this.nombre = nombre;
        this.nombre = nombre;
    }
    move(meters) {
        console.log(`${this.nombre} se movio ${meters}m.`);
    }
    set name(name) {
        this.nombre = name;
    }
}
class Snake extends Animalz {
    constructor(name) {
        super(name);
    }
    move(meters) {
        console.log('Deslizandose...');
        super.move(meters + 5);
        // debe invocar al metodo `move` del padre, con un deslizamiento predeterminado
        // de 5 metros
    }
}
class Pony extends Animalz {
    constructor(name) {
        super(name);
    }
    move(meters) {
        console.log('Galopando...');
        super.move(meters + 60);
        // debe invocar al metodo `move` del padre con un galope predeterminado
        // de 60 metros
    }
}
// La clase Animal no debe ser instanciable.
// Eliminar o comentar una vez que se logra el error deseado.
// const andrew = new Animalz("Andrew el Animal");
// andrew.move(5);
const sammy = new Snake("Sammy la serpiente");
sammy.move(2);
//console.log(sammy.name); // debe devolver error
const pokey = new Pony("Pokey el pony");
pokey.move(34);
//console.log(pokey.name); // Should devolver error
