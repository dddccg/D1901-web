(function () {

    var $subblock = $(".subpage"),
        $head = $subblock.find('h2'),
        $ul = $("#proinfo"),
        $lis = $ul.find("li"),
        inter = false;

    $head.mouseenter(function (e) {
        e.stopPropagation();
        if (!inter) {
            $ul.show();
        }
        inter = !inter;
    });
    $subblock.mouseleave(function (e) {
        e.stopPropagation();
        if (inter) {
            $ul.hide();
        }
        inter = !inter;
    });

    //			$ul.click(function(event){
    //				event.stopPropagation();
    //			});

    $(document).click(function () {
        $ul.hide();
        inter = !inter;
    });

    $lis.hover(function () {
        if (!$(this).hasClass('nochild')) {
            $(this).addClass("prosahover");
            $(this).find(".prosmore").removeClass('hide');
        }
    }, function () {
        if (!$(this).hasClass('nochild')) {
            if ($(this).hasClass("prosahover")) {
                $(this).removeClass("prosahover");
            }
            $(this).find(".prosmore").addClass('hide');
        }
    });

})();