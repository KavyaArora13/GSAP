var tl = gsap.timeline()

tl.to("#box1",{
    x:1000,
    duration:2,
    delay:1,
    rotate:360
})

tl.to("#box2",{
    x:1000,
    duration:2,
    delay:1,
    borderRadius:"50%"
})

tl.to("#box3",{
    x:1000,
    duration:2
})