//10 - Crie uma função que recebe o ano de nascimento da pessoa informando se ela é maior de idade ou menor.

let anoDeNascimento = 2015
let anoAtual = 2021
const idade = anoAtual - anoDeNascimento

if (anoAtual - anoDeNascimento > 18) {
    console.log("Maior de idade")
} else {
    console.log(`Você ainda é menor de idade. Tente novamente em ${18 - idade} anos`)
}