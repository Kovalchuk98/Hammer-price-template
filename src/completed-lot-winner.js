import '../src/assets/scss/completed-lot-winner.scss';
import '../src/assets/scss/scaffolding.scss';
import '../src/assets/js/scripts.js';


let favbtn = document.querySelector(".favorite-btn");
let favbtntd = document.querySelector(".lot_title .favorite-btn");

favbtn.addEventListener("click",()=>{
  favbtn.classList.toggle('favorite-btn-click');
});
favbtntd.addEventListener("click",()=>{
  favbtntd.classList.toggle('favorite-btn-click');
  });

