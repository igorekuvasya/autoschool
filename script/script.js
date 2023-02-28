$(document).ready(function() {
    $(".slider").each(function () { // обрабатываем каждый слайдер
     var obj = $(this);
     $(obj).append("<div class='nav'></div>");
     $(obj).find("li").each(function () {
      $(obj).find(".nav").append("<span rel='"+$(this).index()+"'></span>"); // добавляем блок навигации
      $(this).addClass("slider"+$(this).index());
     });
     $(obj).find("span").first().addClass("on"); // делаем активным первый элемент меню
    });
   });
   function sliderJS (obj, sl) { // slider function
    var ul = $(sl).find("ul"); // находим блок
    var bl = $(sl).find("li.slider"+obj); // находим любой из элементов блока
    var step = $(bl).width(); // ширина объекта
    $(ul).animate({marginLeft: "-"+step*obj}, 500); // 500 это скорость перемотки
   }
   $(document).on("click", ".slider .nav span", function() { // slider click navigate
    var sl = $(this).closest(".slider"); // находим, в каком блоке был клик
    $(sl).find("span").removeClass("on"); // убираем активный элемент
    $(this).addClass("on"); // делаем активным текущий
    var obj = $(this).attr("rel"); // узнаем его номер
    sliderJS(obj, sl); // слайдим
    return false;
   });

//**задание 3(1) */

function addEffect1(){
    $("#kv1").show(2500);
}
function addEffect2(){
    $("#kv1").hide(2500);
}

function addEffect3(){
    $("#kv2").show(2500);
}
function addEffect4(){
    $("#kv2").hide(2500);
}

//**задание 3(2) */

$('#circle1').each(function() {
    $(this).animate({opacity: '0'}, 1);
    $(this).mouseover(function() {
        $(this).stop().animate({opacity: '1.0'}, 500);
    })
    $(this).mouseout(function(){
        $(this).stop().animate({opacity: '0'}, 800);
    })
})
$('#circle2').each(function() {
    $(this).animate({opacity: '0'}, 1);
    $(this).mouseover(function(){
       $(this).stop().animate({opacity: '1.0'}, 500); 
    })
    $(this).mouseout(function(){
        $(this).stop().animate({opacity: '0'},800);
    })
})

//**задание 3(3) */

$(document).ready(function () { 
    $("#menu ul").hide();
    $("#menu p").click(function () { 
        $(this).next().slideToggle("normal"); 
    })
});