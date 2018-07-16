$(function () {

// Options for your slider 
    var speed = 500;     //fade speed
    var autoswitch = true;          //auto-slider options
    var autoswitchSpeed = 4000;    ///auto-slider speed



// add initial active class
    $(".slide").first().addClass("active");

// Hide all slides
    $(".slide").hide();

// Show first slide
    $(".active").show();

// Next Handler
    $("#next").on("click", nextSlide);
// Previous Handler 
    $("#previous").on("click",previousSlide);

// Autoslider Handler
    if( autoswitch == true) {
        setInterval(nextSlide, autoswitchSpeed);
    };

// Switch to the next slide
    function nextSlide() {
        $(".active").removeClass("active").addClass("oldActive");
        //so that when you've reached the last slide, you'll see the first slide if you hit next
        if($(".oldActive").is(":last-child")){     
            $(".slide").first().addClass("active");
        } else{
            $(".oldActive").next().addClass("active"); //add the active class to the next sibling of what's been selected, $(".oldActive")
        };
        $(".oldActive").removeClass("oldActive");
        $(".slide").fadeOut(speed);
        $(".active").fadeIn(speed);
    };

    function previousSlide() {
        $(".active").removeClass("active").addClass("oldActive");
        //so that when you've reached the last slide, you'll see the first slide if you hit next
        if($(".oldActive").is(":first-child")){     
            $(".slide").last().addClass("active");
        } else{
            $(".oldActive").prev().addClass("active"); //add the active class to the next sibling of what's been selected, $(".oldActive")
        };
        $(".oldActive").removeClass("oldActive");
        $(".slide").fadeOut(speed);
        $(".active").fadeIn(speed);
    };

});