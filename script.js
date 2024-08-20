/* Seleção de todos os elementos da célula */
const cells = document.querySelectorAll('[data-cell]');
const tabuleiro = document.getElementById('tabuleiro');
const restartButton = document.getElementById('restartButton');
let o_player;

/* Definição de constantes para as classes x e o. */
const x_class = 'x';
const o_class = 'o';

/* Definição das combinações vencedoras.  */
const winning_combinattions = [ 
    [0, 1, 2],  // representam as posições das células que formam uma linha vencedora.
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7], 
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

/* Função que inicia o jogo */
function startGame() {
    o_player = false;  //Definição do estado inicial
    cells.forEach(cell => {
        cell.classList.remove(x_class);
        cell.classList.remove(o_class);
        cell.removeEventListener('click', handleClick);
        cell.addEventListener('click', handleClick, { once : true});
    });

    setBoardHoverClass();
}

function handleClick(e) {
    const cell = e.target; //Obtém o elemento que foi clicado, neste caso, uma célula do tabuleiro
    let classAtual;
      if(o_player) {
         classAtual = o_class;
         console.log(classAtual)
      } else {
        classAtual = x_class;
        console.log(classAtual)
      }
    cellMark(cell, classAtual);
    swapPlayer();
    
}

//Função que ajusta a aparência do tabuleiro com base no jogador que deve jogar a seguir
function setBoardHoverClass() {
    console.log('Define o visual do tabuleiro')
}

//Adiciona a classe X ou O à célula clicada.
function cellMark(cell, classAtual) { //`cell` representa a célula que foi clicada; `classAtual` é a classe que representa o jogador atual
    cell.classList.add(classAtual); //Adicionando essa classe à célula
}

function swapPlayer() {
    o_player = !o_player;
}

startGame();


 