
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
    }
    document.querySelector('main').append('container');
    console.log('colonne e righe');
  }
}


// function makeGrid(numb, numb_grid){
  
//   for(let i = 0; i < numb; i++ ) {
//     let square = document.createElement('div');
//     square.className = 'square';
//     square.innerHTML = `<span> ${i +1} </span>`;
//     square.style.width = `calc(100% / ${numb})`;
//     square.style.height = `calc(100% / ${numb})`;
    
//     // for(let k = 1; k < numb ; k++ ) {
//     //   let square = document.createElement('div');
//     //   square.className = 'square';
//     //   square.style.width = `calc(100% / ${numb})`;
//     //   square.style.height = `calc(100% / ${numb})`;
//     //   numb_grid.append(square);
//     //   // square.innerHTML = `<span> ${i+1} </span>`;
//     // }
//     numb_grid.append(square);
//   }
//   console.log('colonne e righe');
// }



