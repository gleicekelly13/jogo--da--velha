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
        cell.addEventListener('click', handleClick, { once : true}); //{once:true} O ouvinte de evento será removido automaticamente após a primeira execução.
    });

    setBoardHoverClass();
}

function handleClick(e) {
    const cell = e.target; //Obtém o elemento que foi clicado, neste caso, uma célula do tabuleiro
    const classAtual = o_player ? o_class : x_class; //Define a classe que será usada para marcar a célula, dependendo de qual jogador é o atual
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
    console.log(classAtual)
}

function checkWin(classAtual) {  //Esqueleto da função que verifica a vitória
    console.log(`Verfica se o jogador ${classAtual} venceu`)
    return false;//Retorna false inicialmente para que o jogo continue
} 

//Função que mostra uma mensagem de vitória ou empate e reinicia o jogo
function endGame(draw) {
    if(draw) {
        alert('Empate!')
    } else {
        alert(`${o_player ? 'O' : 'X'} Venceu!`);
    }
    startGame();
}

//Função que verifica se está empatado
function isDraw() {  
    return [...cells].every(cell => { /*O operador spread (...) converte a NodeList `cells` em um array regular. O método 
                                        `every` verifica se todas as células do tabuleiro estão marcadas.*/
        return cell.classList.contains(o_class) || cell.classList.contains(x_class); /* verifica se a célula foi marcada por 
        um dos jogadores ( X ou O) */
    }); 
}

function swapPlayer() { //Alterna a variável o_player para trocar a vez entre os jogadores.
    o_player = !o_player; //Inverte o valor atual de o_player. Se o_player era false, ele se torna true, e vice-versa. Isso faz com que os turnos alternem entre os jogadores "X" e "O".Se o_player é true, o próximo jogador a jogar será o X. Se for false, o próximo será o O.
}

startGame();

restartButton.addEventListener('click', startGame);


 