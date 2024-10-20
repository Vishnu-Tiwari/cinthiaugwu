// cursor follow animation
document.addEventListener("mousemove",(e)=>{
    gsap.to(".cursor-follow",{
        top: e.y,
        left: e.x,
        ease: "power3.out",
        opacity: 1
    })
})
document.addEventListener("mouseleave",(e)=>{
    gsap.to(".cursor-follow",{
        opacity: 0
    })
})

// product designer area animation
gsap.from(".navbar-brand, .nav-link, .product-designer h1, .product-designer p, .product-designer .bottom-txt div",{
    opacity: 0,
    y: "50%",
    duration: 0.5,
    stagger: 0.1
})


// card image move animation
document.querySelectorAll('.card').forEach((elem)=>{
    var rotate=0
    var diff=0
    elem.addEventListener("pointermove",(det)=>{
        rect=elem.getBoundingClientRect()
        x=det.x-rect.left;
        y=det.y-rect.top,
        diff= det.x-rotate
        rotate=det.x
        gsap.to(elem.querySelector("img"),{
            top: y,
            left: x,
            opacity: 1,
            duration: 0.5,
            rotate: gsap.utils.clamp(-20,20,diff)
        })
        gsap.to(".cursor-follow",{
            mixBlendMode: 'normal'
        })
    })
    elem.addEventListener("pointerleave",(det)=>{
        gsap.to(elem.querySelector("img"),{
            opacity: 0
        })
        gsap.to(".cursor-follow",{
            mixBlendMode: 'difference'
        })
    })
})

