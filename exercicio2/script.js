// Exercício A
// function soma(num1, num2) {
//     return num1 + num2
// }

// console.log(4, 6);
// console.log(10, 8);

// Exercício B
function numeros(num, num1) {
    let booleano;
    if(num >= num1) {
        booleano = true;
    } else {
        booleano = false;
    }
    return booleano;
};

console.log(numeros(10,9));
console.log(numeros(5,7)); 

// Exercício C
// function numPar(num) {
//     return (`Seu número é par? R.:${num%2==0}`);
// };

const numPar = (num) => {
    if(num % 2 == 0) {
        return true;
    } else {
        return false;
    }
}

console.log(numPar(5));
console.log(numPar(8));

// Exercício D
const mensagem = (frase) => {
    return (`A sua frase tem ${frase.length} caracteres. Veja ela toda maiúscula: \n${frase.toUpperCase()}`);
};

console.log(mensagem("Olá me chamo Tibério"));