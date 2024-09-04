const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
       
        enunciado: "Quem foi o principal criador de Elden Ring? ",
        alternativas: [
            {
                texto: "Hidetaka Miyazaki",
                afirmacao: [
                ],
                proxima: 1,
            },
            {
                texto: "Hironobu Sakaguchi",
                afirmacao: [
                   
                ],
                proxima: 2,
            },
        ]
    },
    {
        enunciado: "Quem é o personagem principal do jogo?",
        alternativas: [
            {
                texto: "O Cavaleiro",
                afirmacao: [
                  
                ],
                proxima: 3,
            },
            {
                texto: "O Sinluz (Tarnished)",
                afirmacao: [
                 
                ],
                proxima: 4,
            },
        ]
    },
    {
        enunciado: "Qual desses é um dos principais chefes em Elden Ring?",
        alternativas: [
            {
                texto: "Gwyn, Lord of Cinder",
                afirmacao: [
                   
                ],
                proxima: 3,
            },
            {
                texto: "Malenia, Blade of Miquella",
                afirmacao: [
                  
                ],
                proxima: 4,
            },
        ]
    },
    {
        enunciado: "Qual é a natureza de Radahn, um dos grandes chefes do jogo?",
        alternativas: [
            {
                texto: "Um guerreiro gigante",
                afirmacao: [
                    
                ],
                proxima: 5,
            },
            {
                texto: "Um cavaleiro celestial",
                afirmacao: [
            
                ],
                proxima: 6,
            },
        ]
    },
    {
        enunciado: "Qual renomado autor de fantasia colaborou com a FromSoftware para criar a lore de Elden Ring?",
        alternativas: [
            {
                texto: "George R. R. Martin",
                afirmacao: [
                  
                ],
                proxima: 5,
            },
            {
                texto: " J.K. Rowling",
                afirmacao: [
                   
                ],
                proxima: 6,
            },
        ]
    },
    {
        enunciado: "Qual é a função das Sites of Grace no jogo?",
        alternativas: [
            {
                texto: "Áreas seguras onde inimigos não podem atacar",
                afirmacao: [
                   
                ],
                proxima: 7,
            },
            {
                texto: "Pontos de recuperação de HP e FP, e lugares para subir de nível",
                afirmacao: [
                  
                ],
                proxima: 7,
            },
        ]
    },
    {
        enunciado: "Qual é o nome do mundo em que se passa Elden Ring?",
        alternativas: [
            {
                texto: " Drangleic",
                afirmacao: [
                    
                ],
                proxima: 7,
            },
            {
                texto: "The Lands Between",
                afirmacao: [
                   
                ],
                proxima: 7,
            },
        ]
    },
    {
        enunciado: "Qual dos seguintes jogos da FromSoftware possui referências e semelhanças notáveis com Elden Ring?",
        alternativas: [
            {
                texto: "Bloodborne",
                afirmacao: [
                    
                ],
            },
            {
                texto: " Dark Souls",
                afirmacao: [
                    "Temos um expert em Elden Ring por aqui!Parábens jovem gamer!"
                    
                ],
            },
        ]
    }
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Resultado final...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
