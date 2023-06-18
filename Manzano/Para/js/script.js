// Página 66 - Exercícios Para A - K

// ================= A =================

//Apresentar os quadrados dos números inteiros de 15 a 200. 

function quadradoInteiro(){
    for(let i=15; i<201; i++){
        console.log((i*i))
    }
}

// ================= B =================

//Apresentar os resultados de uma tabuada de multiplicar (de 1 até 10) de um número qualquer. 

function tabuada(){
    let numero= parseInt(prompt('Insira o número que deseja saber a tabuada: '));
        for(let i=1; i<11; i++){
            resultado= numero*i;
            console.log(numero+ ' x ' + i + ' = ' + resultado)
        }
}

// ================= C =================

//Apresentar o total da soma obtida dos cem primeiros números inteiros (1+2+3+4+...+98+99+100).

function somaInteiro(){
    let soma=0;

        for(let i=1; i<101; i++){
            soma=soma+i;
        }

    console.log(soma)
}

// ================= D =================

//Elaborar um programa que apresente no final o somatório dos valores pares existentes na faixa de 1 até 500.

function somaInteiro(){
    let soma= 0;

        for(let i=1; i<501; i++){
            soma=soma+i;
        }

    console.log(soma)
}

// ================= E =================

//Apresentar todos os valores numéricos inteiros ímpares situados na faixa de 0 a 20. 

function impares(){
    let resto=0;
    
        for(let i=0; i<21; i++){
            resto=i%2

                if(resto==1){
                    console.log(i)
                }
        }
}

// ================= F =================

//Apresentar  todos  os  números  divisíveis  por  4  que  sejam  menores  que  200. 

function divisivelQuatro(){
    let resto=0;

        for(let i= 1; i<200; i++){
            resto=i%4;

                if(resto==0){
                    console.log(i)
                }
        }
}

// ================= G =================

//Apresentar os resultados das potências de 3, variando do expoente 0 até o expoente 15. 

function tresPotencia(){
    let resultado= 1;

        console.log('1')
        
        for(let i=1; i<16; i++){
            resultado=resultado*3
            console.log(resultado)
        }
}

// ================= H =================

//Elaborar  um  programa  que  apresente  como  resultado  o  valor  de  uma  potência  de
//  uma  base qualquer elevada a um expoente qualquer

function potencia(){
    let base=parseInt(prompt('Digite o número da base: '));
    let expoente=parseInt(prompt('Digite o número do expoente: '));
    let resultado= 1;

        for(let i=1; i<=expoente; i++){
            if(expoente!=0){
                resultado=resultado*base
            }

            else{
                console.log('1')
            }
        }

    console.log(resultado)
}

// ================= I =================

//Escreva  um  programa  que  apresente  a  série  de  Fibonacci  até  o  décimo  quinto  termo. 

function serieFibonacci(){
    let atual=1;
    let antecessor=0;
    let soma=0;

        for(let i=1; i<15; i++){
            soma=atual+antecessor
            console.log(soma)
            antecessor=atual
            atual=soma
        }
}

// ================= J =================

//Elaborar um programa que apresente os valores de conversão de graus Celsius em Fahrenheit, 
//de 10 em 10 graus, iniciando a contagem em 10 graus Celsius e finalizando em 100 graus Celsius. 

function celsiusFahrenheit(){
    let soma=0;
    let fahrenheit=0;
    let celsius=10;

        for(let i=1; i<11; i++){
            soma=soma+celsius
            fahrenheit=((9*soma)+160)/5
            console.log(fahrenheit+' F')
        }
    }

// ================= K =================

//  Elaborar  um  programa  que  apresente  como  resultado  o  valor  do  fatorial  dos  valores
//  ímpares situados na faixa numérica de 1 a 10.

function imparFatorial(){
    let fatorial=1;
    let contFatorial=0;
    let resto=0;

        for(let i=1; i<11; i++){
            resto=i%2
                if(resto==1){
                    contFatorial=i;
                        
                        while(contFatorial>1){
                            fatorial=fatorial*contFatorial
                            contFatorial--
                        }
                    console.log(fatorial)

                    fatorial=1;
                }
        }
}



