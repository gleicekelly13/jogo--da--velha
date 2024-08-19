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

function handleClick() {
    console.log('Célula Clicada')
}

//Função que ajusta a aparência do tabuleiro com base no jogador que deve jogar a seguir
function setBoardHoverClass() {
    console.log('Define o visual do tabuleiro')
}

startGame();