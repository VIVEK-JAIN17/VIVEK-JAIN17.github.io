var delay = 500;

animate = {
    "Animations": "fadeInUp",
    "Duration": "400ms",
    "Delay": delay + "ms",
    "Visible": true,
    "Resetoffscreen": false,
    // "Repeat": "false"
};

// var sections = $("section");

// for (let idx = 0; idx < sections.length; idx++) {
//     const section = sections[idx];
//     var eles = $(section).find(".animate-plus");
//     console.log(eles);
//     var grpct = 1;
//     let grp = "grp" + grpct;
//     var i = 1;
//     eles.each(function () {
//         $(this).attr("data-animation-group", grp);
//         $(this).attr("data-animation-order", i);
//         i++;
//     })
//     grpct++;
// }

$ele = $(".animate-plus");
$imgs = $("img.animate-plus");
$ele.each(function () {
    $(this).attr("data-animations", animate.Animations);
    $(this).attr("data-animation-duration", animate.Duration);
    $(this).attr("data-animation-delay", animate.Delay);
    $(this).attr("data-animation-when-visible", animate.Visible);
    // $(this).attr("data-animation-reset-offscreen", animate.Resetoffscreen);
})

// $imgs.each(function () {
//     $(this).attr("data-animation-duration", animate.Duration);
//     $(this).attr("data-animation-delay", animate.Delay);
//     $(this).attr("data-animation-when-visible", animate.Visible);
//     $(this).attr("data-animation-reset-offscreen", animate.Resetoffscreen);
// })


var about = $("#about").find(".animate-plus");
var i = 1;
about.each(function () {
    $(this).attr("data-animation-group", "grp1");
    $(this).attr("data-animation-order", i);
    // if (this.nodeName === "IMG") {
    //     console.log("code is reaching here");
    //     $(this).attr("data-animations", "slideInRight");
    //     $(this).attr("data-animation-order", "1");
    // }
    i++;
});

var education = $("#education").find(".animate-plus");
i = 1;
education.each(function () {
    $(this).attr("data-animation-group", "grp2");
    $(this).attr("data-animation-order", i);
    // if (this.nodeName === "IMG") {
    //     console.log("code is reaching here");
    //     $(this).attr("data-animations", "slideInLeft");
    //     $(this).attr("data-animation-order", "1");
    // }
    i++;
});

var skills = $("#skills").find(".animate-plus");
i = 1;
skills.each(function () {
    $(this).attr("data-animation-group", "grp3");
    $(this).attr("data-animation-order", i);
    i++;
});


var experience = $("#experience").find(".animate-plus");
i = 1;
experience.each(function () {
    $(this).attr("data-animation-group", "grp4");
    $(this).attr("data-animation-order", i);
    // if (this.nodeName === "IMG") {
    //     console.log("code is reaching here");
    //     $(this).attr("data-animations", "zoomIn");
    //     $(this).attr("data-animation-order", "1");
    // }
    i++;
});

var projects = $("#projects").find(".animate-plus");
i = 1;
projects.each(function () {
    $(this).attr("data-animation-group", "grp5");
    $(this).attr("data-animation-order", i);
    i++;
});

var Gallery = $("#Gallery").find(".animate-plus");
i = 1;
Gallery.each(function () {
    $(this).attr("data-animation-group", "grp6");
    $(this).attr("data-animation-order", i);
    i++;
});

var contact = $("#contact").find(".animate-plus");
i = 1;
contact.each(function () {
    $(this).attr("data-animation-group", "grp7");
    $(this).attr("data-animation-order", i);
    i++;
});

