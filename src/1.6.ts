const elementoInventario:[string,number] = ['tuerca', 11]; //tupla

// despues lo desestructuramos
const [nombre, cantidad] = elementoInventario;

const mensaje = agregarInventario(nombre, cantidad);

function agregarInventario(nombre: string, cantidad: number): string {
    return `Se agregaron ${cantidad} ${nombre}s al inventario.`;
}

console.log('[Ejercicio 1.6]', mensaje);

