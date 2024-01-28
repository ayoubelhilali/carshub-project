let mainBg = document.querySelector('.main');

        setInterval(() => {
            mainBg.style.backgroundImage = "url(images/main_car_light.png)"
            
            setTimeout(() => {
                mainBg.style.backgroundImage = "url(images/main_car.png)"
            }, 1000);
        }, 2200);
