$(function(){

  $(window).load(function(){
    $('.grid').isotope({
      // options
      itemSelector: '.grid-item',
      layoutMode: 'fitRows' 
    });
  });

  // Isotope Filter Setting
  var grid = $('.grid');
  var m1 = $('#m1');
  var m2 = $('#m2');
  var m3 = $('#m3');

  // 라이트박스 초기 설정
  $('.grid-item a').magnificPopup({
    type: 'image',
    gallery :{
      enabled: true
    }
  });

  // 창닫기 버튼 설정
  $('.close_btn').click(function(){
    $.magnificPopup.close();
  });

  m1.click(function(e){
    grid.isotope({
      itemSelector: '.grid-item',
      layoutMode: 'fitRows',
      filter: '.grid-item'
    });

    $('.grid-item a').magnificPopup({
      type: 'image',
      gallery :{
        enabled: true
      }
    });
    e.preventDefault();
  });

  m2.click(function(e){
    grid.isotope({
      itemSelector: '.grid-item',
      layoutMode: 'fitRows',
      filter: '.g1'
    });

    $('.g1 a').magnificPopup({
      type: 'image',
      gallery :{
        enabled: true
      }
    });
    e.preventDefault();
  });

  m3.click(function(e){
    grid.isotope({
      itemSelector: '.grid-item',
      layoutMode: 'fitRows',
      filter: '.g2'
    });

    $('.g2 a').magnificPopup({
      type: 'image',
      gallery :{
        enabled: true
      }
    });
    e.preventDefault();
  });

});