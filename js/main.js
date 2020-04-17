
$(document).ready(function(){
const scrollBtn = $('.scroll-to-top-btn');
$(window).scroll(function(){
    if ( $(this).scrollTop() > 500){
        scrollBtn.fadeIn();
    } else {
        scrollBtn.fadeOut();
    }
})
scrollBtn.click(function(){
    $('html, body').animate({ scrollTop: 0 }, 360);
    return false;
})
});
// функция возвращает cookie с именем name, если есть, если нет, то undefined    
function getCookie(name) {
    let matches = document.cookie.match(new RegExp(
    "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
}
let cookiecook = getCookie("cookiecook"),
cookiewin = document.getElementsByClassName('cookie_notice')[0];    
// проверяем, есть ли у нас cookie, с которой мы не показываем окно и если нет, запускаем показ
if (cookiecook != "no") {
    // показываем    
    cookiewin.style.display="block"; 
    // закрываем по клику
    document.getElementById("cookie_close").addEventListener("click", function(){
        cookiewin.style.display="none";    
        // записываем cookie на 1 день, с которой мы не показываем окно
        let date = new Date;
        date.setDate(date.getDate() + 1);    
        document.cookie = "cookiecook=no; path=/; expires=" + date.toUTCString();               
    });
}
// всплывающие сообщение при покедании сайта
// функция возвращает cookie с именем name, если есть, если нет, то undefined    
function getCookie(name) {
    var matches = document.cookie.match(new RegExp(
    "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
}
// проверяем, есть ли у нас cookie, с которой мы не показываем окно и если нет, запускаем показ
var alertwin = getCookie("alertwin");
if (alertwin != "no") { 
    $(document).mouseleave(function(e){
        if (e.clientY < 10) {
            $(".exitblock").fadeIn("fast");    
            // записываем cookie на 1 день, с которой мы не показываем окно
            var date = new Date;
            date.setDate(date.getDate() + 1);    
            document.cookie = "alertwin=no; path=/; expires=" + date.toUTCString();       
        }    
    });
    $(document).click(function(e) {
        if (($(".exitblock").is(':visible')) && (!$(e.target).closest(".exitblock .modaltext").length)) {
            $(".exitblock").remove();
        }
    });  
}
let last = document.lastModified;

// модальное окно


!function(e){"function"!=typeof e.matches&&(e.matches=e.msMatchesSelector||e.mozMatchesSelector||e.webkitMatchesSelector||function(e){for(var t=this,o=(t.document||t.ownerDocument).querySelectorAll(e),n=0;o[n]&&o[n]!==t;)++n;return Boolean(o[n])}),"function"!=typeof e.closest&&(e.closest=function(e){for(var t=this;t&&1===t.nodeType;){if(t.matches(e))return t;t=t.parentNode}return null})}(window.Element.prototype);


document.addEventListener('DOMContentLoaded', function() {

/* Записываем в переменные массив элементов-кнопок и подложку.
    Подложке зададим id, чтобы не влиять на другие элементы с классом overlay*/
var modalButtons = document.querySelectorAll('.js-open-modal'),
    overlay      = document.querySelector('.js-overlay-modal'),
    closeButtons = document.querySelectorAll('.js-modal-close');


/* Перебираем массив кнопок */
modalButtons.forEach(function(item){

    /* Назначаем каждой кнопке обработчик клика */
    item.addEventListener('click', function(e) {

        /* Предотвращаем стандартное действие элемента. Так как кнопку разные
        люди могут сделать по-разному. Кто-то сделает ссылку, кто-то кнопку.
        Нужно подстраховаться. */
        e.preventDefault();

        /* При каждом клике на кнопку мы будем забирать содержимое атрибута data-modal
        и будем искать модальное окно с таким же атрибутом. */
        var modalId = this.getAttribute('data-modal'),
            modalElem = document.querySelector('.modal[data-modal="' + modalId + '"]');


        /* После того как нашли нужное модальное окно, добавим классы
        подложке и окну чтобы показать их. */
        modalElem.classList.add('active');
        overlay.classList.add('active');
    }); // end click

}); // end foreach


closeButtons.forEach(function(item){

    item.addEventListener('click', function(e) {
        var parentModal = this.closest('.modal');

        parentModal.classList.remove('active');
        overlay.classList.remove('active');
    });

   }); // end foreach


    document.body.addEventListener('keyup', function (e) {
        var key = e.keyCode;

        if (key == 27) {

            document.querySelector('.modal.active').classList.remove('active');
            document.querySelector('.overlay').classList.remove('active');
        };
    }, false);


    overlay.addEventListener('click', function() {
        document.querySelector('.modal.active').classList.remove('active');
        this.classList.remove('active');
    });




}); // end ready
// кномка мобильной навигации
$('.menu__mobile-wrapper .menu__mobile-btn').on('click', function(e){
    e.preventDefault;
    $(this).toggleClass('menu__mobile-btn--active');
    $('.menu__mobile-wrapper .menu__mobile').toggleClass('menu__mobile-active');
    // return console.log('клик');
});