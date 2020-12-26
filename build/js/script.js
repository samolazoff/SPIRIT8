// smooth scrolling


const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    
    const blockID = anchor.getAttribute('href').substr(1)
    
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}

slider mot

let btnMot=document.getElementsByClassName('square');
    blockMot=document.getElementsByClassName('mot-content');

btnMot[0].onclick=function(){
  blockMot[0].style.display='flex';
  blockMot[1].style.display='none';
  blockMot[2].style.display='none';
  btnMot[0].style.backgroundColor='#fcac45';
  btnMot[1].style.backgroundColor='#ffffff';
  btnMot[2].style.backgroundColor='#ffffff';
}
btnMot[1].onclick=function(){
  blockMot[1].style.display='block';
  blockMot[1].style.display='flex';
  blockMot[0].style.display='none';
  blockMot[2].style.display='none';
  btnMot[1].style.backgroundColor='#fcac45';
  btnMot[0].style.backgroundColor='#ffffff';
  btnMot[2].style.backgroundColor='#ffffff';
}
btnMot[2].onclick=function(){
  blockMot[2].style.display='block';
  blockMot[2].style.display='flex';
  blockMot[0].style.display='none';
  blockMot[1].style.display='none';
  btnMot[2].style.backgroundColor='#fcac45';
  btnMot[0].style.backgroundColor='#ffffff';
  btnMot[1].style.backgroundColor='#ffffff';
}
    
slider work


const btnsStructure=document.querySelectorAll('.work__btn');
const photoBlock=document.querySelector('.work-photo');
const allPhoto=photoBlock.children;
const arrows=document.querySelectorAll('.arrow__btn');
let i=0;
console.log(allPhoto.length)
console.log(arrows)

const clickLeft = ()=> i!=0?i--:i=0;
const clickRight = ()=> i!=allPhoto.length?i++:i=allPhoto.length;
arrows.forEach(arrow=>{
  arrow.addEventListener('click',()=>{
    switch(arrow.id){
      case 'left': clickLeft();
        console.log(i)
        break;
      case 'right': clickRight();
        console.log(i);
        break;
    }
    for(let x=0; x<allPhoto.length; x++){
      x!=i?allPhoto[x].className='work-content-block':allPhoto[x].className='work-content-block block__active_ph';
    }
  })
})

