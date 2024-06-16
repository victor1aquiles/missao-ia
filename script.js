const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você tem pais separados?",
        alternativas: [
            {
                texto: "Não, sou foda.",
                afirmacao: "daora"
            },
            {
                texto: "SIM, TENHO DEPRESSÃO",
                afirmacao: "esquisito"
            }
        ]
    },
    {
        enunciado: "Você joga lol (League of legends)?",
        alternativas: [
            {
                texto: "Sim, sou um estranho que fede e também doente mental.",
                afirmacao: "usa discord"
            },
            {
                texto: "Não.",
                afirmacao: "firmeza"
            }
        ]
    },
    {
        enunciado: "Tem pessadelos sobre seu futuro e como tudo pode dar errado?",
        alternativas: [
            {
                texto: "Sim.",
                afirmacao: "tem ansiedade"
            },
            {
                texto: "Não.",
                afirmacao: "aspirante a joker"
            }
        ]
    },
    {
        enunciado: "Como se sente ao ver um bebê na rua?",
        alternativas: [
            {
                texto: "Nojo, vontade de CHUPAR O SANGUE DELE MUAHAHAHAHA.",
                afirmacao: "vampiro gay"
            },
            {
                texto: "Normal.",
                afirmacao: "tem depressão"
            }
        ]
    },
    {
        enunciado: "Já assistiu crepúsculo? ",
        alternativas: [
            {
                texto: "Sim sou um vampiro gostoso que mora no mato.",
                afirmacao: "bonito"
            },
            {
                texto: "Sim e eu tô do lado dos lobos.",
                afirmacao: "bombado"
            }
        ]
    },
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
    caixaPerguntas.textContent = "Você é...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();

