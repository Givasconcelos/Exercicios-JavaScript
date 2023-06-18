// Página 50 - Exercícios Repita A - J

// ================= A =================

//Apresentar os quadrados dos números inteiros de 15 a 200. 

function quadradoInteiro(){
    let contadora=15;
    let potencia=0;
    
    do{
        potencia=contadora*contadora
        console.log(potencia)
        contadora++
    }while(contadora<201)
}

// ================= B =================

//Elaborar um programa que apresente no final o somatório dos valores pares existentes na faixa de 1 até 500. 

function somaPares(){
    let contadora=1;
    let resto=0;
    let soma=0;

    do{
        resto=contadora%2
        if(resto==0){
            soma=soma+contadora
        }
        contadora++
    }while(contadora<501)
    console.log('A soma dos números pares entre 1 e 500 é: '+soma);
}

// ================= C =================

//Apresentar  todos  os  números  divisíveis  por  4  que  sejam  menores  que  200.  

function divisivelQuatro(){
    let contadora=1;
    let resto=0;
    do{
        resto=contadora%4
        if(resto==0){
            console.log(contadora)
        }
        contadora++
    }while(contadora<200)
}
// ================= D =================

//Elaborar um programa que efetue o cálculo e no final apresente o somatório do número de grãos de trigo que
// se pode obter num tabuleiro de xadrez

function somaGraos(){
    let graos= 1;
    let soma=graos;
    let contadora=1;
    do{
        graos=graos*2
        soma=soma+graos
        contadora++
    }while(contadora<64)
    console.log('A soma dos grãos é: '+soma)
}

// ================= E =================

//Elaborar um programa que efetue a leitura de 15 valores numéricos inteiros e no final apresente
// o total do somatório da fatorial de cada valor lido.  

function somaFatorial(){
    let numero;
    let contadora=1;
    let somaFat=0;
    let fatorial=1;
    let contFatorial=0;
    do{
       numero=parseInt(prompt('Digite um número:'));
         contFatorial=numero;

            while(contFatorial>1){
                  fatorial=fatorial*contFatorial
                  contFatorial--
            }
            
        somaFat=somaFat+fatorial
        contadora++
        fatorial=1;
    }while(contadora<16)
    console.log('A soma fatorial dos números é: '+somaFat)
}

// ================= F =================

// Elaborar  um  programa  que  efetue  a  leitura  sucessiva  de  valores  numéricos  e  apresente 
// no  final  o total do somatório, a média aritmética e o total de valores lidos.

function somaMedia(){
    let numero=0;
    let soma=0;
    let mediaAritmetica=0;
    let totalNum=0;
    let contadora=0;
    do{
        numero=parseInt(prompt('Digite um número positivo(ou negativo para sair)'))
        if(numero>0){
            soma=soma+numero;
            totalNum++
        }
        mediaAritmetica=soma/totalNum;
        contadora++
    }while(contadora<=numero)
    alert('A soma dos números é: '+soma);
    alert('O total de números inseridos é: '+totalNum);
    alert('A média aritmética é: '+mediaAritmetica)
}

// ================= G =================

//Elaborar  um  programa  que  apresente  como  resultado  o  valor  do  fatorial  dos  valores  ímpares
// situados na faixa numérica de 1 a 10. 

function imparFatorial(){
    let contadora=1;
    let fatorial=1;
    let contFatorial=0;
    let resto=0;
    
    do{
       resto=contadora%2;
        if(resto==1){
            contFatorial=contadora;  
                while(contFatorial>1){
                    fatorial=fatorial*contFatorial
                    contFatorial--
                    }
            console.log(fatorial)
            fatorial=1;
            }
        contadora++
    }while(contadora<11)
}

// ================= H =================

//Elaborar  um  programa  que  possibilite  calcular  a área  total  de  uma  residência
//  (sala,  cozinha, banheiro, quartos, área de serviço, quintal, garagem, etc.).

function areaComodo(){
    let resposta;
    let nome;
    let largura;
    let comprimento;
    let areaIndividual=0;
    let areaTotal=0;
        do{
            nome=prompt('Digite o nome do cômodo:')
            largura=parseInt(prompt('Digite a largura do cômodo:'))
            comprimento=parseInt(prompt('Digite o comprimento do cômodo'))
            areaIndividual=largura*comprimento
            console.log(nome+' tem uma área de '+areaIndividual+' m²')
            areaTotal=areaTotal+areaIndividual
            resposta=prompt('Deseja continuar [S/N]?')
        }while(resposta!='N')

    console.log('A área total é: '+areaTotal+' m²')

}

// ================= I =================

//Elaborar  um  programa  que  efetue  a  leitura  de  valores  positivos  inteiros  até  que 
// um  valor  negativo seja  informado.  Ao  final  devem  ser  apresentados  o  maior  e  o  menor  valores  informados  pelo usuário. 

function menorMaior(){
    let numero=parseInt(prompt('Digite um número positivo (ou um valor negativo para sair)'));
    if(numero>0){
    let maior=numero;
    let menor=numero;
    do{
    numero=prompt('Digite um número positivo (ou um valor negativo para sair):')
    if(numero>maior){
    maior=numero
    }
    if(numero<menor && numero>0){
    menor=numero
    }
    }while(numero>0)
    alert('O maior número é: '+maior)
    alert('O menor número é: '+menor)
    }
    else{
    alert('Você precisa inserir um número positivo para saber qual é o maior e o menor')
    }
}

// ================= J =================

// Elaborar  um  programa  que  apresente  o  resultado  inteiro  da  divisão  de  dois  números  quaisquer. 

function divisaoInteira(){

    let dividendo = parseInt(prompt("Digite o dividendo: "));
    let divisor = parseInt(prompt("Digite o divisor: "));
    let quociente = 0;

        do {
            dividendo-=divisor;
            quociente++;
        } while (dividendo >= divisor);

    alert("O resultado inteiro da divisão é: " + quociente);
}