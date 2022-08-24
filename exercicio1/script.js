// exercício a
// function nome () {
//     return "Olá, Tibério";
// };

// Exercício c arrow function
// let ola1 = (nome) => "Olá, Tibério"

// console.log(ola1(nome));

//recebendo o valor através do console ou prompt
// function ola(nome) {
//     resultado = `Olá, ${nome}`;
//     return resultado;
// };

// Exercício c arrow function
let ola = (nome) => resultado = `Olá, ${nome}`;

console.log(ola("Tibério"));

// exercício b
// function tabuada(f, num) {
//     for(i=1;i<=f;i++) {
//         result = i*num;
//         //console.log(`${num} X ${i} = ${result}`);
//         return (`${num} X ${i} = ${result}`);
//     }
//     //return (`${num} X ${i} = ${result}`);
// };

//Exercício c arrow function
const tabuada = (f, num) => {
    for(i=1;i<=f;i++) {
        result = i*num;
        console.log(`${num} X ${i} = ${result}`);
    };
};


tabuada(10, 6)
//console.log(tabuada(10, 6)); 