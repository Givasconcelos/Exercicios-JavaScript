// Ler dois valores (inteiros, reais ou caracteres) para as variáveis A e B, e efetuar a troca dos valores de forma que a variável A passe
//  a possuir o valor da variável B e a variável B passe a possuir o valor davariável A. Apresentar os valores trocados
let a = prompt("Digite um numero: ")
let b = prompt("Digite outro numero: ")

let auxilar = a
a = b
b = auxilar

alert ('Primeiro valor: ' + a +', Segundo valor: ' + b)
