$(function () {

    var modal = document.getElementById('myModal');

    // Get the image and insert it inside the modal - use its "alt" text as a caption
    var images = document.querySelectorAll('.zoomable');
    var modalImg = document.getElementById("img01");
    var captionText = document.getElementById("caption");
    images.forEach((img) => {
        img.onclick = function () {
            let myactivetlitem = document.querySelector(".tl-item.tl-active");
            if (myactivetlitem)
                myactivetlitem.style.visibility = "hidden";
            // hide central left and right arrows
            let leftarrow = document.querySelector(".tl-items-arrow-left");
            if (leftarrow)
                leftarrow.style.display = "none";
            let rightarrow = document.querySelector(".tl-items-arrow-right");
            if (rightarrow)
                rightarrow.style.display = "none";
            // hide nav-wrapper (bottom left and right arrows)
            let navwrapper = document.querySelector(".tl-nav-wrapper");
            if (navwrapper)
                navwrapper.style.display = "none";

            modal.style.display = "block";
            modalImg.src = this.src;
            captionText.innerHTML = this.alt;
        }
    })


    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks on <span> (x), close the modal
    span.onclick = function () {
        let myactivetlitem = document.querySelector(".tl-item.tl-active");
        if (myactivetlitem)
            myactivetlitem.style.visibility = "visible";
        // show central left and right arrows again
        let leftarrow = document.querySelector(".tl-items-arrow-left");
        if (leftarrow)
            leftarrow.style.display = "block";
        let rightarrow = document.querySelector(".tl-items-arrow-right");
        if (rightarrow)
            rightarrow.style.display = "block";
        // show nav-wrapper (bottom left and right arrows) again
        let navwrapper = document.querySelector(".tl-nav-wrapper");
        if (navwrapper)
            navwrapper.style.display = "block";

        modal.style.display = "none";
    }



});