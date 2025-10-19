let mainBg = document.querySelector('.main');

setInterval(() => {
    mainBg.style.backgroundImage = "url(images/main_car_light.png)"
    
    setTimeout(() => {
        mainBg.style.backgroundImage = "url(images/main_car.png)"
    }, 1000);
}, 2200);

var swiper = new Swiper(".slider", {
    slidesPerView: 1,
    spaceBetween: 20,
    loop:true,
    grabCursor:true,
    centeredSlides:true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      991: {
        slidesPerView: 3,
      },
    },
  });
  function showCarInfo(brand) {
    // Masquer toutes les informations de voiture
    var carInfos = document.querySelectorAll('.car-info');
    carInfos.forEach(function(info) {
        info.style.display = 'none';
    });

    // Afficher les informations de la voiture correspondante
    var brandInfo = document.getElementById(brand + 'Info');
    brandInfo.style.display = 'block';
}