
# Закрытие 
# после анимации
reset = ->
  $("#reg-form").hide()
  $("#log-form").hide()
  return
registration = ->
  reset()
  $("#reg-form:hidden").show()
  return
login = ->
  reset()
  $("#log-form:hidden").show()
  return
carousel_right = ->
  $(".carousel-items").animate # производим анимацию: блок с набором картинок уедет влево на 222 пикселя (это ширина одного прокручиваемого элемента) за 200 милисекунд.
    left: "-400px"
  , 200
  setTimeout (-> # устанавливаем задержку времени перед выполнением следующих функций. Задержка нужна, т.к. эти ффункции должны запуститься только после завершения анимации.
    $(".carousel-items .carousel-item-block").eq(0).clone().appendTo ".carousel-items" # выбираем первый элемент, создаём его копию и помещаем в конец карусели
    $(".carousel-items .carousel-item-block").eq(0).remove() # удаляем первый элемент карусели
    $(".carousel-items").css left: "0px" # возвращаем исходное смещение набора набора элементов карусели
    return
  ), 300
  return
carousel_left = ->
  
  # !!!!! 4й элемент, если неизвестна длина очереди - провал. Помогите.
  $(".carousel-items .carousel-item-block").eq(4).clone().prependTo ".carousel-items" # выбираем последний элемент набора, создаём его копию и помещаем в начало набора
  $(".carousel-items").css left: "-400px" # устанавливаем смещение набора -222px
  $(".carousel-items").animate # за 200 милисекунд набор элементов плавно переместится в исходную нулевую точку
    left: "0px"
  , 200
  $(".carousel-items .carousel-item-block").eq(-1).remove() # выбираем последний элемент карусели и удаляем его
  return
show_submenu = (e) ->
  $(".submenu").hide 200
  $(document.getElementsByClassName("dynamic-content")).hide 200
  $(document.getElementById(e)).show 200
  $("#content-category").text e.substring(8, 25).toUpperCase()
  $(document.getElementsByClassName("content-" + e)).show 200
  return
$(document).ready ->
  $("a#go").click (event) ->
    event.preventDefault()
    $("#overlay").fadeIn 400, ->
      $("#modal_form").css("display", "block").animate
        opacity: 1
        top: "50%"
      , 200
      return

    return

  $("#modal_close, #overlay").click ->
    $("#modal_form").animate
      opacity: 0
      top: "45%"
    , 200, ->
      $(this).css "display", "none"
      $("#overlay").fadeOut 400
      return

    return

  $("a#go").click()
  $(document.getElementsByClassName("rating")).click (event) ->
    rating = $(this).text().substring(9, 20)
    rating++
    $(this).text "Рейтинг: " + rating
    return

  return
