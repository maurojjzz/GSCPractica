"use strict";
class Student {
    constructor(name, school = 'Harry Herpson High School') {
        this.name = name;
        this.school = school;
    }
    ;
    introduction() {
        console.log('[Ejercicio 5.6]', `Hola, mi nombre es ${this.name} y asisto a ${this.school}`);
    }
}
const student = new Student('Morty');
console.log(student.school);
student.introduction();
