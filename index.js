const boxes = document.querySelectorAll('.box');
const resetBtn = document.querySelector('.reset');
const resultText = document.querySelector('.result');

let turn = 'X';
let board = Array(9).fill(null);

const winPatterns = [
  [0,1,2],[3,4,5],[6,7,8], 
  [0,3,6],[1,4,7],[2,5,8], 
  [0,4,8],[2,4,6]      
];

function checkWinner() {
  for (let pattern of winPatterns) {
    const [a, b, c] = pattern;
    if (board[a] && board[a] === board[b] && board[b] === board[c]) {
      resultText.textContent = `${board[a]} wins!`;
      boxes.forEach(box => box.disabled = true);
      return;
    }
  }
  if (!board.includes(null)) {
    resultText.textContent = 'Draw!';
  }
}

boxes.forEach((box, index) => {
  box.addEventListener('click', () => {
    if (!board[index]) {
      box.textContent = turn;
      board[index] = turn;
      checkWinner();
      turn = turn === 'X' ? 'O' : 'X';
    }
  });
});

resetBtn.addEventListener('click', () => {
  board.fill(null);
  boxes.forEach(box => {
    box.textContent = '';
    box.disabled = false;
  });
  turn = 'X';
  resultText.textContent = '';
});
