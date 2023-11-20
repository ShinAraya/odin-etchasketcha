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
        box.style.backgroundColor = `black`
      });
  
    });
}
function removeEvents() {
  let allboxes = document.querySelectorAll('.gridboxes');
  allboxes.forEach((box) => {
  
    box.addEventListener("mouseover", () => {
        box.style.backgroundColor = 'white';
      });
  
    });
}

addEvents();

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


let renderGridSize = document.querySelector('.renderGridsize');
let button = document.querySelector('.button');
let eraser = document.querySelector('.eraser');
let PenOn = document.querySelector('.eraseroff');
let eraserOff = true;
let eraseAll = document.querySelector('.resetdraw');

button.addEventListener('click', changeGridSize);


eraser.addEventListener('click', () => {
  removeEvents();
})
PenOn.addEventListener('click', () => {
  addEvents();
})
window.addEventListener('keydown', (event) => {
  if (event.key === 'p') {
    addEvents();
  }
})
window.addEventListener('keydown', (event) => {
  if (event.key === 'e') {
    removeEvents();
  }
})


eraseAll.addEventListener('click', () => {
  let allboxes = document.querySelectorAll('.gridboxes');
  allboxes.forEach((box) => {
    box.style.backgroundColor = 'white';
  })
})

let r = document.querySelector(':root');
let input = document.querySelector('.input');

input.addEventListener('keydown', (event) => {

      if (event.key === 'Enter') {
        let allboxes = document.querySelectorAll('.gridboxes');
        allboxes.forEach((box) => {
          box.addEventListener('mouseover', () => {
            box.style.backgroundColor = `${input.value}`;
          })
        })

}})


let rainbow = () => {
    return "#" + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0').toUpperCase();
}

let rainbowbtn = document.querySelector('.rainbow');

rainbowbtn.addEventListener('click', () => {
  let allboxes = document.querySelectorAll('.gridboxes');
  allboxes.forEach((box) => {
    box.addEventListener('mouseover',() => {
      box.style.backgroundColor = `${rainbow()}`;
    })
    })
})
