function soma(a,b) {
    resultado=a+b
    document.getElementById('demo').innerHTML=resultado;
}
function somaDoisNumeros(){
    let numero=parseInt(prompt("Digite um número:"))
    let numero1=parseInt(prompt("Digite um número:"))
    let soma=numero+numero1;
    alert("A soma dos valores corresponde a :" +soma)

}
function entrada(){
    let idade=parseInt(prompt("Digite a sua idade"))
    
    if (idade>18){
        alert("Pode entrar na balada")
    }
}