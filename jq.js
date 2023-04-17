let menu=document.querySelector('.full-menu');
document.querySelector('.main-menu'). onclick=()=>{
    menu.classList.toggle('active');
}
document.querySelector('#close-btn').onclick=()=>{
    menu.classList.remove('active');
}

 let slide=document.querySelectorAll('.slide-home .slide');
 let index=0;
function next(){
     slide[index].classList.remove('active');
     index=(index+1)% slide.length;
     slide[index].classList.add('active');
 }
 function pre(){
     slide[index].classList.remove('active');
     index=(index-1+slide.length)% slide.length;
     slide[index].classList.add('active');
}
//  setInterval(next,8000);	

