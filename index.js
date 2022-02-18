// run `node index.js` in the terminal

const c = '\u{FFFD}';
const d = '�';
const e = ' ';
const sen = 'testing 123 testing 345 �';

//console.log(`Hello Node.js v${process.versions.node}!`);

console.log('Matched', e.match(c) !== null);

console.log('�'.charCodeAt(0));
console.log(e.charCodeAt(0));

console.log(sen);
console.log(sen.replace(c, ''));
