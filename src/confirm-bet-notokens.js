import '../src/assets/scss/confirm-bet-notokens.scss';
import '../src/assets/scss/scaffolding.scss';
import '../src/assets/js/scripts.js';

let favbtn = document.querySelector(".favorite-btn");
favbtn.addEventListener("click",()=>{
  favbtn.classList.toggle('favorite-btn-click');
});

