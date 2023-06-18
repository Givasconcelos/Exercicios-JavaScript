function compararValores() {
    let valor1 = parseFloat(prompt('Digite o primeiro valor:'));
    let valor2 = parseFloat(prompt('Digite o segundo valor:'));

    if (valor1 === valor2) {
        console.log('Números iguais');
    } else if (valor1 > valor2) {
        console.log('Primeiro valor é maior');
    } else {
        console.log('Segundo valor é maior');
    }
}

compararValores();
