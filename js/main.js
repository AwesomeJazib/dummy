


//Swiper carosul coding





var slider1 = new Swiper('.swiper-container.slider1', {
    effect: 'slide',
    autoWidth: true,
    // slidesPerView: 1,
    slidesPerView: 'auto',
    spaceBetween: 10,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,


    },

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

  
    
    scrollbar: {
      el: '.swiper-scrollbar',
    },
});






var slider2 = new Swiper ('.swiper-container.slider2',{
    effect: 'slide',
    slidesPerView: 3,
    spaceBetween: 10,
    loop: true,
    
    pagination: {
      el: '.swiper-pagination',
    },
    
    

    scrollbar: {
      el: '.swiper-scrollbar',
    },


    breakpoints: {
        // 640: {
        //   slidesPerView: 2,
        //   spaceBetween: 20,
        // },
        768: {
          slidesPerView: 4,
          spaceBetween: 15,
        },
        1024: {
          slidesPerView: 5,
          spaceBetween: 10,
        },
      },
    scrollbar: {
      el: '.swiper-scrollbar',
    },
});






  //swiper carosul coding ends here
  
  




let nav_logo = document.getElementById('nav-logo');
let siteContantRight = document.getElementById('site-contant-right');

let content_left = document.getElementById('content-left');
let side_ul = document.getElementById('side-ul');
let nav_remove = document.getElementById('nav-remove');



function myFunction(x) {
    if (x.matches) { // If media query matches

        nav_logo.addEventListener('click', function(){
          
            content_left.classList.toggle('nav_toggle-a');
            content_left.classList.remove('nav_toggle');
        })
   
    } else {
        nav_logo.addEventListener('click', function(){
          content_left.classList.remove('nav_toggle-a');
            content_left.classList.toggle('nav_toggle');
        })
    }
  }
  
  var x = window.matchMedia("(min-width: 992px)")

  console.log(x)
  myFunction(x) // Call listener function at run time
  x.addListener(myFunction) // Attach listener function on state changes


  let searchBtn = document.getElementById('search-btn');
  let mid_nav = document.getElementById('mid-nav');
  let search_audio = document.getElementById('search-audio');
  let search_btnResponcive = document.getElementById('search-btn-responcive')
  let search_btnBack = document.getElementById('search-btn-back')
  
  searchBtn.addEventListener('click', function(){
    mid_nav.classList.add('nav_mid-toggle');
})

search_btnResponcive.addEventListener('click', function(){
    mid_nav.classList.remove('nav_mid-toggle');
})





function myNavFunction(y) {
    if (y.matches) { // If media query matches

        searchBtn.addEventListener('click', function(){
            mid_nav.classList.add('nav_toggle-b');
            mid_nav.classList.remove('nav_mid-toggle');
        })
        

    } else {
        searchBtn.addEventListener('click', function(){
            mid_nav.classList.remove('nav_toggle-b');
            mid_nav.classList.add('nav_mid-toggle');
        })

        search_btnBack.addEventListener('click', function(){
            mid_nav.classList.remove('nav_mid-toggle');
        })
    }
  }
  
  var y = window.matchMedia("(min-width: 768px)")

  console.log(y)
  myNavFunction(y) // Call listener function at run time
  y.addListener(myNavFunction) // Attach listener function on state changes





nav_remove.addEventListener('click', function(){
    content_left.classList.remove('nav_toggle');

})






let modal_section  = document.getElementById('modalSection');
let modal_close  = document.getElementById('modalClose');


window.onload = function(){
  setTimeout(function(){
    modal_section.classList.add("modal_block");
    document.getElementById("siteBody").style.overflowY = "hidden";

    modal_close.addEventListener('click', function(){
      modal_section.classList.remove("modal_block");
  
  })



  }, 3000)
}