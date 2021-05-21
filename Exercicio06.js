//6 - Elabore um algoritmo que receba um número (1-7) e devolva o dia da semana correspondente.

let numero = 7

console.log(numero)

switch (numero){
    case 1: console.log("Domingo")
        break;
    case 2: console.log("Segunda")
        break;
    case 3: console.log("Terça")
        break;
    case 4: console.log("Quarta")
        break;
    case 5: console.log("Quinta")
        break;
    case 6: console.log("Sexta")
        break;
    case 7: console.log("Sábado")
        break;
    default: console.log("Digite uma entrada válida.")
}