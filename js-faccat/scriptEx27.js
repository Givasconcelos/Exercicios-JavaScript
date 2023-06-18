function determinarSinal() {
    let valor = parseInt(prompt('Digite um número:'));
  
    if (valor > 0) {
        console.log('O valor ' + valor + ' é positivo.');
    } else if (valor < 0) {
        console.log('O valor ' + valor + ' é negativo.');
    } else {
        console.log('O valor é zero.');
    }
}

determinarSinal();
