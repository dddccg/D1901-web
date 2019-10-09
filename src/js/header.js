function showHide(className) {
    $(className).hover(function () {
        $(this).find(".divshow").stop().show();
    }, function () {
        $(this).find(".divshow").stop().hide();
    });
}
showHide(".tools-left>.tools-left-text");
showHide(".tools-right>ul>li");