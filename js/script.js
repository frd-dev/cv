/*jslint browser: true, devel: true, white: true, this: true */
/*global window, $ */



//  ========================================================== TYPEDJS

var typed = new Typed('.nom',
{
    strings: ["Bentebiche Farid ^2000", "Développeur Web ^2000"],
    typeSpeed: 50,
    backSpeed: 50,
    backDelay: 10,
    showCursor: false,
    cursorChar: '|',
    autoInsertCss: false,
    loop: true,
    loopCount: Infinity

});


//  ========================================================== SCROLL ( pour que le menu descend "doucement" quand on click sur un bouton)



$("#fleche").on('click', function (){

  TweenLite.to(window, 2, {scrollTo:0});
});

$("#abouts").on('click', function (){

  TweenLite.to(window, 2, {scrollTo:0});
});

$("#skill").on('click', function (){

  TweenLite.to(window, 2, {scrollTo:"#skills"});
});

$("#experiences").on('click', function (){

  TweenLite.to(window, 2, {scrollTo:"#experience"});
});

$("#educations").on('click', function(){

  TweenLite.to(window, 2, {scrollTo:"#education"});
});

$("#portfolios").on('click', function(){

  TweenLite.to(window, 2, {scrollTo:"#portfolio"});
});

// $("#contacts").on('click', function(){

//   TweenLite.to(window, 2, {scrollTo:"#contact"});
// });
