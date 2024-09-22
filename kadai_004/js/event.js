//loadイベントが発生した時
$(window).on('load',()=>{
    console.log('loadイベントが発生しました');
  });

 $(function(){
  //スクロールイベントが発生した時
  $(window).on('scroll',function(){
    console.log('scrollイベントが発生しました');
  });
 });