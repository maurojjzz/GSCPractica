
interface datosPersona{
    nombre: string;
    edad:number;
}

class Persona implements datosPersona {
    constructor(public nombre:string, public edad: number) { 
        this.nombre=nombre;
        this.edad=edad;
    }
    }
    
    const juan = new Persona('Juan', 31);
    
    console.log('[Ejercicio 2.2]', `${juan.nombre} tiene ${juan.edad} anios.`);