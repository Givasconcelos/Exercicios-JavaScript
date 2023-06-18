function calcularSoma() {
    let soma = 0;

    for (let i = 1; i <= 10; i++) {
        let numero = parseInt(prompt('Digite um número:'));
        soma += numero;
    }

    console.log('A soma dos 10 números é:', soma);
}

calcularSoma();
