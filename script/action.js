$('.hamburger').click(function(){
    $(this).toggleClass('on');
    $('.mobile_nav').fadeToggle().toggleClass('on');
    
    if($('.hamburger').hasClass('on') == true){
        $('body').css({height:'100vh', overflow:'hidden'})
    }else{
        $('body').css({height:'', overflow:''})
    }
});

let pcNav = $('.pc_nav').html();
$('.mobile_nav').html(pcNav);

$('.mobile_nav .gnb > li').click(function(e){
    e.preventDefault(); // a태그 이동 방지
    let submenu = $(this).children('.lnb');

    // 다른 메뉴 닫기
    $('.mobile_nav .gnb .lnb').not(submenu).slideUp();

    // 클릭한 메뉴 토글
    submenu.stop().slideToggle();

    // 2차 메뉴 a태그 클릭 시 부모 li 이벤트 막기
    $('.mobile_nav .gnb .lnb a').click(function(e){
        e.stopPropagation(); // 부모 li로 이벤트 전달 안 함
        // preventDefault() 안 씀 → 링크 정상 이동
    });
});

$(window).resize(function(){
    if ($(window).width() > 1024) { // 데스크탑 전환 기준
        $('.mobile_nav').removeAttr('style'); // display:block 등 inline style 제거
        $('.mobile_nav .lnb').removeAttr('style'); // 2차 메뉴들도 닫힘 상태로
    }
});