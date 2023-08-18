const swiper_main = new Swiper('.mySwiper', {
        direction: "vertical",
        speed: 800,
        mousewheel: {
          invert: false, // Если true, инвертирует направление прокрутки
        },
    });

const swiper2 = new Swiper('.mySwiper2', {
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
    });

swiper2.on('slideChange', function () {
      const activeIndex1 = swiper2.activeIndex;
      for (let i = 1; i <= 5; i++) {
        $('.list_'+[i]+'').removeClass().addClass('list_'+[i]+'');
      }
      if (activeIndex1 === 0) {
        for (let i = 1; i <= 5; i++) 
          $('.list_'+[i]+'').addClass('active_1');
      } else if (activeIndex1 === 1) {
        for (let i = 1; i <= 5; i++) 
          $('.list_'+[i]+'').addClass('active_2');
      } else if (activeIndex1 === 2) {
        for (let i = 1; i <= 5; i++) 
          $('.list_'+[i]+'').addClass('active_3');
      }
    });

swiper_main.on('slideChange', function () {
      const activeIndex2 = swiper_main.activeIndex;
      const activeIndex1 = swiper2.activeIndex+1;
      let mass_for_anim = [];
      if (activeIndex1 === 1) {
          mass_for_anim = ["image_water_sprite", "lemon_1", "lemon_2", "FANTA", "SPRITE", "LIPTON"];
        } else if (activeIndex1 === 2) {
          mass_for_anim = ["image_water_lipton", "peach_1", "peach_2", "FANTA", "LIPTON", "SPRITE"];
        } else if (activeIndex1 === 3) {
          mass_for_anim = ["image_water_fanta", "orange_1", "orange_2", "SPRITE", "FANTA", "LIPTON"];
        }
      for (let i = 1; i <= 5; i++) 
        $('.list_'+[i]+'').removeClass().addClass('list_'+[i]+'');
      for (let i = 0; i < 3; i++) 
        $('.'+mass_for_anim[i]+'').removeClass().addClass(''+mass_for_anim[i]+'');
      
      
      
      if (activeIndex2 === 0) {
        setTimeout(function() {
          for (let i = 0; i < 3; i++) 
            $('.'+mass_for_anim[i]+'').appendTo('.slide_'+activeIndex1+'');
        }, 1450);
        for (let i = 1; i <= 5; i++) 
          $('.list_'+[i]+'').addClass('active_'+activeIndex1+''); 
        swiper2.autoplay.start();
      } else if (activeIndex2 === 1) {
          swiper2.autoplay.stop();
          animation_2(mass_for_anim);
      } else if (activeIndex2 === 2) {
          animation_3(mass_for_anim);
      }
    });

function animation_2(mass) {
  if ($('.lemon_slide13').hasClass('active_13')) {
    $('.lemon_slide13').removeClass().addClass('lemon_slide13');
  }
  $('#h1_slide_12').text(''+mass[4]+'');
  const element = $('.'+mass[0]+'');
  const container = element.closest('.leasts');
  if (container.length == 0) {
    for (let i = 0; i < 3; i++) 
      $('.'+mass[i]+'').appendTo('.leasts');
  } 
  for (let i = 1; i <= 5; i++) 
        $('.list_'+[i]+'').addClass('active_12');    
  setTimeout(function() {
    for (let i = 0; i < 3; i++) 
      $('.'+mass[i]+'').addClass('active_12');
  }, 50);
}

function animation_3(mass) {
  if (mass[4] == "SPRITE") {
    $("#img1_lem_1").attr("src", "images/fanta.png");
    $("#img2_lem_1").attr("src", "images/peace_of_orange.png");
    $("#img1_lem_2").attr("src", "images/lipton.png");
    $("#img2_lem_2").attr("src", "images/peach.png");
    $('.lemon_slide13').addClass('active_13');
  } else if (mass[4] == "LIPTON") {
    $("#img1_lem_1").attr("src", "images/fanta.png");
    $("#img2_lem_1").attr("src", "images/peace_of_orange.png");
    $("#img1_lem_2").attr("src", "images/sprite.png");
    $("#img2_lem_2").attr("src", "images/lemon2.png");
  } else if (mass[4] == "FANTA") {
    $("#img1_lem_1").attr("src", "images/sprite.png");
    $("#img2_lem_1").attr("src", "images/lemon2.png");
    $("#img1_lem_2").attr("src", "images/lipton.png");
    $("#img2_lem_2").attr("src", "images/peach.png");
  }
    for (let i = 1; i < 4; i++) {
      $('.lemonade_'+[i]+'').removeClass().addClass('lemonade_'+[i]+'');
      $('.lemonade_'+[i]+'').addClass(''+mass[i+2]+'');
      $('.lem_text_'+[i]+'').text(''+mass[i+2]+'');
      $('.'+mass[i-1]+'').addClass('active_13');
    }
    for (let i = 1; i <= 5; i++) 
      $('.list_'+[i]+'').addClass('active_13');
      
  }