$(document).ready(function (event) {
   $('.header__burger').click(function (event) {
     $('.header__burger, .menu, .menu-bg').toggleClass('active');
     $('body').toggleClass('lock');
     $('body').removeClass('lock1');
     $('body').removeClass('lock2');
     $('.menu-other, .menu-other-bg, .header__social, .menu-call, .header__call, .menu-call-bg').removeClass('active');
   });
   $('.menu__item, .menu-bg').click(function (event) {
      $('.header__burger, .menu, .menu-other, .menu-bg, .menu-call, .menu-call-bg').removeClass('active');
      $('body').removeClass('lock');
      $('body').removeClass('lock1');
      $('body').removeClass('lock2');
   });  
   $('.header__right .header__social').click(function (event) {
      event.preventDefault();
     $('.menu-other, .menu-other-bg, .header__social').toggleClass('active');
     $('body').toggleClass('lock1');
      $('.header__burger, .menu, .menu-bg, .menu-call, .header__call, .menu-call-bg').removeClass('active');
      $('body').removeClass('lock');
      $('body').removeClass('lock2');
   });
   $('.menu-other-bg').click(function (event) {
      $('.menu-other, .menu-other-bg, .header__social, .menu-call, .menu-call-bg').removeClass('active');
      $('body').removeClass('lock1');
      $('body').removeClass('lock');
      $('body').removeClass('lock2');
   });  
   $('.header__right .header__call').click(function (event) {
      event.preventDefault();
     $('.menu-call, .menu-call-bg, .header__call').toggleClass('active');
      $('body').toggleClass('lock2');
      $('.header__burger, .menu, .menu-bg, .menu-other-bg, .menu-other, .header__social').removeClass('active');
      $('body').removeClass('lock');
      $('body').removeClass('lock1');
   });
   $('.menu-call-bg').click(function (event) {
      $('.menu-call, .menu-call-bg, .header__call').removeClass('active');
      $('body').removeClass('lock2');
      $('body').removeClass('lock1');
      $('body').removeClass('lock');
   });  
   $('.cookies button, .cookies__container>img').click(function (event) {
      $('.to-up').addClass('newpos');
      $('.cookies').remove();
   });  
   
   $("input[type='tel']").mask("+7 (999) 999-99-99");
    $('.videos__slide').click(function (event) {
      $('.videos__slide').removeClass('activevideo');
      $(this).addClass('activevideo');
      $(this).closest('.videos__slider ').prev().find('p').html($(this).find('>p>b').text());
      $(this).closest('.videos__slider ').prev().find('>img:first-child').attr('src', $(this).find('.videos__preview img').attr('src'));
   });    
    $('.survey__btn').click(function (event) {
      event.preventDefault();
      $('.survey-popup').addClass('open');
      $('body').addClass('lock');
   });     
   $('.popup__close, .survey-popup__close1').click(function (event) {
      event.preventDefault();
      $('.survey-popup, .buy-popup').removeClass('open');
      $('body').removeClass('lock');
   });  
   $('a.survey-popup__btn').click(function (event) {
      $(this).closest('.survey-popup__body').removeClass('active');
      $(this).closest('.survey-popup__body').next().addClass('active');
   });   
   $('a.popup__btn').click(function (event) {
      $(this).closest('.buy-popup__body').removeClass('active');
      $(this).closest('.buy-popup__body').next().addClass('active');
   });   
   $('.survey-popup__back').click(function (event) {
      event.preventDefault();
      $(this).closest('.survey-popup__body').removeClass('active');
      $(this).closest('.survey-popup__body').prev().addClass('active');
   });        
    $('.main__card>a, .header__bottom-actions').click(function (event) {
      event.preventDefault();
      $('.buy-popup').addClass('open');
      $('body').addClass('lock');
   });     
     $(".survey-popup__input input").blur(function () {
       if ($(this).is(":invalid")) {
         $(this).addClass('invalid');
       }else{
          $(this).removeClass('invalid');
       }
     });
     $(".buy-popup__paywrapper-getcode input").keyup(function () {
       const substring = '_';
       if ($(this).val().indexOf(substring) == -1 && $(this).parent().next().find('>input').is(':checked')) {
         $(this).next().prop('disabled', false);
         $(this).addClass('border');
       }else{
          $(this).next().prop('disabled',true);
          $(this).removeClass('border');
       }
     });
     $(".buy-popup__content .popup__bottom-agree input").change(function () {
        $(".buy-popup__paywrapper-getcode input").trigger('keyup');
     });
     $(".buy-popup__paywrapper-getcode button").click(function (event) {
      event.preventDefault();
       $('.buy-popup__paywrapper-subtitle>span').text('Код выслан на номер:');
       $('.buy-popup__paywrapper-subtitle>b').text($(this).prev().val());
       $(this).closest('.buy-popup__paywrapper').find('.buy-popup__paywrapper-setcode').addClass('active');
       $(this).closest('.buy-popup__paywrapper').find('.buy-popup__paywrapper-retrycode>p').addClass('active');
        var spanTime = $('span[data-time]');
        var time = Number(spanTime.data('time'));
        var intrvl = setInterval(function() {
          if (time == 0) {
           clearInterval(intrvl);
           spanTime.text(time);
           time = Number(spanTime.data('time'));
           $('.buy-popup__paywrapper-retrycode>p').removeClass('active');
         $('.buy-popup__paywrapper-retrycode>a').addClass('active');

          }
         if(time < 10 && time > 0){
            spanTime.text('0'+time--);
         }else{
            spanTime.text(time--);
         }
        }, 1000);


       $(this).parent().next().remove();
       $(this).parent().remove();

     });
     $(".buy-popup__paywrapper-retrycode a").click(function (event) {
         $(this).removeClass('active');
         $(".buy-popup__paywrapper-retrycode p").addClass('active');
           var spanTime = $('span[data-time]');
           var time = Number(spanTime.data('time'));
           var intrvl = setInterval(function() {
             if (time == 0) {
              clearInterval(intrvl);
              spanTime.text(time);
              time = Number(spanTime.data('time'));
              $('.buy-popup__paywrapper-retrycode>p').removeClass('active');
               $('.buy-popup__paywrapper-retrycode>a').addClass('active');

             }
             
            if(time < 10 && time > 0){
               spanTime.text('0'+time--);
            }else{
               spanTime.text(time--);
            }

           }, 1000);
      });
     $("button.survey-popup__btn").click(function (event) {
      $(".survey-popup__input input").trigger('blur');
       if ($(".survey-popup__input input").hasClass("invalid")) {
         event.preventDefault()
       }else{
         event.preventDefault()
         $(this).closest('.survey-popup__body').removeClass('active');
         $(this).closest('.survey-popup__body').next().addClass('active');
       }
     });
     var buypopupcost = parseFloat($('.buy-popup__cost>p').attr('data-buycost'));
     var oldpopupcost = parseFloat($('.buy-popup__oldcost').attr('data-oldcost'));
     $(".buy-popup__increment").click(function () {
      if(parseFloat($(this).prev().val()) < 99){
       $(this).prev().val(parseFloat($(this).prev().val()) + 1);
        $(this).parent().next().find('p>span').html((buypopupcost * parseFloat($(this).prev().val())).toLocaleString('ru'));
        $(this).parent().next().find('p>span').html((buypopupcost * parseFloat($(this).prev().val())).toLocaleString('ru'));
        $(this).parent().next().find('div>span').html((oldpopupcost * parseFloat($(this).prev().val())).toLocaleString('ru'));
        $('.popup__bottom .popup__btn>span').html((buypopupcost * parseFloat($(this).prev().val())).toLocaleString('ru'));
      }
     });
     $(".buy-popup__decrement").click(function () {
      if(parseFloat($(this).next().val()) > 1){
         $(this).next().val(parseFloat($(this).next().val()) - 1);
         $(this).parent().next().find('p>span').html((buypopupcost * parseFloat($(this).next().val())).toLocaleString('ru'));
         $(this).parent().next().find('div>span').html((oldpopupcost * parseFloat($(this).next().val())).toLocaleString('ru'));
         $('.popup__bottom .popup__btn>span').html((buypopupcost * parseFloat($(this).next().val())).toLocaleString('ru'));
      }
     });
     $(".buy-popup__count>input").keyup(function () {
         $(this).parent().next().find('p>span').html((buypopupcost * parseFloat($(this).val())).toLocaleString('ru'));
         $(this).parent().next().find('div>span').html((oldpopupcost * parseFloat($(this).val())).toLocaleString('ru'));
         $('.popup__bottom .popup__btn>span').html((buypopupcost * parseFloat($(this).val())).toLocaleString('ru'));
     });

     $("input[data-payment]").change(function () {
         $('.buy-popup__payment-image img').attr('src', $(this).attr('data-payment'));
     });
     $(".feature__more").click(function () {
      $('.feature__card').removeClass('feature__card-mobile');
      $(this).remove();
     });
     $(".buy-popup__optionwrapper .popup__option>input").change(function () {
      $('.buy-popup__deliverywrapper ul').removeClass('show');
      if($(this).is(':checked')){
         $('.'+$(this).attr('id')+'').addClass('show');
      }
     });
      $('.main__slider').slick({
           arrows: false,
           dots: false,
           autoplay:false,
           infinite:true,
           fade:true,
           swipe:true,
           slidesToShow: 1,
           speed: 500,    
           asNavFor: $('.main__navslider'),    
      });  
      $('.main__navslider').slick({
           vertical: true,
           verticalSwiping: true,
           focusOnSelect:true,
           arrows: true,
           dots: false,
           autoplay:false,
           infinite:false,
           slidesToShow: 5.5,
           touchThreshold:20,
           speed: 800,    
           asNavFor: $('.main__slider'),
      });   
      $('.videos__slider').slick({
           arrows: true,
           dots: false,
           autoplay:false,
           infinite:false,
           slidesToShow: 2,
           speed: 800,    
            responsive: [
               {
               breakpoint: 1306,
                  settings: {
                      slidesToShow: 1,
                  }
               },
            ]  

      }); 

    const slider = document.getElementById('survey-popup__slider');
    noUiSlider.create(slider, {
        start: [1, 30],
        connect: true,
        padding: [0,0],
        step: 0.1,
        range: {
            'min': [1],
            'max': [30]
        },
    });
    slider.noUiSlider.on('update', function (values, handle) {
      $('#survey-popup__slider .noUi-handle-upper').attr('aria-valuetext', Math.round($('#survey-popup__slider .noUi-handle-upper').attr('aria-valuetext')));  
      $('#survey-popup__slider .noUi-handle-lower').attr('aria-valuetext', Math.round($('#survey-popup__slider .noUi-handle-lower').attr('aria-valuetext')));  
    }); 
    $('.main__navslider')
     .on('afterChange', function(event, slick, currentSlide, nextSlide){
         $('.main__left>p>span').html(currentSlide + 1);
     });
      Fancybox.bind("[data-fancybox]", {
           Image: {
             zoom: false,
           },
      });
});    
const simpleBar = new SimpleBar(document.getElementById('videos__wrapper'));
simpleBar.getScrollElement().addEventListener('scroll', function(){
    const { scrollHeight, scrollTop, clientHeight } = event.target;
    const isBottomReached = (scrollHeight - Math.round(scrollTop) === clientHeight);

       if (isBottomReached) {
       $('.videos__mobile-card').each(function () {
        if($(this).offset().left < 30 ){
            $(this).addClass('active');
        }
        if($(this).parent().parent().scrollLeft() < 100){
          $('.videos__mobile-card').removeClass('active');
          $('.videos__mobile-card:first-child').addClass('active');
        }
        if($(this).parent().parent().scrollLeft() ==  $(this).parent().parent().get(0).scrollWidth - $(this).parent().parent().width()){
         $('.videos__mobile-card').addClass('active');
        }
       });
    }   
});
$(window).scroll(function (event) {
 var scroll = $(window).scrollTop();
     if(scroll>0){
         $('.header').addClass('scroll');
     }else{
         $('.header').removeClass('scroll');
     }
     if(scroll > $('.main').offset().top + $('.main').height()/2){
      $('.header__bottom').addClass('show');
     }else{
      $('.header__bottom').removeClass('show');
     }
 });      
