gsap.registerPlugin(ScrollTrigger);


let ai1 = gsap.from('.pop1', {y:+250, duration: 1})
let ai2 = gsap.from('.pop2', {y:+250, duration: 1, delay:.6})
let ai3 = gsap.from('.pop3', {y:+250, duration: 1, delay:2})
let ai4 = gsap.from('.pop4', {y:+250, duration: 1, delay:2})


ai1.yoyo(true).repeat(99).timeScale(.2).play(0.5)
ai2.yoyo(true).repeat(99).timeScale(.3).play(0.5)
ai3.yoyo(true).repeat(99).timeScale(.2).play(0.5)
ai4.yoyo(true).repeat(99).timeScale(.4).play(0.5)


const firstPage = ()=>{
    gsap.from('.left', {opacity: 0, duration: 1, x: -50})
    gsap.from('.rh', {opacity: 0, duration:1.3, x: +50})
    gsap.from('.bot', {opacity: 0, duration: 1.5, y: +50})
    gsap.from('.last', {opacity: 0, duration: 1, y: +50, delay: 1.2})
}

const secPage = ()=>{
    gsap.from('.left', {opacity: 0, duration: 1, x: -50, delay: .5})
    gsap.from('.rh', {opacity: 0, duration:1, x: +50, delay: .5})

    gsap.from('.top2', {opacity: 0, duration: 1, y: -150, delay: .3})
    gsap.from('.top', {opacity: 0, duration: 1, y: -150})

    gsap.from('.bot', {opacity: 0, duration: 1, y: +150, delay: .1})
    gsap.from('.bot2', {opacity: 0, duration: 1, y: +150, delay: .2})
    gsap.from('.bot3', {opacity: 0, duration: 1, y: +150, delay: .4})


    // gsap.from('.last', {opacity: 0, duration: 1, y: +50, delay: 1.2})
}

const thPage = ()=>{
    gsap.from('.left', {opacity: 0, duration: 1, x: -50, delay: .5})
    gsap.from('.rh', {opacity: 0, duration:1, x: +50, delay: .5})

    gsap.from('.top2', {opacity: 0, duration: 1, y: -150, delay: .3})
    gsap.from('.top', {opacity: 0, duration: 1, y: -150})

    gsap.from('.bot', {opacity: 0, duration: 1, y: +150, delay: .1})
    gsap.from('.bot2', {opacity: 0, duration: 1, y: +150, delay: .3})


    // gsap.from('.last', {opacity: 0, duration: 1, y: +50, delay: 1.2})
}


const forPage = ()=>{
    gsap.from('.rh1', {opacity: 0, duration:1, x: -150, delay: .1})
    gsap.from('.rh2', {opacity: 0, duration:1, x: -150, delay: .3})
    gsap.from('.rh3', {opacity: 0, duration:1, x: -150, delay: .5})
    gsap.from('.rh4', {opacity: 0, duration:1, x: -150, delay: .6})

    gsap.from('.top2', {opacity: 0, duration: 1, y: -150, delay: .3})
    gsap.from('.top', {opacity: 0, duration: 1, y: -150})

    gsap.from('.bot', {opacity: 0, duration: 1, y: +150, delay: .1})
    gsap.from('.bot2', {opacity: 0, duration: 1, y: +150, delay: .3})


    // gsap.from('.last', {opacity: 0, duration: 1, y: +50, delay: 1.2})
}

firstPage()

gsap.from('.bot1', {opacity: 0, duration: 1.5, y: +50})


const clicker = document.querySelector('.last')
const clicker2 = document.querySelector('.last2')
const clicker3 = document.querySelector('.last3')
const back = document.querySelector('.back')
const back2 = document.querySelector('.back2')
const back3 = document.querySelector('.back3')
const loader = document.querySelector('.loader')
const loader2 = document.querySelector('.loaderRh')
const p1 = document.querySelector('.s1')
const p2 = document.querySelector('.s2')
const p3 = document.querySelector('.s3')
const p4 = document.querySelector('.s4')

clicker.addEventListener('click', ()=>{
    loader.style.left=  0
    document.querySelector('.thepop').style.display = 'none'
    setTimeout(()=>{
        loader.style.left = "-100%"
        p1.style.display = "none"
        p2.style.display = "block"
            
        secPage()
    }, 1000)
})

clicker2.addEventListener('click', ()=>{
    loader.style.left=  0
    setTimeout(()=>{
        loader.style.left = "-100%"
        p2.style.display = "none"
        p3.style.display = "block"
        secPage()
    }, 1000)
})

clicker3.addEventListener('click', ()=>{
    loader.style.left=  0
    setTimeout(()=>{
        loader.style.left = "-100%"
        p3.style.display = "none"
        p4.style.display = "block"
        forPage()  
        document.querySelector('.thepop').style.display = 'block'
    }, 1000)
    
})

back.addEventListener('click', ()=>{
    loader2.style.right =  0
    setTimeout(()=>{
        loader2.style.right = "-100%"
        p2.style.display = "none"
        p1.style.display = "block"
        firstPage()
        document.querySelector('.thepop').style.display = 'block' 
    }, 1000)
})

back2.addEventListener('click', ()=>{
    loader2.style.right =  0
    setTimeout(()=>{
        loader2.style.right = "-100%"
        p3.style.display = "none"
        p2.style.display = "block"
        secPage()
    }, 1000)
})

back3.addEventListener('click', ()=>{
        document.querySelector('.thepop').style.display = 'none'

    loader2.style.right =  0
    setTimeout(()=>{
        loader2.style.right = "-100%"
        p4.style.display = "none"
        p3.style.display = "block"
        thPage()
    }, 1000)
})
