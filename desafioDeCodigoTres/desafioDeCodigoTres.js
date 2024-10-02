/*
# 3️⃣ Escrevendo as classes de um Jogo

**O Que deve ser utilizado**

- Variáveis
- Operadores
- Laços de repetição
- Estruturas de decisões
- Funções
- Classes e Objetos

## Objetivo:

Crie uma classe generica que represente um herói de uma aventura e que possua as seguintes propriedades:

- nome
- idade
- tipo (ex: guerreiro, mago, monge, ninja )

além disso, deve ter um método chamado atacar que deve atender os seguientes requisitos:

- exibir a mensagem: "o {tipo} atacou usando {ataque}")
- aonde o {tipo} deve ser concatenando o tipo que está na propriedade da classe
- e no {ataque} deve seguir uma descrição diferente conforme o tipo, seguindo a tabela abaixo:

se mago -> no ataque exibir (usou magia)
se guerreiro -> no ataque exibir (usou espada)
se monge -> no ataque exibir (usou artes marciais)
se ninja -> no ataque exibir (usou shuriken)

## Saída

Ao final deve se exibir uma mensagem:

- "o {tipo} atacou usando {ataque}"
  ex: mago atacou usando magia
  guerreiro atacou usando espada
 

 
Bons estudos 😉
*/

//Inicializando o "readline" biblioteca utilizada para obter entradas do usuário.
var readline = require('readline-sync');


class personagem{
    constructor(nome, idade, tipo){
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }
    atacar(){
        if(this.tipo == "mago"){
            console.log(`O ${this.tipo} atacou usando magia`)
        }
        else
            if(this.tipo == "guerreiro"){
                console.log(`O ${this.tipo} atacou usando a espada`)
            }
        else
            if(this.tipo == "monge"){
                console.log(`O ${this.tipo} atacou usando artes marciais`)
            }
        else{
            console.log(`O ${this.tipo} atacou usando shurikens`)
        }
    }
}

let opcao = 1;
let nome;
let idade;
let tipo;
while(opcao != 2){
    nome = readline.question("Digite o nome do personagem: ");
    idade = parseInt(readline.question("Digite a idade do personagem: "));
    tipo = readline.question("Digite o tipo do personagem: ");
    let personagem1 = new personagem(nome, idade, tipo);
    personagem1.atacar();
    console.log("Sendo as seguintes opções:\n1 - Criar novo herói\n 2 - Sair");
    opcao = parseInt(readline.question("Selecione uma opcao: "));
}