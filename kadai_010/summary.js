$(function(){
  //id属性がchange-colorの要素がクリックされたら
  $('#change-color').on('click',function(){
    //赤色の文字に変化
    $('#target').css('color','red');
  });

  //id属性がchange-textの要素がクリックされたら
  $('#change-text').on('click',function(){
    //文字内容が変化
    $('p').text('Hello!');
  });

  //id属性がfade-outの要素がクリックされたら
  $('#fade-out').on('click',function(){
    //フェードアウトする
    $('#target').fadeOut();
  });

  //id属性がfade-inの要素がクリックされたら
  $('#fade-in').on('click',function(){
    //フェードインする
    $('#target').fadeIn();
  });
});