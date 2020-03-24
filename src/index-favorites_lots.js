import '../src/assets/scss/index-favorites_lots.scss';
import '../src/assets/scss/scaffolding.scss';
import '../src/assets/js/scripts.js';




const meters = document.querySelectorAll('svg[data-value] .meter');

meters.forEach( (path) => {
  // Get the length of the path
  let length = path.getTotalLength();

  // console.log(length) and hardcode the value for both stroke-dasharray & stroke-dashoffest styles
  // If unable to hardcode, set dynamically...
  // path.style.strokeDashoffset = length;
  // path.style.strokeDasharray = length;

  // Get the value of the meter
  let value = parseInt(path.parentNode.getAttribute('data-value'));
  // Calculate the percentage of the total length
  let to = length * ((100 - value) / 100);

  // Trigger Layout in Safari hack https://jakearchibald.com/2013/animated-line-drawing-svg/
  path.getBoundingClientRect();
  // Set the Offset
  path.style.strokeDashoffset = Math.max(0, to);  
});



let menulink = document.querySelectorAll(".menu-list-item");
for(var i = 0; i < menulink.length; i++){
  menulink[i].addEventListener('click', () =>{
      this.classList.toggle('list-item-active');
    });
}


