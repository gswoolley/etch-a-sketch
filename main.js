const container = document.querySelector('#container');
const clearBtn = document.querySelector('#clearBtn')
let numSquares = 256;

for(let i = 0; i < numSquares; i++){
    div = document.createElement('div');
    div.className= 'grid-element';
    container.appendChild(div);
}

document.querySelectorAll('#container').forEach(item => {
    item.addEventListener('mouseover', event => {
        event.target.style.background = 'pink'
    });
  })

  clearBtn.addEventListener('click', ()=>{
        console.log('Cleared');
  });
