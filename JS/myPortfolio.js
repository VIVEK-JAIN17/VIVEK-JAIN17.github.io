
// $(document).scroll(function () {

var arr = $(".skill-bar");
// console.log($(this));
fillBar(arr);
// if ($(this).scrollTop() > Height(0, 1) || $("a[href='#skills']").click() === true) {

//     fillBar(arr);

// } else {
//     $(arr).children(".filled-bar").css("width", "0");
// }

// if ($(this).scrollTop() > Height(0, 2)) {
//     $(arr).children(".filled-bar").css("width", "0");

// }

//     return false;
// });

$(function () {

    if (window.screen.width > 992) {
        $(document).scroll(function () {
            let $nav = $("#mainNavbar");
            let $navItems = $nav.find(".nav-item");
            $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
            $navItems.toggleClass("ml-lg-2", $(this).scrollTop() > $nav.height());
        });
    }

});

let toggler = $(".navbar-dark").find(".navbar-toggler")
toggler.click(function () {
    $(this).css({
        outline: "none"
    })
})

var links = $("#mainNavbar").find(".nav-link");
links.push($("#mainNavbar").find(".navbar-brand"));

$(document).ready(function () {

    $(links).click(function (e) {

        if (this.hash !== "") {
            e.preventDefault();
            var hash = this.hash;
            $('html, body').animate({

                scrollTop: ($(hash).offset().top - 15)

            }, 1000, function () {

                window.location.hash = hash;

            });
        }

        var button = $("button.navbar-toggler");
        $(button).toggleClass("collapsed");

        var div = $("#navbarSupportedContent");
        $(div).toggleClass("collapsing");
        $(div).toggleClass("show");
        $(div).toggleClass("collapsing");
    });
});

var sections = $("section");
function Height(i, j) {

    let ht = 0;
    for (let index = i; index <= j; index++) {
        const section = sections[index];
        ht += $(section).height();
    }
    return ht;
}


function fillBar(arr) {
    // var arr = $(".skill-bar");
    for (let i = 0; i < arr.length; i++) {
        var width = $(arr[i]).children(".span-circle").text();
        var widthN = width.substring(0, width.length - 1);
        $(arr[i]).children(".filled-bar").css("width", width);
    };
}

$('.owl-carousel').owlCarousel({
    autoplayHoverPause: true,
    loop: true,
    margin: 10,
    nav: true,
    lazyload: true,
    responsive: {
        0: {
            items: 1
        },
        768: {
            items: 2
        },
        992: {
            items: 3
        }
    }
})

$("#formsubmit").click(function () {
    alert("This Form Doesn't Work Yet !")
});

//Firefox
$(document).bind('DOMMouseScroll', function (e) {
    if (e.originalEvent.detail > 0) {
        //scroll down
        console.log('Down');
    } else {
        //scroll up
        console.log('Up');
    }

    //prevent page fom scrolling
    // return false;
});

//IE, Opera, Safari
$(document).bind('mousewheel', function (e) {
    if (e.originalEvent.wheelDelta < 0) {
        //scroll down
        // console.log(e);
        console.log('Down');
    } else {
        //scroll up
        console.log('Up');
    }

    //prevent page fom scrolling
    // return false;
});
