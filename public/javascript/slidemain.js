window.addEventListener('load', () => {
  if (window.innerWidth <= 800) {
      let sliderContainer = document.querySelector('.dspl-sld1 .section');
      sliderContainer.classList.add('displaymode-n');
  }
  else {
    let swiffySlider = document.querySelector('.swiffy-slider');
    swiffySlider.style.display = 'none';
  }
});
