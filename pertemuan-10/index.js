// Var, Let, Const
//Scope
// 1. function Scope (var)
// 2. block scope (let, const)

var nama='Arthur';
var nama='Sumual';

console.log(nama);

// IIFE= setelah dideklarasi, lgsg dipanggil otomatis
(function(){
    // statements
})();

// 2. Template Literal
const person = {
    fName: 'Arthur',
    lName: 'Sumual',
    age: 20,
};

console.log(`Hallo nama saya ${person.fName} ${person.lName}. Umur saya ${person.age} tahun`)