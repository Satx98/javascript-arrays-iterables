const ids = new Set(['Hi', 'from', 'set!']);
ids.add(2);

// if (ids.has('Hi')) {
//   ids.delete('Hi');
// }    // since this won't throw an error if it fails there might not be a use to perform
        // that extra check, i.e., if (ids.has('Hi'))

ids.delete('Hi');
// console.log(ids.has(2));

// for (const entry of ids.values()) {
//   console.log(entry);
// }

for (const entry of ids.entries()) {
  console.log(entry[0]);
}
