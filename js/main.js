$(function () {
    ///////////////////////////////////////////////////


    // { topBanner  2022.03.17 최종WOODY} 
    //$('css선택자').on('이벤트', 할일)


    $('.topBanner i').on('click', topbannerHandler);

    function topbannerHandler() {
        $('.topBanner').slideUp();
    }
    $('.topBanner i').on('click', topbannerHandler)

    /* $('.topBanner i').on('click',()=> $('topBanner').slideUp()); */

    //*각각의 슬라이드에 애니메이션...
    //////////////////////////////////////////////////////////////////


    $('.mainVisualSlide').on('inhit relnit afterChange', function () {
        let current = $('.slick-current');
        current.addClass('on').siblings().removeClass('on');
    });

    $('.mainVisualSlide').slick({
        autoplay: true,
        autoplaySpeed: 4000,
        arrows: false,
        pauseOnHover: false,/* 마우스 올리면 멈추는게 기본설정으로 되어있는데 멈추지않고돌아가게 하려면 false해야함 */
        pauseOnFocus: false,
    });

    /*
    $('.mainVisualSlide figure').eq(1).addClass('on');
    //전체 슬라이드에서 class를 떼고 지금 슬라이드에 class를 붙이는 일

    $('.mainVisualSlide').on('afterChange', function (s, i, c) {
        //c => 0,1,2 반복함
        $('.mainVisualSlide figure').removeClass('on')
        $('.mainVisualSlide figure').eq(c + 1).addClass('on');
    });

    이까지 하면 돌아가긴 하는데 슬라이더가 많아졌을때 번호를 찾느라 시간을 다보내게 됨 */




    $('movieBtn i:first-child').on('click', function () {
        $('#adMovie').trigger('play');
    })
    $('movieBtn i:last-child').on('click', function () {
        $('#adMovie').trigger('pause');
    })















    ///////////////////////////////////////////////////
})