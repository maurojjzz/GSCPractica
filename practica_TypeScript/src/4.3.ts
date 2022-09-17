const numbers:any[] = [1, 2, 3, [44, 55], 6, [77, 88], 9, 10];

function flatten<T>(array:T[]) :T[]{ 
    const flattened:any = []; 
    for (const element of array) { 
        if (Array.isArray(element)) { 
            element; // any[] 
            flattened.push(...element);
        } else {
                element; // any
                flattened.push(element);
            }
    }  

    return flattened;
 }

 const flattenedNumbers:any[] = flatten(numbers);

 console.log('[Ejercicio 4.3]', flattenedNumbers);