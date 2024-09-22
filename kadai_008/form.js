$(function(){
  //class属性がbtnの要素がクリックされたら
  $('.btn').on('click',function(){
    //class属性text-boxの値を変更する
    $('.text-box').val('クリックしました！');
  });
});