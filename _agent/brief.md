# Goal Brief

**Type:** build_app

## Goal
Buat aplikasi tic-tac-toe interaktif dengan HTML, CSS, dan JavaScript

## Target User
Anyone wanting to play tic-tac-toe in a web browser

## Features
- Render a 3x3 grid of cells
- Start game with player X
- Alternate turns between X and O after each valid move
- Prevent overwriting occupied cells
- Detect a win (three marks in a row, column, or diagonal)
- Detect a draw (grid full with no winner)
- Display win/draw message
- Provide a restart button to reset the game

## Tech Stack
HTML5, CSS3, Vanilla JavaScript (no frameworks)

## File Structure
root folder containing index.html, style.css, script.js

## Acceptance Criteria
- [ ] 9 cells render in a 3x3 grid displayed on load
- [ ] Clicking an empty cell adds the current player's mark (X or O) and updates view
- [ ] Turn indicator updates to show the next player after each move
- [ ] Win detection stops game and shows winner message for any winning line
- [ ] Draw detection shows draw message when all cells filled with no winner
- [ ] Restart button clears board, resets turn to X, and clears messages