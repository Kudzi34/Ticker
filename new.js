(function() {
    var box = $("#box"); /*document.getElementById("box");*/
    var boxLeft = box.offset().left;
    var link = $("a"); /*document.getElementsByTagName("a");*/
    var reqId;
    function move() {
        boxLeft--;
        if (boxLeft < -link.eq(0).outerWidth()) {
            boxLeft += link.eq(0).outerWidth();
            link.eq(0).appendTo(box);
        }

        box.css({
            left: boxLeft + "px"
        });
        reqId = requestAnimationFrame(move);
    }

    move();

    box.on("mouseover", function() {
        cancelAnimationFrame(reqId);
    });
    /*box.addEventListener("mouseover", function() {
        cancelAnimationFrame(reqId);
    });*/
    link.on("mouseover", function(e) {
        $(e.target).css({
            "color": "green",
            "textDecoration": "underline"
        });
    });
    /*for (var i = 0; i < link.length; i++) {
        link[i].addEventListener("mouseover", function(e) {
            e.target.style.color = "green";
            e.target.style.textDecoration = "underline";
        });
    }*/
    box.on("mouseleave", function(e) {
        move();
        $(e.target).css({
            "color": "blue",
            "textDecoration": "none"
        });
    })//.off("mouseleave", function(e){
    //     console.log(e.target);
    //
    // });

    /*box.addEventListener("mouseleave", function() {
        move();
    });*/
    // for (var i = 0; i < link.length; i++) {
    //     link[i].addEventListener("mouseleave", function(e) {
    //         e.target.style.color = "blue";
    //         e.target.style.textDecoration = "none";
    //     });
    // }
})()
