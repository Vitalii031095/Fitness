const burger = document.querySelector('.button-icon');
const menu = document.querySelector('.header__menu');
// const buttons = document.querySelectorAll('.popap-how__button');
const header = document.querySelector('.header');
const nav = document.querySelector('.header__menu');

burger.addEventListener('click', activ);
 function activ(el){
   burger.classList.toggle('activ');
  
      menu.classList.toggle('open');
      
      header.classList.toggle('.openBefor')

      // if(!nav.closest('.open')){
      //   console.log(125)
      //    burger.classList.remove('activ');
      // }
}




const swiper = new Swiper('.swiper', {
  // Optional parameters
  // direction: 'vertical',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

 

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

/*=============================================popap==============*/
window.addEventListener('click', opap);

function opap(e){
  const popUp = e.target;

  if(popUp.closest('.popap-how__button')){
    const parentpopUp = popUp.parentNode;
    console.log(parentpopUp);
    const nextEl = parentpopUp.nextElementSibling;
    console.log(nextEl);
    if(nextEl.closest('.popap__text')){
     nextEl.classList.toggle('down')
    }
if(nextEl.closest('.down')){
 
  popUp.innerHTML = '-';
}else{
  popUp.innerHTML = '+';
}
  }
 
}
window.addEventListener('click', opapMenu);

function opapMenu(e){
  const yh = e.target;
  console.log(yh);
  if(yh.closest('.menu__link')){
   menu.classList.add('del')}
  // if(header.classList.contains('openBefor'))
  // {
  //   menu.classList.remove('del');
  //   burger.classList.remove('activ');
  // }
  else{
    menu.classList.remove('del')
    // burger.classList.toggle('activ')
  }
}

// if(popUp.closest('menu__link')){
//   console.log('I love Olia');
//    }