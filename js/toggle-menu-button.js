window.addEventListener('load', function () {
  var $button = document.querySelector('.toggle-menu-button');
  var $menu = document.querySelector('.header-site-menu');
  var $links = document.querySelectorAll('.header-site-menu a'); // メニュー内のリンクを取得

  $button.addEventListener('click', function () {
      // メニューの表示・非表示を切り替える
      $menu.classList.toggle('is-show'); 

      // 三本線をバッテンにする
      $button.classList.toggle('is-active');
  });

  // メニュー内のリンクがクリックされたとき
  $links.forEach(function ($link) {
      $link.addEventListener('click', function () {
          // メニューを閉じる
          $menu.classList.remove('is-show');
          $button.classList.remove('is-active');
      });
  });
});
