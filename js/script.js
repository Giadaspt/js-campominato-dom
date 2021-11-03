
/*
creare la griglia
- creo una classe (square)
- faccio l'append al container
*/

const play = document.querySelector('.btn').addEventListener('click', function(){
  getSelectedValue();
})

let container = document.querySelector('.container');


function getSelectedValue(){
  let result = parseInt(document.getElementById("windowValue").value);
  console.log(result);
  
  let squares;
  let squareRow;


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

  console.log(squares);
  console.log(squareRow);

  document.querySelector('.container').innerHTML = '';
  makeGrid(container);

  function makeGrid(){

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

  function handleClick(event){
    if (this !== random_numb()){
      this.classList.add('clicked');
    } else {
      this.classList.add('bombs');
    }

    console.log(event.target.innerText);

  }
  // console.log(handleClick);

  const bombNumb = 16;
  let bombs = makeBombs();

  function makeBombs() {
    const bombs = [];
    
    for (let i = 1; i <= bombNumb; i++ ){
      const bomb = random_numb(1, squares);
      
      if (bombs.includes(bomb)){
        i--;
      } else{
        bombs.push(bomb);
      }
    }
    console.log(bombs);
    console.log(bombNumb);


  }


  function  random_numb(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }


}


