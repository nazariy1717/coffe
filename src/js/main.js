'use strict';

//**** variables

var d = document,
    scrool_down = d.querySelector('.bottom__scroll'),
    slidePrev = d.querySelector('.gallery-slider__prev'),
    slideNext = d.querySelector('.gallery-slider__next'),
    header = d.querySelector('header'),
    app_top = d.querySelector('.app-top'),
    app_top_coffee = d.querySelector('.app-top-coffee'),
    app_program_coffee_1 = d.querySelector('.app-program-coffee-1'),
    app_program_coffee_2 = d.querySelector('.app-program-coffee-2'),
    app_gallery_coffee_1 = d.querySelector('.app-gallery-coffee-1'),
    app_gallery_coffee_2 = d.querySelector('.app-gallery-coffee-2'),
    app_form_coffee_1 = d.querySelector('.app-form-coffee-1'),
    app_form_coffee_2 = d.querySelector('.app-form-coffee-2'),
    height = window.innerHeight,
    app_program = d.querySelector('.app-program').offsetTop - height,
    app_gallery = d.querySelector('.app-gallery').offsetTop,
    app_program_sec = d.querySelector('.app-program'),
    app_gallery_sec = d.querySelector('.app-gallery'),
    app_testimonials_sec = d.querySelector('.app-testimonials'),
    app_partners_sec = d.querySelector('.app-partners'),
    footer_sec = d.querySelector('footer'),
    js_btn1 = d.getElementsByClassName('js-btn1'),
    js_btn2 = d.getElementsByClassName('js-btn2'),
    js_btn3 = d.getElementsByClassName('js-btn3'),
    js_btn4 = d.getElementsByClassName('js-btn4'),
    js_btn5 = d.querySelector('.js-btn5'),
    hamburger = d.querySelector('.hamburger'),
    nav = d.querySelector('header .nav');

var slider_options_default = {
    wrapAround: true,
    pageDots: false,
    cellAlign: 'left',
    contain: true,
    arrowShape: 'M0,16.1c0-0.6,0.2-1.1,0.6-1.6L14.2,0.7c0.9-0.9,2.3-0.9,3.1,0c0.9,0.9,0.9,2.3,0,3.2l-12,12.2l12,12.2 c0.9,0.9,0.9,2.3,0,3.2c-0.9,0.9-2.3,0.9-3.1,0L0.6,17.7C0.2,17.2,0,16.6,0,16.1z'
};

hamburger.addEventListener('click', function () {

    if (hamburger.classList.contains('hamburger-close')) {
        hamburger.classList.remove("hamburger-close");
        nav.style.display = 'none';
    } else {
        hamburger.classList.add("hamburger-close");
        nav.style.display = 'block';
    }
});

function newSlider(selector, options) {
    options = options !== undefined ? Object.assign({}, slider_options_default, options) : slider_options_default;
    return new Flickity(d.querySelector(selector), options);
}

newSlider('.testimonials-slider', { autoPlay: 4000, pageDots: true });
newSlider('.partners-slider', { autoPlay: 6000 });
var gallery_flkty = newSlider('.gallery-slider', { imagesLoaded: true, percentPosition: false, autoPlay: false, wrapAround: false, prevNextButtons: false });

function updateStatus() {
    var slideCurrent = d.querySelector('.slide-current');
    var slideNumber = gallery_flkty.selectedIndex + 1;
    if (slideNumber > 10) {
        return false;
    }
    slideCurrent.textContent = slideNumber;
}

updateStatus();
gallery_flkty.on('select', updateStatus);

slidePrev.addEventListener('click', function () {
    gallery_flkty.previous();
});
slideNext.addEventListener('click', function () {
    gallery_flkty.next();
});

var app_form = d.querySelector('.app-form').offsetTop;

window.addEventListener('scroll', function () {

    if (window.scrollY > 0) {
        header.classList.add("fixed");
    } else {
        header.classList.remove("fixed");
    }

    function transform(element, scroll) {
        element.style.transform = 'translateY(' + scroll + 'px)';
    }

    var scrollTop = window.pageYOffset || d.documentElement.scrollTop;

    transform(app_top_coffee, scrollTop / 4);
    transform(app_program_coffee_1, scrollTop / 2);

    if (scrollTop > app_program) {
        transform(app_program_coffee_2, scrollTop / 3);
    }
    if (scrollTop > app_gallery - height) {
        var offset1 = Math.min(scrollTop - app_gallery + height - 300);
        transform(app_gallery_coffee_1, offset1 / 6);
        transform(app_gallery_coffee_2, offset1 / 7);
    }
    if (scrollTop > app_form - height) {
        var offset2 = Math.min(scrollTop - app_form + height - 300);
        transform(app_form_coffee_1, offset2 / 7);
        transform(app_form_coffee_2, offset2 / 3);
    }
});

function tabOpen(event, tabName) {
    event.preventDefault();
    var i = void 0;
    var tab_content = d.getElementsByClassName("tab-content");
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = tab_content[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var tabs = _step.value;

            tabs.style.display = "none";
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
            }
        } finally {
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }

    var tab_links = d.getElementsByClassName("tab-switch__link");

    var _iteratorNormalCompletion2 = true;
    var _didIteratorError2 = false;
    var _iteratorError2 = undefined;

    try {
        for (var _iterator2 = tab_links[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var links = _step2.value;

            links.className = links.className.replace(" active", "");
        }
    } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion2 && _iterator2.return) {
                _iterator2.return();
            }
        } finally {
            if (_didIteratorError2) {
                throw _iteratorError2;
            }
        }
    }

    d.getElementById(tabName).style.display = "block";
    event.currentTarget.className += " active";
}

function scrollTo(element, to, duration) {
    if (duration <= 0) return;
    var difference = to - element.scrollTop;
    var perTick = difference / duration * 10;

    setTimeout(function () {
        element.scrollTop = element.scrollTop + perTick;
        if (element.scrollTop === to) return;
        scrollTo(element, to, duration - 10);
    }, 10);
}

function scrollingItem(button, section) {
    var _iteratorNormalCompletion3 = true;
    var _didIteratorError3 = false;
    var _iteratorError3 = undefined;

    try {
        for (var _iterator3 = button[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
            var but = _step3.value;

            but.addEventListener('click', function () {
                scrollTo(d.body, section.offsetTop, 400);
            });
        }
    } catch (err) {
        _didIteratorError3 = true;
        _iteratorError3 = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion3 && _iterator3.return) {
                _iterator3.return();
            }
        } finally {
            if (_didIteratorError3) {
                throw _iteratorError3;
            }
        }
    }
}

scrollingItem(js_btn1, app_program_sec);
scrollingItem(js_btn2, app_gallery_sec);
scrollingItem(js_btn3, app_testimonials_sec);
scrollingItem(js_btn4, footer_sec);

js_btn5.addEventListener('click', function () {
    scrollTo(d.body, app_partners_sec.offsetTop, 400);
});

scrool_down.addEventListener('click', function () {
    scrollTo(d.body, app_program_sec.offsetTop, 400);
});