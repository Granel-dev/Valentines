let yes = document.querySelector('.yes')
let noBtn = document.querySelector('.no')
let size = 200;
let maxwidth= 1000;
let maxHeight = 1000;
let height = 200;
let mar = 50;
let marmax = 600;
let font = 20;
let fontmax = 300;

noBtn.addEventListener('click',function(big){
  if(big.target.className == 'no'){
    if(size != maxwidth){
      size += 20
    }
    if(height != maxHeight){
      height += 20
    }
    if(mar != marmax){
      mar += 50
    }
    if(font != fontmax){
      font += 20
    }
    yes.style.width = size + 'px';
    yes.style.height = height + 'px';
    yes.style.fontSize = font + 'px';
    yes.style.paddingTop = mar + 'px';
    
  }
});
let yeah = document.querySelector('.yeah')
let img = document.querySelector('.img')
yes.addEventListener('click',function(change){
  if(change.target.className == 'yes'){
   img.src = 'img/Yay.gif';
   yeah.innerHTML = 'I Love uuuuuu';
   alert('Sunduin kita sa feb 14😍😍');
  }
});

document.addEventListener('DOMContentLoaded', init);

function init() {
  let query = window.matchMedia("(max-width: 360px)");
  if(query.matches){
   let yes = document.querySelector('.yes')
let noBtn = document.querySelector('.no')
let size = 100;
let maxwidth= 300;
let maxHeight = 500;
let height = 100;
let mar = 20;
let marmax = 600;
let font = 20;
let fontmax = 300;

noBtn.addEventListener('click',function(big){
  if(big.target.className == 'no'){
    if(size != maxwidth){
      size += 50
    }
    if(height != maxHeight){
      height += 20
    }
    if(mar != marmax){
      mar += 50
    }
    if(font != fontmax){
      font += 20
    }
    if(size == maxwidth, height == maxHeight){
      let no = document.querySelector('.no')
      no.style.display = 'hidden';
    };
    yes.style.width = size + 'px';
    yes.style.height = height + 'px';
    yes.style.fontSize = font + 'px';
    yes.style.paddingTop = mar + 'px';
    
  }
});
}};