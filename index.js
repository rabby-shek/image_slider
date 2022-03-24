// var indexValue = 1;
// showImg(indexValue);
// function btm_slide(e){showImg(indexValue = e);}
// function side_slide(e){showImg(indexValue += e);}
// function showImg(e){
//   var i;
//   const img = document.querySelectorAll('img');
//   const slider = document.querySelectorAll('.btm-slides span');
//   if(e > img.length){indexValue = 1}
//   if(e < 1){indexValue = img.length}
//   for(i = 0; i < img.length; i++){
//     img[i].style.display = "none";
//   }
//   for(i = 0; i < slider.length; i++){
//     slider[i].style.background = "rgba(255,255,255,0.1)";
//   }
//   img[indexValue-1].style.display = "block";
//   slider[indexValue-1].style.background = "white";
// }





// coding with nick

const body = document.querySelector('.slider-container');
const slides = document.querySelectorAll('.slide')
const leftBtn = document.getElementById('left')
const rightBtn = document.getElementById('right')

let activeSlide = 0

rightBtn.addEventListener('click', () => {
  activeSlide++

  if (activeSlide > slides.length - 1) {
    activeSlide = 0
  }

  setBgToBody()
  setActiveSlides()
})


leftBtn.addEventListener('click', () => {
  activeSlide--

  if (activeSlide < 0 ) {
    activeSlide = slides.length - 1
  }

  setBgToBody()
  setActiveSlides()
})

setBgToBody()


function setBgToBody() {
  body.style.backgroundImage = slides[activeSlide].style.backgroundImage
}

function setActiveSlides() {
  slides.forEach((slide) => slide.classList.remove('active'))

  slides[activeSlide].classList.add('active')
}