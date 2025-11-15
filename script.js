const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

// var a = document.querySelector('#elem1')
// var abc = a.getAttribute("data-image");
// console.log(abc)

function page3Animation(){
  var elemC = document.querySelector("#elem-container")
var fixed = document.querySelector("#fixed-image")
elemC.addEventListener("mouseenter", function(){
    fixed.style.display = "block";
})
elemC.addEventListener("mouseleave", function(){
    fixed.style.display = "none";
})

// var elem1 = document.querySelector("#elem1")
// elem1.addEventListener("mouseenter", function(){
//     var image = elem1.getAttribute("data-image")
//     fixed.style.backgroundImage = `url(${image})` //template litralas this ${}
// })

var elems = document.querySelectorAll(".elem")
  elems.forEach(function(e){
    e.addEventListener("mouseenter", function(){
        console.log(e);
        var image = e.getAttribute("data-image")
        fixed.style.backgroundImage = `url(${image})`
    })
  })
}

  var page3img = document.querySelector("#page3-image")
  var desc = document.querySelector("#desc")
  var active= document.querySelectorAll(".active")
      active.forEach(function(e){
        e.addEventListener("click", function(){
            var data = e.getAttribute("data-img")
            page3img.setAttribute("src", data)
            var dataDesc = e.getAttribute("data-desc")
            desc.innerHTML = dataDesc
        })
      })

      const color = document.querySelectorAll(".active a")

      color.forEach(t => {
        t.addEventListener("click", () =>{
            color.forEach(x => {
                x.style.color = "#504A45"
                x.style.paddingLeft = "2vw"
            })
            t.style.color = "white"
            t.style.paddingLeft = "0"
        });
      });
    function swiperAnimation(){
      var swiper = new Swiper(".mySwiper", {
      slidesPerView: "auto",
      centeredSlides: false,
      spaceBetween: 100,
    });
    }
    swiperAnimation();
    page3Animation();

     var loader = document.querySelector("#loader")
    setTimeout(function(){
          loader.style.top = "-100%"
    },4000)