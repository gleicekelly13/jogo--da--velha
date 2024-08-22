/* Seleção de todos os elementos da célula */
const cells = document.querySelectorAll('[data-cell]');
const tabuleiro = document.getElementById('tabuleiro');
const restartButton = document.getElementById('restartButton');
let o_player; //Controla de quem é a vez durante o jogo, alternando entre os jogadores que usam as marcas "X" e "O".

/* Definição de constantes para as classes X e O. */
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

/*1° Função que inicia o jogo */
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

/*2°  */
function handleClick(e) {
    const cell = e.target; //Obtém o elemento que foi clicado, neste caso, uma célula do tabuleiro
    const classAtual = o_player ? o_class : x_class; /*Define a classe que será usada para marcar a célula, 
                                                       dependendo de qual jogador é o atual*/
    cellMark(cell, classAtual);

    if(checkWin(classAtual)) {  //Se houver um jogador vencedor...
        endGame(false);  //...O jogo não termina por empate
    } else if (isDraw()) {  //Se houver um empate...
        endGame(true);  //...então o jogo termina por causa do empate
    } else {  //Se não tem um vencedor e nem teve empate, o jogo continua...
        swapPlayer();  //...alterna o jogador...
        setBoardHoverClass();  //...e altera a classe do tabuleiro com base no jogador q vai jogar a seguir.
    }
    
}

//7° Função que ajusta a aparência do tabuleiro com base no jogador que deve jogar a seguir
function setBoardHoverClass() {
    tabuleiro.classList.remove(o_class); 
    tabuleiro.classList.remove(x_class);
    if(o_player) { //Significa que é a vez do jogador "O".
        tabuleiro.classList.add(o_class); //Altera o estilo do tabuleiro ou indica que o próximo clique colocará um "O".
    } else {  //Significa que é a vez do jogador "X".
        tabuleiro.classList.add(x_class); //Ajusta a aparência do tabuleiro para refletir que um "X" será colocado na próxima jogada.
    }
}

//3° Adiciona a classe X ou O à célula clicada.
function cellMark(cell, classAtual) { //`cell` representa a célula que foi clicada; `classAtual` é a classe que representa o jogador atual
    cell.classList.add(classAtual); //Adicionando essa classe à célula
    console.log(classAtual)
}

//Função que determina se o jogador atual venceu o jogo
function checkWin(classAtual) { //classAtual indica a class atual que está sendo verificada
    return winning_combinattions.some(combination => { /* `some`: Verifica se pelo menos uma das combinações vencedoras é 
                                                           completamente preenchida pela classe do jogador atual.*/
        return combination.every(index => { /*`every`: Verifica se todos os índices dentro de uma combinação específica 
                                               estão marcados com a classe do jogador atual. */
            return cells[index].classList.contains(classAtual); /*`index`: Representa a posição de uma célula no tabuleiro 
                                                                    que está sendo verificada. */
        });
    });
} 

//5° Função que mostra uma mensagem de vitória ou empate e reinicia o jogo
function endGame(draw) {
    if(draw) {
        alert('Empate!')
    } else {
        alert(`${o_player ? 'O' : 'X'} Venceu!`);
    }
    startGame();
}

//6° Função que verifica se está empatado
function isDraw() {  
    return [...cells].every(cell => { /*O operador spread (...) converte a NodeList `cells` em um array regular. O método 
                                        `every` verifica se todas as células do tabuleiro estão marcadas.*/
        return cell.classList.contains(o_class) || cell.classList.contains(x_class); /* verifica se a célula foi marcada por 
        um dos jogadores ( X ou O) */
    }); 
}

function swapPlayer() { //4° Alterna a variável o_player para trocar a vez entre os jogadores.
    o_player = !o_player; //Inverte o valor atual de o_player. Se o_player era false, ele se torna true, e vice-versa. Isso faz com que os turnos alternem entre os jogadores "X" e "O".Se o_player é true, o próximo jogador a jogar será o X. Se for false, o próximo será o O.
}

startGame();

restartButton.addEventListener('click', startGame);


 