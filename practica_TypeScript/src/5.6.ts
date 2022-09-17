class Student {
        
        constructor(private name: string, public  school: string = 'Harry Herpson High School') { };
        introduction() {
            console.log('[Ejercicio 5.6]', `Hola, mi nombre es ${this.name} y asisto a ${this.school}`);
        }
        
    }
    
const student = new Student('Morty');
console.log(student.school);
student.introduction();