
// OPEN MENU
let togglebtn = document.querySelector(".menu-toggle");
let menu = document.querySelector(".menu-auth");


// OPEN MODAL
let alertbtn = document.querySelector(".gift-td");
let iventbtn = document.querySelector(".gift-alert-td");
let alertmodal = document.querySelector(".modal");
let iventmodal = document.querySelector(".ivent-modal");

alertbtn.addEventListener("click", ()=>{
  alertmodal.classList.toggle('alert-modal-open');
  // iventmodal.classList.toggle('ivent-modal');
});

iventbtn.addEventListener("click", ()=>{
  iventmodal.classList.toggle('ivent-modal-open');
  // alertmodal.classList.toggle('modal');
});


togglebtn.addEventListener("click",()=>{
  togglebtn.classList.toggle('active');
  menu.classList.toggle('menu-auth-open');

  if(menu.classList.contains('menu-auth-open')){
    document.body.style.overflow = 'hidden';
  }
  else{
    document.body.style.overflow = 'auto';
  };
});


let howbtn = document.querySelector(".howlink");
howbtn.addEventListener("click",()=>{
  if(menu.classList.contains("menu-auth") || (menu.classList.contains("menu-notauth"))){
    menu.classList.add("menu-how");
  }
  else{
    menu.classList.add('menu-auth');
  }
});

let howback = document.querySelector(".how-back");
howback.addEventListener("click",()=>{
  if(menu.classList.contains("menu-how")){
    menu.classList.remove("menu-how");
  }
});




// MENU ACTIVE LINKS
let activelink = document.querySelectorAll(".menu-list .menu-list-item");
// activelink[0].classList.add("menu-list-item-active");
activelink.forEach(item => {
  item.addEventListener("click", () => {
    activelink.forEach(item => item.classList.remove("menu-list-item-active"));
    item.classList.add("menu-list-item-active");
  });
});

// MENU ACTIVE LINKS
let activelinkNA = document.querySelectorAll(".menu-list-notauth .menu-list-item_notauth");
// activelink[0].classList.add("menu-list-item-active");
activelinkNA.forEach(item => {
  item.addEventListener("click", () => {
    activelinkNA.forEach(item => item.classList.remove("menu-list-item-active"));
    item.classList.add("menu-list-item-active");
  });
});



let notauthbtn = document.querySelector(".exit");
notauthbtn.addEventListener("click",()=>{
  // notauthbtn.classList.toggle('menu-notauth');
  if(menu.classList.contains('menu-auth')){
    menu.classList.add('menu-notauth');
    // bd.setAttribute('overflow: hidden');
    // menu.classList.remove('menu-auth');
  }
  else{
    menu.classList.add('menu-auth');
  }
});


