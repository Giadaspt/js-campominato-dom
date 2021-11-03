
/*
creare la griglia
- creo una classe (square)
- faccio l'append al container
*/

const play = document.querySelector('.btn').addEventListener('click', function(){
  getSelectedValue();
})

let container = document.querySelector('.container');


function getSelectedValue() {
  let result = parseInt(document.getElementById("windowValue").value);
  console.log(result);
  let square;
  let squares;
  let squareRow;
  const BOMB_NUMB= 16;
  
  
  if (result == 1) {
    squares = 100;
    squareRow = 10;
  } else if (result == 2){
    squares = 81;
    squareRow = 9;
  } else if (result == 3){
    squares = 49;
    squareRow = 7;
  }

  let bombs = makeBombs();

  console.log('squares vale', squares);
  console.log(squareRow);

  document.querySelector('.container').innerHTML = '';
  makeGrid(container);

  function makeGrid() {

    //console.log('dentro makegrid il valore di bombs è', bombs);

    let container = document.querySelector('.container');
    
    for(let i = 1; i < squares +1; i++ ) {

      let square = document.createElement('div');
      square.className = 'square';
      square.innerHTML = `<span> ${i} </span>`;
      square.style.width = `calc(100% / ${squareRow})`;
      square.style.height = `calc(100% / ${squareRow})`;
      container.append(square);

      square.addEventListener('click', handleClick);
    }

    document.querySelector('main').append(container);
    console.log('colonne e righe');
  }
 
  function handleClick(event) {

    this.classList.add('clicked');
    let e = parseInt(event.target.innerText);
    console.log('ok',parseInt(event.target.innerText));
    console.log('bombs vale', bombs);

    if(bombs.includes(e)){
      this.classList.add('bombs');
      console.log('ok2');
      console.log('mina');
    
        
    }
  
  } 

  // console.log(handleClick);

  function makeBombs() {
    const bombs = [];

    while (bombs.length < BOMB_NUMB){
      const bomb = random_numb(1, squares);
      if (!bombs.includes(bomb)){
        bombs.push(bomb);
      }
    }

    console.log(bombs);
    console.log(BOMB_NUMB);

    return bombs;
  }


  function random_numb(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
  }


}