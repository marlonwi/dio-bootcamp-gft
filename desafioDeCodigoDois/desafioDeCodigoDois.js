/*
# 2️⃣ Calculadora de partidas Rankeadas
**O Que deve ser utilizado**

- Variáveis
- Operadores
- Laços de repetição
- Estruturas de decisões
- Funções

## Objetivo:

Crie uma função que recebe como parâmetro a quantidade de vitórias e derrotas de um jogador,
depois disso retorne o resultado para uma variável, o saldo de Rankeadas deve ser feito através
do calculo (vitórias - derrotas)

Se vitórias for menor do que 10 = Ferro
Se vitórias for entre 11 e 20 = Bronze
Se vitórias for entre 21 e 50 = Prata
Se vitórias for entre 51 e 80 = Ouro
Se vitórias for entre 81 e 90 = Diamante
Se vitórias for entre 91 e 100= Lendário
Se vitórias for maior ou igual a 101 = Imortal

## Saída

Ao final deve se exibir uma mensagem:
"O jogador tem de saldo de **{saldoVitorias}** está no nível de **{nivel}**"
   
Bons estudos 😉
*/
//Inicializando o "readline" biblioteca utilizada para obter entradas do usuário.
var readline = require('readline-sync');

//Função para calcular o saldo ranqueado do jogador, recebe como parâmetro o saldo de vitorias e derrotas.
function calcularSaldo(saldoVitorias, saldoDerrotas){
    return saldoVitorias - saldoDerrotas
}

//Função para calcular o rank do jogador, recebe como parâmetro o saldo ranqueado.
function calcularRank(saldoRanqueado){
    let nivel;
    //Utilizando uma estrutura condicional para verificar o nível do jogador
    if(saldoRanqueado <= 10){
        nivel = "Ferro";
        cont[0]++;//Incrementando o contador de vezes que caiu em cada nível
    }
    else
        if(saldoRanqueado <= 20){
            nivel = "Bronze";
            cont[1]++;
        }
    else
        if(saldoRanqueado <= 50){
            nivel = "Prata";
            cont[2]++;
        }
    else
        if(saldoRanqueado <= 80){
            nivel = "Ouro";
            cont[3]++;
        }
    else
        if(saldoRanqueado <= 90){
            nivel = "Diamante";
            cont[4]++;
        }
    else
        if(saldoRanqueado <= 100){
            nivel = "Lendario";
            cont[5]++;
        }
    else{
        nivel = "Imortal";
        cont[6]++;
    }
    return nivel;
}

//Função que não possui parâmetro e nem retorno, apenas execulta a impressão do contador de ranks.
function imprimeContadorRanks(){
    let niveis = ["Ferro", "Bronze", "Prata", "Ouro", "Diamante", "Lendário", "Imortal"];
    //Utilizando a estrutura de repetição "for" para percorrer os vetores contendo as informações de niveis e contador.
    for(let i = 0; i < 8; i++){
        console.log(niveis[i] + " = " + cont[i]);
    }
}

//Criando as variáveis necessárias.
let nome;
let quantidadeVitorias;
let quantidadeDerrotas;
let saldoRanqueadas;
let nivel;
let opcao;
var cont = [0, 0, 0, 0, 0, 0, 0];

//Criando um laço de repetição "while" que se encerra quando a opção do usuário for 3.
while(opcao != 3){
    //Informando as opções e armazenando a opção do usuário na variável "opcao".
    console.log("Sendo as opções:\n1 - Verificar rank do jogador\n2 - Contar quantos jogadores já foram verificados em cada nível\n3 - Parar execução");
    opcao = parseInt(readline.question("Selecione sua opcao: "));
    //Iniciando uma estrutura de decisão baseada na variável "opcao".
    switch(opcao){
        case 1:
            //Recebendo as informações do jogador
            nome = readline.question("Digite o nome do jogador: ");
            quantidadeVitorias = parseInt(readline.question("Digite a quantidade de vitórias: "));
            quantidadeDerrotas = parseInt(readline.question("Digite a quantidade de derrotas: "));
            saldoRanqueadas = calcularSaldo(quantidadeVitorias, quantidadeDerrotas);
            nivel = calcularRank(saldoRanqueadas);
            console.log("O jogador de nome " + nome + " possui um saldo de " + saldoRanqueadas + " com isso seu rank é " + nivel);
            break;
        case 2:
            console.log("A quantidade de jogadores verificados em cada nível foi:");
            imprimeContadorRanks();
            break;
        case 3:
            console.log("Encerrando execução!!!");
            break;
        default:
            console.log("Opção inválida!!!");
            break;
    }
}
