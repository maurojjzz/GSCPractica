const numberCollection: number[] = [];
const stringCollection: string[] = [];

function pushToCollection<T>(item:T, collection:(number[]|string[])) {
    collection.push(item);
    return collection;
}

// Anadir algunas cosas a las colecciones
pushToCollection<boolean>(false, stringCollection);
pushToCollection<string>('hi', stringCollection);
pushToCollection<[]>([], stringCollection);

pushToCollection<number>(1, numberCollection);
pushToCollection<number>(2, numberCollection);
pushToCollection<number>(3, numberCollection);

const incrementedByTwo = numberCollection.map((num) => num + 2);

console.log('[Ejercicio 3.7]', `[${incrementedByTwo}] debe ser igual a [3,4,5]`);