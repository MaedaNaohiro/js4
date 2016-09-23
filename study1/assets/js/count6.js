/*js file*/
$(function(){

  var count = 0;
  var maxCount = 10;
  var $txt = $(".container__count-text");
  var $btn = $(".container__btn");

  $btn.click(function(){
    num = $(this).hasClass("increment") ? 1 : -1;
    count += (num);
    if( count < 0 ) count = 0;
    if( count > maxCount ) count = maxCount;
    $txt.text(count);
  })

  $(".increment").mouseover(
    function(){
      $(this).stop();
      $(this).fadeTo(300,0.5);
  }
);

  $(".increment").mouseout(
    function(){
      $(this).stop();
      $(this).fadeTo(300,1);
}
);

  $(".decrement").mouseover(
    function(){
      $(this).stop();
      $(this).fadeTo(300,0.5);
}
);

  $(".decrement").mouseout(
    function(){
      $(this).stop();
      $(this).fadeTo(300,1);
  }
);

上限に達したテキストを挿入する



})//end function
