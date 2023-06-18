function calcularSoma() {
    let soma = 0;

    for (let i = 1; i <= 10; i++) {
        let numero = parseInt(prompt('Digite um número:'));
        if (numero < 40) {
            soma += numero;
        }
    }

    console.log('O valor final da soma é:', soma);
}

calcularSoma();
