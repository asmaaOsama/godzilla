function toggleSidebar() {
	document.getElementById("side").classList.toggle("active");
};
var nav=document.getElementById("nav");
window.onscroll=function () {
	'use strict';
  if(window.pageYOffset>250){
  	nav.style.backgroundColor="#092a52";
  	// up.style.display='block';
  }
  else{
  	nav.style.backgroundColor='transparent';
  	// up.style.display='none';
  }
 };
// owl-carousel-for-team
 $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:3
        }
    }
});
 