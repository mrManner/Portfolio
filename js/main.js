 
// Smooth scroll for navigation and stuff 

window.smoothScroll = function(target) {
    var scrollContainer = target;
    do { //find scroll container
        scrollContainer = scrollContainer.parentNode;
        if (!scrollContainer) return;
        scrollContainer.scrollTop += 1;
    } while (scrollContainer.scrollTop == 0);

    var targetY = 0;
    do { //find the top of target relatively to the container
        if (target == scrollContainer) break;
        targetY += target.offsetTop;
    } while (target = target.offsetParent);

    scroll = function(c, a, b, i) {
        i++; if (i > 30) return;
        c.scrollTop = a + (b - a) / 30 * i;
        setTimeout(function(){ scroll(c, a, b, i); }, 20);
    }
    // start scrolling
    scroll(scrollContainer, scrollContainer.scrollTop, targetY, 0);
}       

//Fade effect on arrow nav

    $(window).scroll(function(){
    $(".fade").css("opacity", 1 - $(window).scrollTop() / 400);
  });

// For the grid
$(function() {
				Grid.init();
			});

//Hidden dropdown on work
$(document).ready(function(){
    $("#hide").click(function(){
        $("#more").hide();
        $("#show").show();
        
    });
    $("#show").click(function(){
        $("#more").show();
        $("#show").hide();
        
    });
});

//Show video on top of projectpages


$(document).ready(function(){
    $("#play-video").click(function(){
        $("#project2-start-section").replaceWith('<iframe class="main-video" id="video-top" src="https://player.vimeo.com/video/187321008?autoplay=1&color=fff700&title=0&byline=0&portrait=0" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen & autoplay=1></iframe>');
    });
});


$(document).ready(function(){
    $("#play-video").click(function(){
        $("#project3-start-section").replaceWith('<iframe class="main-video" id="video-top" src="https://player.vimeo.com/video/207461458?autoplay=1&color=fff700&title=0&byline=0&portrait=0" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>');
    });
});

$(document).ready(function(){
    $("#play-video").click(function(){
        $("#project4-start-section").replaceWith('<iframe class="main-video" id="video-top"  src="https://player.vimeo.com/video/217461169?autoplay=1&color=fff700&title=0&byline=0&portrait=0" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>');
    });
});

$(document).ready(function(){
    $("#play-video").click(function(){
        $("#project5-start-section").replaceWith('<iframe class="main-video" id="video-top" src="https://player.vimeo.com/video/195779701?autoplay=1&color=fff700&title=0&byline=0&portrait=0" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>');
    });
});



$(document).ready(function(){
    $("#play-video").click(function(){
        $("#project6-start-section").replaceWith('<iframe class="main-video" id="video-top" src="https://player.vimeo.com/video/191190164?autoplay=1&color=fff700&title=0&byline=0&portrait=0" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>');
    });
});

$(document).ready(function(){
    $("#play-video").click(function(){
        $("#project7-start-section").replaceWith('<iframe class="main-video" id="video-top" src="https://player.vimeo.com/video/221398686?autoplay=1&color=fff700&title=0&byline=0&portrait=0" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>');
    });
});