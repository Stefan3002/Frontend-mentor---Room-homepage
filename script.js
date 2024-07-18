
(() => {

    // For mobile
    const screenWidth = window.innerWidth
    if(screenWidth < 600){
        const hamburger = document.querySelector('.main-nav-mobile')
        const hamburgerExtended = document.querySelector('.hamburger-extended')
        const desktopMenu = document.querySelector('.desktop-menu')
        const blur = document.querySelector('.blur')
        const closeHamburgerBtn = document.querySelector('.close-hamburger')
        desktopMenu.classList.add('not-visible')
        hamburger.classList.remove('not-visible')
        closeHamburgerBtn.addEventListener('click', () => {
            hamburgerExtended.classList.toggle('not-visible')
            blur.classList.toggle('not-visible')
        })
        hamburger.addEventListener('click',  () => {
            hamburgerExtended.classList.toggle('not-visible')
            blur.classList.toggle('not-visible')
        })
    }

    const changeSlides = (index, slides, activeSlide) => {
        slides[index].classList.remove('not-visible')
        slides[index].classList.add('visible')
        activeSlide.classList.add('not-visible')
        activeSlide.classList.remove('visible')
        const bgSection = document.querySelector('.main-nav')
        bgSection.style.background = `url('${slideData[index]}')`
        bgSection.style.backgroundRepeat = `no-repeat`
        bgSection.style.backgroundSize = `cover`
        bgSection.style.backgroundPosition = `center`
    }

    const slideData = ['../images/desktop-image-hero-1.jpg', '../images/desktop-image-hero-2.jpg', '../images/desktop-image-hero-3.jpg']
    const slides = document.querySelectorAll('.slide-section')
    let activeSlide = document.querySelector('.visible')
    let index = 0

    const leftBtns = document.querySelectorAll('.left-btn')
    for (let leftBtn of leftBtns)
        leftBtn.addEventListener('click', (e) => {
            e.preventDefault()

            activeSlide = document.querySelector('.visible')
            if (activeSlide.classList.contains('slide-1'))
                index = 2
            else if (activeSlide.classList.contains('slide-2'))
                index = 0
            else if (activeSlide.classList.contains('slide-3'))
                index = 1

            changeSlides(index, slides, activeSlide)

        })

    const rightBtns = document.querySelectorAll('.right-btn')
    for (let rightBtn of rightBtns)
        rightBtn.addEventListener('click', (e) => {
            e.preventDefault()

            activeSlide = document.querySelector('.visible')
            if (activeSlide.classList.contains('slide-1'))
                index = 1
            else if (activeSlide.classList.contains('slide-2'))
                index = 2
            else if (activeSlide.classList.contains('slide-3'))
                index = 0

            changeSlides(index, slides, activeSlide)
        })
})()