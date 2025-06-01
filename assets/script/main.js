// ハンバーガーメニュー
var hamburger = $('.hamburger__menu');
// OPEN/CLOSEボタンをクリックしたら
$('.hamburger__button').on('click', function () {
  // console.log('click');
  // .hamburgerの表示・非表示を繰り返す
  hamburger.toggleClass('hamburger__menu-active');
});
// 画面幅のサイズが変わったら
$(window).on('resize', function () {
  // console.log('resize');
  // ハンバーガーメニューを閉じる
  hamburger.removeClass('hamburger__menu-active');
});

// カルーセル
$('.products-service__slick').slick({
  dots: true,
  arrows: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  infinite: false,
});

