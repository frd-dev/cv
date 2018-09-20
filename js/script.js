/*jslint browser: true, devel: true, white: true, this: true */
/*global window, $ */



//  ========================================================== TYPEDJS

var typed = new Typed('.nom',{
    strings: ["Bentebiche Farid", "Développeur logiciel"],
    typeSpeed: 100,
    backSpeed: 50,
    backDelay: 1000,
    showCursor: true,
    cursorChar: '|',
    // smartBackspace: true,
    loop: true,
    loopCount: Infinity,

});


//  ========================================================== SCROLL ( pour que le menu descend "doucement" quand on click sur un bouton)
$(function(){

  $(".navbar-toggler a, footer a").on("click", function(event)
  {

    event.preventDefault();
    var hash = this.hash;

    $("body").animate({scrollTop: $(hash).offset().top} , 100   , function(){window.location.hash = hash;})

  });


})


$("#fleche").on('click', ()=>{

  TweenLite.to(window, 2, {scrollTo:0});
})