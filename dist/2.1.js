"use strict";
/*interface CartItem{
    id:number;
    titulo:string;
    idVariante?:number;
}

const item:CartItem={
    id:1,
    titulo:'Zapatos de cuero'
}

function agregarAlCarro(item:CartItem) {
     console.log('[Ejercicio 2.1]', `Agregando "${item.titulo}" al carro de compras.`);
    }

agregarAlCarro(item);*/
function agregarAlCarro(item) {
    console.log('[Ejercicio 2.1]', `Agregando "${item.titulo}" al carro de compras.`);
}
agregarAlCarro({ id: 1, titulo: 'Zapatos de cuero' });
