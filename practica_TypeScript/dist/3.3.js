"use strict";
// function computeScore(word:string):number {
//     const letters:string[] = word.toUpperCase().split('');
//     return letters.reduce((accum:number, curr:string) => accum += getPointsFor(curr), 0);
// }
// function getPointsFor(letter:string) {
//     const lettersAndPoints = [
//      ['AEOIULNRST', 1],
//      ['DG', 2],
//      ['BCMP', 3],
//      ['FHVWY', 4],
//      ['K', 5],
//      ['JX', 8],
//      ['QZ', 10],
//     ];
//     return lettersAndPoints.reduce((computedScore, pointsTuple) => {
//         const [letters, score] = pointsTuple;
//         if (letters.split('').find((ll) => ll === letter)) {
//             return computedScore += score;
//         }
//         return computedScore;
//      }, 0);
// }
// console.log('[Ejercicio 3.3]', `zoologico vale ${computeScore('zoo')} puntos.`);
