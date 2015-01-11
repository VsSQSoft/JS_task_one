$(document).ready(function() {
    $('a#go').click( function(event){
        event.preventDefault();
        $('#overlay').fadeIn(400,
            function(){
                $('#modal_form')
                    .css('display', 'block')
                    .animate({opacity: 1, top: '50%'}, 200);
            });
    });
    /* Закрытие */
    $('#modal_close, #overlay').click( function(){
        $('#modal_form')
            .animate({opacity: 0, top: '45%'}, 200,
            function(){ // после анимации
                $(this).css('display', 'none');
                $('#overlay').fadeOut(400);
            }
        );
    });
    $('a#go').click();


    $(document.getElementsByClassName('rating')).click( function(event)
    {
        var rating = $(this).text().substring( 9 , 20 );
        rating++;
        $(this).text('Рейтинг: ' + rating);
    });

});


function reset() {
    $('#reg-form').hide();
    $('#log-form').hide();
}

function registration()
{   reset();
    $('#reg-form:hidden').show();
}

function login()
{
    reset();
    $('#log-form:hidden').show();
}
function carousel_right() {
    $(".carousel-items").animate({left: "-400px"}, 200); // производим анимацию: блок с набором картинок уедет влево на 222 пикселя (это ширина одного прокручиваемого элемента) за 200 милисекунд.
    setTimeout(function () { // устанавливаем задержку времени перед выполнением следующих функций. Задержка нужна, т.к. эти ффункции должны запуститься только после завершения анимации.
        $(".carousel-items .carousel-item-block").eq(0).clone().appendTo(".carousel-items"); // выбираем первый элемент, создаём его копию и помещаем в конец карусели
        $(".carousel-items .carousel-item-block").eq(0).remove(); // удаляем первый элемент карусели
        $(".carousel-items").css({"left":"0px"}); // возвращаем исходное смещение набора набора элементов карусели
    }, 300);
};

function carousel_left() {
    // !!!!! 4й элемент, если неизвестна длина очереди - провал. Помогите.
    $(".carousel-items .carousel-item-block").eq(4).clone().prependTo(".carousel-items"); // выбираем последний элемент набора, создаём его копию и помещаем в начало набора
    $(".carousel-items").css({"left":"-400px"}); // устанавливаем смещение набора -222px
    $(".carousel-items").animate({left: "0px"}, 200); // за 200 милисекунд набор элементов плавно переместится в исходную нулевую точку
    $(".carousel-items .carousel-item-block").eq(-1).remove(); // выбираем последний элемент карусели и удаляем его
};

function show_submenu(e){
    $('.submenu').hide(200);
    $(document.getElementsByClassName('dynamic-content')).hide(200);
    $(document.getElementById(e)).show(200);
    $('#content-category').text(e.substring(8,25).toUpperCase());
    $(document.getElementsByClassName('content-' + e)).show(200);
}

