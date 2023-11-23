

var slideshows = document.querySelectorAll('[data-component="slideshow"]');

// Aplica a todas as apresentações de slides que você define com o HTML escrito
slideshows.forEach(initSlideShow);

function initSlideShow(slideshow) {

  var slides = document.querySelectorAll(`#${slideshow.id} [role="list"] .slide`); // Obter um array de slides

  var index = 0, time = 5000;
  slides[index].classList.add('active');

  setInterval(() => {
    slides[index].classList.remove('active');

    //Passar por cada slide, incrementando o índice
    index++;

    // Ao passar por todos os slides, reiniciar o índice para exibir o primeiro slide e iniciar novamente
    if (index === slides.length) index = 0;

    slides[index].classList.add('active');

  }, time);
}

window.onload = function produt() {
  let but = document.getElementById('sese')

  but.onclick = function () {
    window.scroll({
      top: 650,
      behavior: "smooth",
    });
  }
}