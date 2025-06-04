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

// アコーディオンのタイトルがクリックされたら
$('.faq__item-content').on('click', function (e) {

    // .question-content-accordion-bottomを選択
    var content = $(this).next();

    // .question-content-accordion-bottomを表示・非表示
    content.slideToggle();

    //目印となるクラスを追加
    $(this).toggleClass('close');

      // 開いているアコーディオンがあるかどうかをチェック
    const anyOpen = $('.faq__item-content.close').length > 0;

    // 現在のウィンドウ幅を取得
    const windowWidth = $(window).width();

    // 画面幅と開閉状態によって row-gap を切り替え
    if (windowWidth <= 768) {
        if (anyOpen) {
            $('.faq__container').css('row-gap', '1.1875rem');
        } else {
            $('.faq__container').css('row-gap', '1.5rem');
        }
    } else {
        if (anyOpen) {
            $('.faq__container').css('row-gap', '1.375rem');
        } else {
            $('.faq__container').css('row-gap', '1.375rem');
        }
    }
});