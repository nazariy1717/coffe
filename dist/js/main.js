"use strict";
function newSlider(e, r) {
    return r = void 0 !== r ? Object.assign({}, slider_options_default, r) : slider_options_default, new Flickity(d.querySelector(e), r)
}
function updateStatus() {
    var e = d.querySelector(".slide-current"), r = gallery_flkty.selectedIndex + 1;
    if (r > 10)return !1;
    e.textContent = r
}
function tabOpen(e, r) {
    e.preventDefault();
    var t = d.getElementsByClassName("tab-content"), a = !0, l = !1, o = void 0;
    try {
        for (var s, n = t[Symbol.iterator](); !(a = (s = n.next()).done); a = !0) {
            s.value.style.display = "none"
        }
    } catch (e) {
        l = !0, o = e
    } finally {
        try {
            !a && n.return && n.return()
        } finally {
            if (l)throw o
        }
    }
    var p = d.getElementsByClassName("tab-switch__link"), c = !0, i = !1, f = void 0;
    try {
        for (var _, y = p[Symbol.iterator](); !(c = (_ = y.next()).done); c = !0) {
            var u = _.value;
            u.className = u.className.replace(" active", "")
        }
    } catch (e) {
        i = !0, f = e
    } finally {
        try {
            !c && y.return && y.return()
        } finally {
            if (i)throw f
        }
    }
    d.getElementById(r).style.display = "block", e.currentTarget.className += " active"
}
function scrollTo(e, r, t) {
    if (!(t <= 0)) {
        var a = r - e.scrollTop, l = a / t * 10;
        setTimeout(function () {
            e.scrollTop = e.scrollTop + l, e.scrollTop !== r && scrollTo(e, r, t - 10)
        }, 10)
    }
}
function scrollingItem(e, r) {
    var t = !0, a = !1, l = void 0;
    try {
        for (var o, s = e[Symbol.iterator](); !(t = (o = s.next()).done); t = !0) {
            o.value.addEventListener("click", function () {
                scrollTo(d.body, r.offsetTop, 400)
            })
        }
    } catch (e) {
        a = !0, l = e
    } finally {
        try {
            !t && s.return && s.return()
        } finally {
            if (a)throw l
        }
    }
}
var d = document, scrool_down = d.querySelector(".bottom__scroll"), slidePrev = d.querySelector(".gallery-slider__prev"), slideNext = d.querySelector(".gallery-slider__next"), header = d.querySelector("header"), app_top = d.querySelector(".app-top"), app_top_coffee = d.querySelector(".app-top-coffee"), app_program_coffee_1 = d.querySelector(".app-program-coffee-1"), app_program_coffee_2 = d.querySelector(".app-program-coffee-2"), app_gallery_coffee_1 = d.querySelector(".app-gallery-coffee-1"), app_gallery_coffee_2 = d.querySelector(".app-gallery-coffee-2"), app_form_coffee_1 = d.querySelector(".app-form-coffee-1"), app_form_coffee_2 = d.querySelector(".app-form-coffee-2"), height = window.innerHeight, app_program = d.querySelector(".app-program").offsetTop - height, app_gallery = d.querySelector(".app-gallery").offsetTop, app_program_sec = d.querySelector(".app-program"), app_gallery_sec = d.querySelector(".app-gallery"), app_testimonials_sec = d.querySelector(".app-testimonials"), app_partners_sec = d.querySelector(".app-partners"), footer_sec = d.querySelector("footer"), js_btn1 = d.getElementsByClassName("js-btn1"), js_btn2 = d.getElementsByClassName("js-btn2"), js_btn3 = d.getElementsByClassName("js-btn3"), js_btn4 = d.getElementsByClassName("js-btn4"), js_btn5 = d.querySelector(".js-btn5"), hamburger = d.querySelector(".hamburger"), nav = d.querySelector("header .nav"), slider_options_default = {
    wrapAround: !0,
    pageDots: !1,
    cellAlign: "left",
    contain: !0,
    arrowShape: "M0,16.1c0-0.6,0.2-1.1,0.6-1.6L14.2,0.7c0.9-0.9,2.3-0.9,3.1,0c0.9,0.9,0.9,2.3,0,3.2l-12,12.2l12,12.2 c0.9,0.9,0.9,2.3,0,3.2c-0.9,0.9-2.3,0.9-3.1,0L0.6,17.7C0.2,17.2,0,16.6,0,16.1z"
};
hamburger.addEventListener("click", function () {
    hamburger.classList.contains("hamburger-close") ? (hamburger.classList.remove("hamburger-close"), nav.style.display = "none") : (hamburger.classList.add("hamburger-close"), nav.style.display = "block")
}), newSlider(".testimonials-slider", {autoPlay: 4e3, pageDots: !0}), newSlider(".partners-slider", {autoPlay: 6e3});
var gallery_flkty = newSlider(".gallery-slider", {
    imagesLoaded: !0,
    percentPosition: !1,
    autoPlay: !1,
    wrapAround: true,
    prevNextButtons: !1,
});
updateStatus(), gallery_flkty.on("select", updateStatus), slidePrev.addEventListener("click", function () {
    gallery_flkty.previous()
}), slideNext.addEventListener("click", function () {
    gallery_flkty.next()
});
var app_form = d.querySelector(".app-form").offsetTop;
window.addEventListener("scroll", function () {
    function e(e, r) {
        e.style.transform = "translateY(" + r + "px)"
    }

    window.scrollY > 0 ? header.classList.add("fixed") : header.classList.remove("fixed");
    var r = window.pageYOffset || d.documentElement.scrollTop;
    if (e(app_top_coffee, r / 4), e(app_program_coffee_1, r / 2), r > app_program && e(app_program_coffee_2, r / 3), r > app_gallery - height) {
        var t = Math.min(r - app_gallery + height - 300);
        e(app_gallery_coffee_1, t / 6), e(app_gallery_coffee_2, t / 7)
    }
    if (r > app_form - height) {
        var a = Math.min(r - app_form + height - 300);
        e(app_form_coffee_1, a / 7), e(app_form_coffee_2, a / 3)
    }
}), scrollingItem(js_btn1, app_program_sec), scrollingItem(js_btn2, app_gallery_sec), scrollingItem(js_btn3, app_testimonials_sec), scrollingItem(js_btn4, footer_sec), js_btn5.addEventListener("click", function () {
    scrollTo(d.body, app_partners_sec.offsetTop, 400)
}), scrool_down.addEventListener("click", function () {
    scrollTo(d.body, app_program_sec.offsetTop, 400)
});