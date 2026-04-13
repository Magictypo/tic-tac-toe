// Game state
let currentPlayer = 'X';
let gameActive = true;
let gameState = ['', '', '', '', '', '', '', '', ''];

// DOM elements
let statusDisplay;
let resultDisplay;
let resetButton;
let cells;

// Winning conditions (8 lines)
const winningConditions = [
    [0, 1, 2], // Top row
    [3, 4, 5], // Middle row
    [6, 7, 8], // Bottom row
    [0, 3, 6], // Left column
    [1, 4, 7], // Middle column
    [2, 5, 8], // Right column
    [0, 4, 8], // Diagonal top-left to bottom-right
    [2, 4, 6]  // Diagonal top-right to bottom-left
];

// Initialize game
function handleCellClick(clickedCellEvent) {
    const clickedCell = clickedCellEvent.target;
    const clickedCellIndex = parseInt(clickedCell.getAttribute('data-index'));

    // Check if cell is already filled or game is over
    if (gameState[clickedCellIndex] !== '' || !gameActive) {
        return;
    }

    // Update game state
    gameState[clickedCellIndex] = currentPlayer;
    clickedCell.textContent = currentPlayer;

    // Check for win or draw
    checkResult();
}

function checkResult() {
    let roundWon = false;
    let winningLine = [];

    for (let i = 0; i < winningConditions.length; i++) {
        const [a, b, c] = winningConditions[i];
        const positionA = gameState[a];
        const positionB = gameState[b];
        const positionC = gameState[c];

        if (positionA === '' || positionB === '' || positionC === '') {
            continue;
        }

        if (positionA === positionB && positionB === positionC) {
            roundWon = true;
            winningLine = [a, b, c];
            break;
        }
    }

    if (roundWon) {
        statusDisplay.textContent = '';
        resultDisplay.textContent = `Player ${currentPlayer} Wins!`;
        resultDisplay.classList.add('win');
        gameActive = false;
        highlightWinningCells(winningLine);
        return;
    }

    // Check for draw (no empty strings in gameState)
    const roundDraw = !gameState.includes('');
    if (roundDraw) {
        statusDisplay.textContent = '';
        resultDisplay.textContent = "It's a Draw!";
        resultDisplay.classList.add('draw');
        gameActive = false;
        return;
    }

    // Continue game with next player
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    statusDisplay.textContent = `Player ${currentPlayer}'s Turn`;
}

function highlightWinningCells(winningLine) {
    winningLine.forEach(index => {
        cells[index].classList.add('winner');
    });
}

function handleRestartGame() {
    gameActive = true;
    currentPlayer = 'X';
    gameState = ['', '', '', '', '', '', '', '', ''];
    
    statusDisplay.textContent = `Player ${currentPlayer}'s Turn`;
    resultDisplay.textContent = '';
    resultDisplay.classList.remove('win', 'draw');
    
    cells.forEach(cell => {
        cell.textContent = '';
        cell.classList.remove('winner');
    });
}

// Initialize after DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Query cells after DOMContentLoaded
    statusDisplay = document.getElementById('status');
    resultDisplay = document.getElementById('result');
    resetButton = document.getElementById('reset');
    cells = document.querySelectorAll('.cell');
    
    // Verify cell count
    console.log('Cell query result count:', cells.length);
    console.log('Cell query returns 9 elements:', cells.length === 9);
    
    // Event listeners
    cells.forEach(cell => cell.addEventListener('click', handleCellClick));
    resetButton.addEventListener('click', handleRestartGame);
});
