/* Seleção de todos os elementos da célula */
const cells = document.querySelectorAll('[data-cell]');
const tabuleiro = document.getElementById('tabuleiro');
const restartButton = document.getElementById('restartButton');

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