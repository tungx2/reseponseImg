$(document).ready(function(){
  let gnb= $('#h_bottom .gnb');
  gnb.hover(function(){
    $('#h_bottom').stop().animate({'height':'320px'},500);
    $('#h_bottom .sub').fadeIn();
  },function(){
    $('#h_bottom').stop().animate({'height':'46px'},500);
    $('#h_bottom .sub').fadeOut();
  });

  //메인슬라이드 구현
  let mSlide= $('.m_slide ul');
  let slideImg= $('.m_slide img').width(); //이미지 크기를 변수에 담는다.
  console.log(slideImg);

  $(window).resize(function(){ //브라우저 크기가 변하면
    slideImg= $('.m_slide img').width();//이미지 크기를 다시 설정한다.
    console.log(slideImg)
  });

  $('.m_slide ul>li:last-child').insertBefore('.m_slide ul>li:first-child');
  mSlide.css('margin-left','-1600px');

  //함수 - 왼쪽 방향으로 움직이는 슬라이드
  function moveLeft(){
    mSlide.animate({'margin-left': -(slideImg*2)},500,function(){
      $('.m_slide ul>li:first-child').insertAfter('.m_slide ul>li:last-child');
      // mSlide.css('margin-left','-1600px');//원래 위치로 오게끔
      mSlide.css('margin-left', -slideImg);//원래 위치로 오게끔
    });
  };

  // 자바스크립트 시간객체를 사용하여 매 3초마다 함수 호출하여 실행하기
  let Timer= setInterval(moveLeft,3000);

  //함수 - 오른쪽 방향으로 움직이는 슬라이드
  function moveRight(){
    mSlide.animate({'margin-left':'0px'},500,function(){
      $('.m_slide ul>li:last-child').insertBefore('.m_slide ul>li:first-child');
      // mSlide.css('margin-left','-1600px');//원래 위치로 오게끔
      mSlide.css('margin-left', -slideImg);//원래 위치로 오게끔
    });
  };

  //좌,우버튼 클릭시 해당 방향으로 움직이게 하기
  l_btn= $('.m_slide i.fa-angle-left');
  r_btn= $('.m_slide i.fa-angle-right');

  l_btn.click(function(){
    moveRight();
  });
  r_btn.click(function(){
    moveLeft();
  });

  //좌,우버튼에 마우스 오버시 시간을 제하고 다시 아웃하면 시간을 생성하여 자동으로 움직이게 한다.
  $('.m_slide i.fas').hover(function(){
    clearInterval(Timer);
  },function(){
    Timer= setInterval(moveLeft,3000);//다시 동작
  });

  //1. nav 마우스 오버시 슬라이드 이미지와 겹치게하기
  //css position relative나 absolute 넣고 z-index 주기

  //2. 가로폭을 줄이면 이미지 가로크기 다시 새로 맞추기
  //16번 줄

  //3. 정지버튼과 플레이 버튼 추가하기
  $('i.fa-play').click(function(){
    Timer= setInterval(moveLeft,3000);
  });
  $('i.fa-stop').click(function(){
    alert('fdasjflkdahjfkldjas')
    clearInterval(Timer);
  });
});