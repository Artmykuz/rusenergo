const mainSliderLeftButton = document.querySelector('.main-slidercontrol_prev')
const mainSliderRightButton = document.querySelector('.main-slidercontrol_next')
const mainSlider = document.querySelector('.main-slider__wrapper')
const mainSliderColumn = document.querySelectorAll('.main-slider__column')
const windowInnerWidth = window.innerWidth

var count = 0;
const scrollWidth = (window.innerWidth - document.body.clientWidth);

if(count == 0) mainSliderLeftButton.style.opacity = "0"
else {mainSliderLeftButton.style.opacity = "1"}

if (mainSliderRightButton) {
    mainSliderRightButton.addEventListener('click', function() {
        if (mainSlider) {
            if ((count >= 0 & count < 2)) {
                count += 1
                mainSlider.style.transform = `translateX(${count * -windowInnerWidth}` + 'px)'
                console.log(`translateX(${windowInnerWidth}` + 'px)')
                console.log(count)

                if(count != 0) mainSliderLeftButton.style.opacity = "1"
                else mainSliderLeftButton.style.opacity = "0"
                if(count >= 2) mainSliderRightButton.style.opacity = "0"
                else mainSliderRightButton.style.opacity = "1"
            }
        }
    }) 
}

if (mainSliderLeftButton) {
    mainSliderLeftButton.addEventListener('click', function() {
        if (mainSlider) {
            if ((count > 0 & count <= 2)) {
                count -= 1
                mainSlider.style.transform = `translateX(${count * -windowInnerWidth}` + 'px)'
                console.log(`translateX(${windowInnerWidth}` + 'px)')
                console.log(count)

                if(count != 0) mainSliderLeftButton.style.opacity = "1"
                else mainSliderLeftButton.style.opacity = "0"
                if(count >= 2) mainSliderRightButton.style.opacity = "0"
                else mainSliderRightButton.style.opacity = "1"
            }
        }
    }) 
}

if(mainSliderColumn) {
    mainSliderColumn.forEach((e) => {
        e.style.width = `${window.innerWidth}`
    })
}




const technic = document.querySelectorAll('.technic__content')
const technicClose = document.querySelectorAll('.technic__close')
const technicOpen = document.querySelectorAll('.technic__open')

if (technicClose) {
    technicClose.forEach((e) => {
        e.addEventListener("click", function () {
            technic.forEach((el) => {
                if(e.dataset.id == el.dataset.id) {
                    el.classList.remove('_active')
                    e.classList.remove('_active')
                    
                    technicOpen.forEach((elem => {
                        if(elem.dataset.id == e.dataset.id){
                            elem.classList.add('_active')
                        }
                    }))
                }
            });
        }); 

    })
}

if (technicOpen) {
    technicOpen.forEach((e) => {
        e.addEventListener("click", function () {
            technic.forEach((el) => {
                if(e.dataset.id == el.dataset.id) {
                    el.classList.add('_active')
                    e.classList.remove('_active')
                    
                    technicClose.forEach((elem => {
                        if(elem.dataset.id == e.dataset.id){
                            elem.classList.add('_active')
                        }
                    }))
                }
            });
        }); 

    })
}




const sliderLeftButton = document.querySelector('.slidercontrol_prev')
const sliderRightButton = document.querySelector('.slidercontrol_next')
const sliderPoint = document.querySelectorAll('.sliderpoint')
const slider = document.querySelector('.slider__wrapper')
const sliderColumn = document.querySelectorAll('.slider__column')

var sliderId = 0
var sliderCount = 0

sliderPoint.forEach((e) => {
    e.addEventListener('click', function() {

        sliderPoint.forEach((elem) => {
            elem.classList.remove('_active')
        })

        this.classList.add('_active')

        slider.style.transform = `translateX(${-this.dataset.id * 100}` + '%)'
        sliderCount = parseInt(this.dataset.id)
        console.log(sliderCount) 
        sliderColumn.forEach((el) => {
            if (sliderCount == el.dataset.id) {
                el.classList.add('_active')
            }
            else{
                el.classList.remove('_active')
            }
        })
    })
})


if (sliderLeftButton) {
    sliderLeftButton.addEventListener('click', function() {
        if(slider) {
            if (sliderCount > -1){
                sliderCount -= 1 
                console.log(sliderCount) 
                slider.style.transform = `translateX(${-sliderCount * 100}` + '%)'
            

            sliderColumn.forEach((e) => {
                if (e.dataset.id == sliderCount) {
                    e.classList.add('_active')
                }
                else{
                    e.classList.remove('_active')
                }
            })
            }

            sliderPoint.forEach((e) => {
                e.classList.remove('_active')
            })
            sliderPoint.forEach((e) => {
                if (e.dataset.id == sliderCount) {
                    e.classList.add('_active')
                }
            })
        }
    })
}
if (sliderRightButton) {
    sliderRightButton.addEventListener('click', function() {
        if(slider) {
            if (sliderCount < 1){
                sliderCount += 1
                console.log(sliderCount) 
                slider.style.transform = `translateX(${-sliderCount * 100}` + '%)'
            

            sliderColumn.forEach((e) => {
                if (e.dataset.id == sliderCount) {
                    e.classList.add('_active')
                }
                else{

                    e.classList.remove('_active')
                }
            })
            }

            sliderPoint.forEach((e) => {
                e.classList.remove('_active')
            })
            sliderPoint.forEach((e) => {
                if (e.dataset.id == sliderCount) {
                    e.classList.add('_active')
                }
            })
        }
    })

}

const technicTitle = document.querySelectorAll('.technic__title')
const modelPopup = document.querySelectorAll('.model__popup')
const modelPopupClose = document.querySelector('.model-popup__close')

if(technicTitle) {
    technicTitle.forEach((e) => {
        e.addEventListener('click', function() {
            modelPopup.forEach((el) => {
                if (el.dataset.id == e.dataset.id) {
                    el.classList.remove('_no-active')
                }
            })
        })
    })
}

/*if(modelPopupClose) {
    modelPopupClose.addEventListener('click', function() {
        modelPopup.classList.add('_no-active')
    })
}*/
