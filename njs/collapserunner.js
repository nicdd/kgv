$(document).ready(function () {
    // Toggle plus minus icon on show hide of collapse element
    $(".collapse").on('show.bs.collapse', function (e) {

        $(e.target)
            .prev()
            .find("i:last-child")
            .toggleClass("fa-minus fa-plus");

        $openedAccordion = $('#' + e.target.id),
            $mainContent = $("#guts"),
            $pageWrap = $("#page-content-wrapper"),
            baseHeight = 0;

        $pageWrap.height($pageWrap.height());
        baseHeight = $pageWrap.height() - $mainContent.height() + $openedAccordion.height();

        $pageWrap.animate({
            height: baseHeight + $mainContent.height() + "px"
        });

    }).on('hide.bs.collapse', function (e) {

        $(e.target)
            .prev()
            .find("i:last-child")
            .toggleClass("fa-minus fa-plus");

        $openedAccordion = $('#' + e.target.id),
            $mainContent = $("#guts"),
            $pageWrap = $("#page-content-wrapper"),
            baseHeight = 0;

        $pageWrap.height($pageWrap.height());
        baseHeight = $pageWrap.height() - $mainContent.height() - $openedAccordion.height();

        $pageWrap.animate({
            height: baseHeight + $mainContent.height() + "px"
        });
    });
});