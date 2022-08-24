//usando uma função para cada operação
// function soma(num1, num2) {
//     return (`${num1} + ${num2} = ${num1 + num2}`);
// };
// function subtracao(num1, num2) {
//     return (`${num1} - ${num2} = ${num1 - num2}`);
// };
// function multiplicacao(num1, num2) {
//     return (`${num1} * ${num2} = ${num1 * num2}`);
// };
// function divisao(num1, num2) {
//     return (`${num1} / ${num2} = ${num1 / num2}`);
// };

let num = Number(prompt("Digite um número"));
let num0 = Number(prompt("Digite outro número"));

// console.log(soma(num, num0)); 
// console.log(subtracao(num, num0)); 
// console.log(multiplicacao(num, num0)); 
// console.log(divisao(num, num0)); 

//usando uma função para todas as operações
const calculadora = (num1,num2) => {
    soma = `Soma: ${num} + ${num0} = ${num + num0}`;
    subtrair = `Subtração: ${num} - ${num0} = ${num - num0}`;
    multiplica = `Multiplicação: ${num} X ${num0} = ${num * num0}`;
    divide = `Divisão: ${num} / ${num0} = ${num / num0}`;   
    
    return (soma+ "\n" +subtrair+ "\n" +multiplica+ "\n" +divide);
};

console.log(calculadora);
// console.log(calculadora(soma));
// console.log(calculadora(subtrair));
// console.log(calculadora(multiplica));
// console.log(calculadora(didive));