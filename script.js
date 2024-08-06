let csr = document.querySelector("#cursor")
let csr_bl = document.querySelector("#cursor_blur")


let xscale = 1
let yscale = 1
let xprev = 0
let yprev = 0

let timeout 

document.addEventListener("mousemove",function(dets){
    clearTimeout(timeout)
    // csr.style.left = dets.x+"px"
    // csr.style.top = dets.y+"px"
    csr_bl.style.left = dets.x-150+"px"
    csr_bl.style.top = dets.y-150+"px"

    let xdiff = dets.clientX - xprev
    let ydiff = dets.clientY - yprev

    xscale = gsap.utils.clamp(0.8,1.2,xdiff)
    yscale = gsap.utils.clamp(0.8,1.2,ydiff)

    xprev = dets.clientX
    yprev = dets.clientY

    csr.style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(${xscale}, ${yscale}) `

    timeout = setTimeout(function(){
        csr.style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(1,1) `
    },100)
    

})

 document.querySelectorAll(".elem").forEach(function(elem){

     var rotate = 0
     var diffrot = 0

     elem.addEventListener("mouseout",function(dets){
         gsap.to(elem.querySelector("img"),{
             opacity:0,
             ease: Power3,
             duration:0.5,
         })
     })

     elem.addEventListener("mousemove",function(dets){

         var diff = dets.clientY - elem.getBoundingClientRect().top;
         diffrot = dets.clientX - rotate
         rotate = dets.clientX

         gsap.to(elem.querySelector("img"),{
             opacity:1,
             ease: Power3,
             top: diff,
             left: dets.clientX,
             rotate: gsap.utils.clamp(-20,20,diffrot*0.5),
             
         })


     })

     elem.addEventListener("mouseleave",function(dets){
        gsap.to(elem.querySelector("img"),{
            opacity:0,
            rotate:0,
            diffrot:0,
            ease: Power4,
            duration:0.5,
        })
    })
 })

