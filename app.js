// Footer

const getyear = $('#getyear');
const getFullYear = new Date().getUTCFullYear();
getyear.text(getFullYear);  

// progress

$(window).scroll(function() {
    var getprogress = $("#progresses");
    var getprogressval = $("#progressvalues");
    var getscrolltop = $(this).scrollTop();

    var getscrollheight = $(document).height();
    var getclientheight = $(window).height();

    var calcheight = getscrollheight - getclientheight;

    var getfinalheight = Math.round(getscrolltop * 100 / calcheight )

    getprogressval.text(`${getfinalheight}%`);

   
    getprogress.css({
        "background" :`conic-gradient(green ${getfinalheight}%, #aaa ${getfinalheight}%)`
    })
})