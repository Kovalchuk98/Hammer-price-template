import '../src/assets/scss/index-favorites_empty.scss';
import '../src/assets/scss/scaffolding.scss';
import '../src/assets/js/scripts.js';



let menulink = document.querySelectorAll(".menu-list-item");
for(var i = 0; i < menulink.length; i++){
  menulink[i].addEventListener('click', () =>{
      this.classList.toggle('list-item-active');
    });
}

