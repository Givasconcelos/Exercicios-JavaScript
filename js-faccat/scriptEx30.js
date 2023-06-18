function ordenarValores() {
    let valor1 = parseFloat(prompt('Digite o primeiro valor:'));
    let valor2 = parseFloat(prompt('Digite o segundo valor:'));
    let valor3 = parseFloat(prompt('Digite o terceiro valor:'));
  
    let valores = [valor1, valor2, valor3];
    valores.sort(function(a, b) {
        return a - b;
    });
  
    console.log('Os valores em ordem crescente são: ' + valores.join(', '));
}

ordenarValores();
