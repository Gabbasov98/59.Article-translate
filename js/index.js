// const { Chart } = require("./chart.min");

// const { Chart } = require("./chart.min");

$(document).ready(function() {
    $(" .select").niceSelect()
    $(".table__rows").mCustomScrollbar();
    $(".meta-hint__inner").mCustomScrollbar();

    $(".table__check input").click(function() {
        if ($(this).is(':checked')) {
            $(this).parents(".table__row").addClass("table__row--active");
        } else {
            $(this).parents(".table__row").removeClass("table__row--active");
        }
    })
    $(".datapicker__show").click(function() {
        $(this).addClass("datapicker__show--active")
    })

    $(document).mouseup(function(e) { // событие клика по веб-документу
        if ($(".datapicker__show").hasClass("datapicker__show--active")) {
            var div = $(".datapicker__hidden"); // тут указываем ID элемента
            if (!div.is(e.target) // если клик был не по нашему блоку
                &&
                div.has(e.target).length === 0) { // и не по его дочерним элементам
                div.siblings(".datapicker__show").removeClass("datapicker__show--active")
            }
        }

    });
    $(".table__head-title").click(function() {
        $(this).toggleClass("table__head-title--active")
    })

})