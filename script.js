console.log('this is a row of columns, the columns run vertically and the rows runs horizontally')
console.log('the grid is made from top to bottom and left to right')
console.log('not left to right, and top to bottom')

const gridContainer = document.querySelector('.grid-container');

function createGrid(sqrNum) {
  // creates 16 rows of 16 columns of boxes

  //loop to put the columns into a row 
  for (let i = 0; i < sqrNum; i++) {
    let columnOfBoxes = document.createElement('div');
    columnOfBoxes.className = "column";

    // this whole loop creates 16 boxes then appends to a column
    for (let i = 0; i < sqrNum; i++) {
      let divy = document.createElement('div');
      divy.className = `gridboxes`;
      columnOfBoxes.appendChild(divy);
    }

    gridContainer.appendChild(columnOfBoxes);
  }
}


createGrid(16);

function addEvents() {
  let allboxes = document.querySelectorAll('.gridboxes');
  allboxes.forEach((box) => {
  
    box.addEventListener("mouseover", () => {
        box.classList.add('hovered')
      });
  
    });
}

addEvents();



let renderGridSize = document.querySelector('.renderGridsize');
let button = document.querySelector('.button');
let eraser = document.querySelector('.eraser');
let eraserOffbtn = document.querySelector('.eraseroff');
let eraserOff = true;

function changeGridSize() {
  let sqrNum = prompt('how many?','');
  if (sqrNum < 1 || sqrNum > 100) {
    return alert('no f u');
  }
  gridContainer.innerHTML = '';
  renderGridSize.innerText = `${sqrNum} X ${sqrNum}`
  createGrid(sqrNum);
  addEvents();
}

button.addEventListener('click', changeGridSize);
eraser.addEventListener('click', () => {
  eraserOff = false;
  let allboxes = document.querySelectorAll('.gridboxes');
  allboxes.forEach((box) => {
    
    box.addEventListener('mouseover', () => {
      box.classList.remove('hovered')
      
    })

  })
})
eraserOffbtn.addEventListener('click', () => {
  addEvents();
})