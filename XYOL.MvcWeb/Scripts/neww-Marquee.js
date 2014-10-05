/*jilei.liu*/

function Tab(hot, container, on_class) {
    on_class = on_class || 'on';
    hot.mouseenter(function () {
        var i = $(this).index();
        $(this).parent().children().not($(this).addClass(on_class)).removeClass(on_class);
        container.not($(container.get(i)).show()).hide();
    });
}

//autoSlide
function autoSlide(tabs, targets, delay, on_class) {
    delay = delay || 3000;
    on_class = on_class || 'on';
    var num = targets.length;
    function slide() {
        var i = tabs.index(tabs.parent().find('.' + on_class + ''));
        return window.setInterval(function () {
            if (i == num) { i = 0; }
            tabs.not($(tabs.get(i)).addClass(on_class)).removeClass(on_class);
            targets.not($(targets.get(i)).show()).hide();
            i++;
        }, delay);
    }
    var auto = slide();
    targets.hover(function () {
        auto = clearInterval(auto);
    }, function () {
        auto = slide();
    });
    tabs.hover(function () {
        auto = clearInterval(auto);
    }, function () {
        auto = slide();
    });
}

//marquee start
function Marquee(scroller, onceTime) {
    onceTime = onceTime || 10;
    scroller.css('white-space', 'nowrap');
    var html = scroller.html();
    var conWidth = 0;
    scroller.children().each(function () { conWidth += $(this).width() });
    scroller.css({ left: 0, width: conWidth * 8 }).html(html + html);
    function scrollOnce() {
        scroller.css({ left: (parseFloat(scroller.css('left')) - 1) });
        if (parseFloat(scroller.css('left')) <= -(conWidth)) {
            scroller.css({ left: 0 });
        }
    }
    var scrollInterval = window.setInterval(function () { scrollOnce(); }, onceTime);
    scroller.hover(function () { scrollInterval = window.clearInterval(scrollInterval); }, function () {
        scrollInterval = window.setInterval(function () { scrollOnce(); }, onceTime);
    });
}
//marquee end

//photos scroll left-right start
eval(function (p, a, c, k, e, r) { e = function (c) { return c.toString(a) }; if (!''.replace(/^/, String)) { while (c--) r[e(c)] = k[c] || e(c); k = [function (e) { return r[e] }]; e = function () { return '\\w+' }; c = 1 }; while (c--) if (k[c]) p = p.replace(new RegExp('\\b' + e(c) + '\\b', 'g'), k[c]); return p }('a w(5){8 6=5.6;8 b=5.b;8 3=5.3;8 4=5.4;8 f=5.f;8 c=5.c;8 g=5.g;a h(){d(9(3.7(\'4\'))<0){4.l(\'i\').m(\'i\',n).o(c)}k{4.p(c)}d(9(3.7(\'4\'))>-(9(3.7(\'j\'))-(6*b))){f.l(\'i\').m(\'i\',q).o(c)}k{f.p(c)}}a n(e){e.r();d(9(3.7(\'4\'))<0){3.s({4:\'+=\'+(6*b)},t,a(){h()})}}a q(e){e.r();d(9(3.7(\'4\'))>-(9(3.7(\'j\'))-(6*b))){3.s({4:\'-=\'+(6*b)},t,a(){h()})}}d(g==1){3.7(\'j\',6*3.u().v)}k d(g==2){3.7(\'j\',6*9((3.u().v+1)/2))}h()}', 33, 33, '|||container|left|parameter|spacing|css|var|parseInt|function|dispNum|off_class|if||right|row|checkStatus|click|width|else|unbind|one|leftClick|removeClass|addClass|rightClick|preventDefault|animate|500|children|length|scrollLandR'.split('|'), 0, {}))
//photos scroll left-right end

$(document).ready(function () {
    Tab($('.showtab a'), $('.show_box .showpic'));
    autoSlide($('.showtab a'), $('.show_box .showpic'));
    //Marquee($('#rtext'));
    Tab($('.s2 .tab .head li'), $('.s2 .tab .body'));

    //news-pic
    Tab($('.news-pic .f_pic .hot b'), $('.news-pic .f_pic li'));
    scrollLandR({
        spacing: 188,
        dispNum: 2,
        container: $('.news-pic .st_pic .box ul'),
        left: $('.news-pic .op .prev'),
        right: $('.news-pic .op .next'),
        off_class: 'off',
        row: 2
    });
});
//scrollDiv
function AutoScroll(obj) {
    $(obj).find("ul:first").animate({
        marginTop: "-25px"
    }, 500, function () {
        $(this).css({ marginTop: "0px" }).find("li:first").appendTo(this);
    });
}
$(document).ready(function () {
    setInterval('AutoScroll("#scrollDiv")', 2000)
});


//scrollDiv
function AutoScroll1(obj) {
    $(obj).find("ul:first").animate({
        marginTop: "-25px"
    }, 500, function () {
        $(this).css({ marginTop: "0px" }).find("li:first").appendTo(this);
    });
}
$(document).ready(function () {
    setInterval('AutoScroll("#scrollDiv1")', 3500)
});

//switch class
$.switchClass = function (children, btn_next, btn_prev) {
    children.addClass('sw');
    btn_next.click(function () {
        children.each(function (i, o) {
            $(this).data('class', $(this).attr('class'));
            var next = $(o).next('.sw');
            var className = next.attr('class');
            if (next.length == 0) {
                next = children.first();
                className = next.data('class');
            }
            $(o).attr('class', className);
        });
    });
    btn_prev.click(function () {
        children.each(function (i, o) {
            $(o).data('class', $(o).attr('class'));
        })
        children.each(function (i, o) {
            var prev = $(o).prev('.sw');
            var className = prev.data('class');
            if (prev.length == 0) {
                prev = children.last();
                className = prev.attr('class');
            }
            $(o).attr('class', className);
        });
    });
};
$.switchClass($('.show_cont .sw'), $('.show_cont .go_right'), $('.show_cont .go_left'));