var img1 = "img/model1b.jpg";
var im1 = "img/model1f.jpg"
var img2 = "img/model2b.jpg";
var im2 = "img/model2f.jpg"
var img3 = "img/model3b.jpg";
var im3 = "img/model3f.jpg"
var pic1 = document.querySelector(".img1");
var pic2 = document.querySelector(".img2");
var pic3 = document.querySelector(".img3");

pic1.addEventListener("mouseover", function(){
  pic1.setAttribute("src", img1);
})

pic2.addEventListener("mouseover", function(){
  pic2.setAttribute("src", img2);
})

pic3.addEventListener("mouseover", function(){
  pic3.setAttribute("src", img3);
})


pic1.addEventListener("mouseout", function(){
  pic1.setAttribute("src", im1);
})

pic2.addEventListener("mouseout", function(){
  pic2.setAttribute("src", im2);
})

pic3.addEventListener("mouseout", function(){
  pic3.setAttribute("src", im3);
})






//   console.log(pic)
// for (var i = 0; i < pic.length; i++) {
//   console.log(pic[i])
//   pic[i].addEventListener("mouseover", togg(pic[i], arr[i]))
// }
//
// function togg(pic, img){
//   pic.setAttribute("src", img);
// }



$(function () {
    $(document).scroll(function () {
        var $nav = $("#mainNavbar");
        $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
    });
});









// for (var i = 0; i < pic.length; i++) {
//   console.log(pic[i]);
//
//   pic[i].addEventListener("click", function(){
//     // pic[i].setAttribute("src", arr[i]);
//     pic[i].style.background = arr[i]
//     console.log(pic[i]);
//   })};
