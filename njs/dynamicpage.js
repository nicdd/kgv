$(function () {

    var newHash = "",
        // $mheader = $('#header'),
        $mainContent = $("#guts"),
        $pageWrap = $("#page-content-wrapper"),
        baseHeight = 0,
        $el;

    $pageWrap.height($pageWrap.height());
    baseHeight = $pageWrap.height() - $mainContent.height();

    $("nav").delegate("a", "click", function () {
        window.location.hash = $(this).attr("href");
        return false;
    });



    $(window).bind('hashchange', function () {

        newHash = window.location.hash.substring(1);
        if (newHash) {
            $mainContent.fadeOut(200, function () {
                $mainContent.hide().load(newHash, function () {
                    $mainContent.fadeIn(200, function () {
                        $pageWrap.animate({
                            height: baseHeight + $mainContent.height() + "px"
                        });
                    });
                    let vpwidth = $(window).width();
                    let isToggled = $("#wrapper").hasClass("toggled");

                    if (vpwidth < 768 && isToggled) {
                        $("#wrapper").toggleClass("toggled");
                    }

                    //$("a").removeClass("current");
                    let foundAll = window.document.getElementsByClassName('navbutton');

                    if (foundAll && Array.isArray(foundAll)) {
                        // toDo dies nur aufs nötigste einschränken
                        foundAll.forEach((ana) => {
                            console.log('ana gefunden id')
                            ana.removeClass("current");
                            if (ana.href === newHash) {
                                ana.addClass("current");
                            }
                        })
                    }

                });
            });
        };

    });

    $(window).trigger('hashchange');

});