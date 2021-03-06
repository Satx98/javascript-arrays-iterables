// const ids = new Set(['Hi', 'from', 'set!']);
// ids.add(2);

// // if (ids.has('Hi')) {
// //   ids.delete('Hi');
// // }    // since this won't throw an error if it fails there might not be a use to perform
//         // that extra check, i.e., if (ids.has('Hi'))

// ids.delete('Hi');
// // console.log(ids.has(2));

// // for (const entry of ids.values()) {
// //   console.log(entry);
// // }

// for (const entry of ids.entries()) {
//   console.log(entry[0]);
// }

// const person1 = { name: 'Max' };
// const person2 = { name: 'Manuel' };

// const personData = new Map([[person1, [{ date: 'yesterday', price: 10 }]]]);

// personData.set(person2, [{ date: 'two weeks ago', price: 100 }]);

// console.log(personData);
// console.log(personData.get(person1));

// for (const [key, value] of personData.entries()) {
//   console.log(key, value);
// }

// for (const key of personData.keys()) {
//   console.log(key);
// }

// for (const value of personData.values()) {
//   console.log(value);
// }

// console.log(personData.size);

let person = { name: 'Max' };
const persons = new WeakSet();
persons.add(person);

// ... some operations
// person = null;

console.log(persons);

const personData = new WeakMap();
personData.set(person, 'Extra Info!');

person = null;

console.log(personData);
