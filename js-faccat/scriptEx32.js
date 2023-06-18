function determinarVencedor() {
    let timeA = prompt('Digite o nome do Time A:');
    let timeB = prompt('Digite o nome do Time B:');
    let golsA = parseInt(prompt('Digite o número de gols do Time A:'));
    let golsB = parseInt(prompt('Digite o número de gols do Time B:'));

    if (golsA > golsB) {
        console.log('O vencedor é o ' + timeA);
    } else if (golsB > golsA) {
        console.log('O vencedor é o ' + timeB);
    } else {
        console.log('Empate');
    }
}

determinarVencedor();
