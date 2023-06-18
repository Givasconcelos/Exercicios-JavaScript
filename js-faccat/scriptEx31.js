function verificarTriangulo() {
    let ladoA = parseFloat(prompt('Digite o valor do lado A:'));
    let ladoB = parseFloat(prompt('Digite o valor do lado B:'));
    let ladoC = parseFloat(prompt('Digite o valor do lado C:'));

    if (ladoA < ladoB + ladoC && ladoB < ladoA + ladoC && ladoC < ladoA + ladoB) {
        console.log('Os valores informados formam um triângulo.');
    } else {
        console.log('Os valores informados não formam um triângulo.');
    }
}

verificarTriangulo();
