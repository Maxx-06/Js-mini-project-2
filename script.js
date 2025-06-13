let rectangle = document.querySelector(".rectangle");

window.addEventListener("mousemove", (e) => {

   let posX = gsap.utils.mapRange(0, window.innerWidth, 100+rectangle.getBoundingClientRect().width/2, window.innerWidth - (100 + rectangle.getBoundingClientRect().width/2), e.clientX) 
   let posY = gsap.utils.mapRange(0, window.innerHeight, 100+rectangle.getBoundingClientRect().height/2, window.innerHeight - (100 + rectangle.getBoundingClientRect().height/2), e.clientY) 
   console.log(posX)
  gsap.to(rectangle, {
    left: posX,
    top: posY,
    ease: Power3,
  });
});
