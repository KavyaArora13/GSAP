
function breaktext(){
var h1 = document.querySelector("h1")
var h1Text = h1.textContent
var splitedText = h1Text.split("")
var halfLength = splitedText.length/2
var clutter = ""

splitedText.forEach(function(elem,idx){
    if(idx<halfLength){
        clutter += `<span class='a'>${elem}</span>`
    }
    else{
        clutter += `<span class='b'>${elem}</span>`
    }
})
h1.innerHTML=clutter
}

breaktext()

gsap.from("h1 .a",{
    duration:0.8,
    stagger:0.15,
    y:50,
    opacity:0,
    delay:0.3
})

gsap.from("h1 .b",{
    duration:0.8,
    stagger:-0.15,
    y:50,
    opacity:0,
    delay:0.3
})