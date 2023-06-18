/*
Program dari akar pangkat 2 dari x dengan x harus bilangan genap, dengan kondisi sebagai berikut :
- Jika user input angka kurang dari 0 , user get error message "Tidak bisa input bilangan negatif" 
- Jika user input angka ganjil, user get error message "Tidak bisa input bilangan ganjil"
Hint : gunakan rumus sqrt(x)
*/

const prompt = require('prompt-sync')({sigint: true});
var value = prompt("Please enter a number : ");

if(value<0){
    console.log("Tidak bisa input bilangan negatif")
    }
else if (value%2!=0){
    console.log("Tidak bisa input bilangan ganjil")
}
else{
    var outcome;
    outcome = Math.sqrt(value);
    console.log ("Hasil akar kuadrat dari " + value + " adalah " + outcome);
};