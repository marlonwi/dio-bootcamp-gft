/*
# 1️⃣ Desafio Classificador de nível de Herói

**O Que deve ser utilizado**

- Variáveis
- Operadores
- Laços de repetição
- Estruturas de decisões

## Objetivo
Crie uma variável para armazenar o nome e a quantidade de experiência (XP) de um herói, depois utilize uma estrutura de decisão para apresentar alguma das mensagens abaixo:

Se XP for menor do que 1.000 = Ferro
Se XP for entre 1.001 e 2.000 = Bronze
Se XP for entre 2.001 e 5.000 = Prata
Se XP for entre 5.001 e 7.000 = Ouro
Se XP for entre 7.001 e 8.000 = Platina
Se XP for entre 8.001 e 9.000 = Ascendente
Se XP for entre 9.001 e 10.000= Imortal
Se XP for maior ou igual a 10.001 = Radiante

## Saída

Ao final deve se exibir uma mensagem:
"O Herói de nome **{nome}** está no nível de **{nivel}**"
*/
//Inicializando o "readline" biblioteca utilizada para obter entradas do usuário.
var readline = require('readline-sync');

//Criando as variáveis necessárias.
let nome;
let experiencia;
let nivel;
let opcao;
let niveis = ["Ferro", "Bronze", "Prata", "Ouro", "Platina", "Ascendente", "Imortal", "Radiante"];
let cont = [0, 0, 0, 0, 0, 0, 0, 0];

//Criando um laço de repetição "while" que se encerra quando a opção do usuário for 3.
while(opcao != 3){
    //Informando as opções e armazenando a opção do usuário na variável "opcao".
    console.log("Sendo as opções:\n1 - Verificar nível do herói\n2 - Contar quantos herois já foram verificados em cada nível\n3 - Parar execução");
    opcao = parseInt(readline.question("Selecione sua opcao: "));
    //Iniciando uma estrutura de decisão baseada na variável "opcao".
    switch(opcao){
        case 1:
            //Recebendo as informações do herói
            nome = readline.question("Digite o nome do herói: ");
            experiencia = parseInt(readline.question("Digite a quantidade de experiência: "));
            //Utilizando uma estrutura condicional para verificar o nível do herói
            if(experiencia <= 1000){
                nivel = "Ferro";
                cont[0]++;//Incrementando o contador de vezes que caiu em cada nível
            }
            else
                if(experiencia <= 2000){
                    nivel = "Bronze";
                    cont[1]++;
                }
            else
                if(experiencia <= 5000){
                    nivel = "Prata";
                    cont[2]++;
                }
            else
                if(experiencia <= 7000){
                    nivel = "Ouro";
                    cont[3]++;
                }
            else
                if(experiencia <= 8000){
                    nivel = "Platina";
                    cont[4]++;
                }
            else
                if(experiencia <= 9000){
                    nivel = "Imortal";
                    cont[5]++;
                }
            else
                if(experiencia <= 10000){
                    nivel = "Ascendente";
                    cont[6]++;
                }
            else{
                nivel = "Radiante";
                cont[7]++;
            }
            console.log("O Herói de nome " + nome + " está no nível de " + nivel);
            break;
        case 2:
            console.log("A quantidade de heróis verificados em cada nível foi:");
            //Utilizando a estrutura de repetição "for" para percorrer os vetores contendo as informações de niveis e contador.
            for(let i = 0; i < 8; i++){
                console.log(niveis[i] + " = " + cont[i]);
            }
            break;
        case 3:
            console.log("Encerrando execução!!!");
            break;
        default:
            console.log("Opção inválida!!!");
            break;
    }
}
