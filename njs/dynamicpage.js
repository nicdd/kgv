$(function () {

    var newHash = "",
        $mheader = $('#header'),
        $pageWrap = $("#page-content-wrapper"),
        $mainContent = $("#guts"),
        $mfooter = $('#footer'),
        $samtPage = $('html'),
        baseHeight = 0,
        $el;

        
    $pageWrap.height($pageWrap.height());
    baseHeight = () => {return $samtPage.height() - $mheader.height() - $mfooter.height()};

    $("nav").delegate("a", "click", function () {
        window.location.hash = $(this).attr("href");
        return false;
    });



    $(window).bind('hashchange', function () {
        // console.log('last heightdynamic html.height:' + $samtPage.height() + ' baseHeight:' + baseHeight())
        // console.log('last heightdynamic header.height:' + $mheader.height() + ' footer.height:' + $mfooter.height())
        // console.log('last heightdynamic $pageWrap.height:' + $pageWrap.height() + ' $mainContent:' + $mainContent.height())
        newHash = window.location.hash.substring(1);
        if (newHash) {
            $mainContent.fadeOut(200, function () {
                $mainContent.hide().load(newHash, function () {
                    $mainContent.fadeIn(200, function () {
                        $pageWrap.animate({
                            height: Math.max( baseHeight(), $mainContent.height()) + "px"
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
        // console.log('aktuell heightdynamic html.height:' + $samtPage.height() + ' baseHeight:' + baseHeight())
        //     console.log('aktuell heightdynamic header.height:' + $mheader.height() + ' footer.height:' + $mfooter.height())
        //     console.log('aktuell heightdynamic $pageWrap.height:' + $pageWrap.height() + ' $mainContent:' + $mainContent.height())

    });

    $(window).trigger('hashchange');

});