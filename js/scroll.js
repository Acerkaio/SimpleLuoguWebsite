function getScrollTop() {
    var scrollPos;
    if (window.pageYOffset)
    {
        scrollPos = window.pageYOffset;
    }
    else if (document.compatMode && document.compatMode != 'BackCompat')
    {
        scrollPos = document.documentElement.scrollTop;
    }
    else if (document.body)
    {
        scrollPos = document.body.scrollTop;
    }
    return scrollPos;
 }
 var flag_of_scroll = 0;
 window.onscroll = function () {
    var w = window.innerWidth;
    var h = window.innerHeight;
    document.documentElement.style.setProperty('--windowW', w + "px");
    document.documentElement.style.setProperty('--windowH', h + "px");
    let scrollPos = getScrollTop();
    if (scrollPos < (h / 1.8)) {
        flag_of_scroll = 0;
        document.documentElement.style.setProperty('--nd-img', "260px");
    }
    if (scrollPos >= (h / 1.8) && flag_of_scroll == 0) {
        //window.alert(scrollPos);
        document.documentElement.style.setProperty('--nd-img', "480px");
        flag_of_scroll = 1;
    }
    //console.log("scrollPos：",scrollPos);
    /*if (scrollPos == 0) {
        alert("页面已到顶部")
    }*/
}
