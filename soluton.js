const boxes=document.querySelector('.box');
const resetbtn=document.querySelector('.reset');

let turn='X';

let board=Array(9).fill(null);

const winPatterns = [
  [0,1,2],[3,4,5],[6,7,8], 
  [0,3,6],[1,4,7],[2,5,8], 
  [0,4,8],[2,4,6]      
];

function checkWinner(){
    for(let pattern of winPatterns){
        const[a,b,c]=pattern;
        if(board[a]&&board[a]==board[b]&&board[b]==board[c]){
            alert(`${board[a]} Wins!`);
            boxes.forEach(box => box.disabled = true);
        }
        if (!board.includes(null)) {
        alert('Draw!');
        }
    }
}

boxes.forEach((box,index)=>{
    box.addEventListener('click', () => {
    if (!board[index]) {
      box.textContent = turn;
      board[index] = turn;
      checkWinner();
      turn = turn === 'X' ? 'O' : 'X';
    }
  });
});

resetbtn.addEventListener('click',()=>{
    board.fill(null);
    boxes.forEach(box=>{
        box.textContent=' ';
        box.disabled=false;
    });
    turn='X';
});
