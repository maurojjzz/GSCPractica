"use strict";
function greet(greeting) {
    return greeting.toUpperCase();
}
const defaultGreeting = greet('Hola');
const portugueseGreeting = greet('Oi como vai!');
console.log('[Ejercicio 3.4]', defaultGreeting, portugueseGreeting);
