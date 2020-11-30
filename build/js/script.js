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

// slider mot

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
    
