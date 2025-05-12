
$(document).ready(function(){
    $("#banner-slider").owlCarousel({
        items:1,
        dots:false,
    });
    $("#logo-slider").owlCarousel({
        items:3,
        loop:true,
        autoplay:1,
        dots:false,
    });
    $("#testimonial-owl-slider").owlCarousel({
        items:3,
        loop:true,
        autoplay:1,
        margin:20,
        center:true,
        dots:true,
        responsiveClass:true,
        responsive : {
        1440:{
            items:3,
        } ,
        1024:{
            items:3,
            center:false,
            dotsEach:true,
        },
        768:{
            items:2,
            center:false,
            dotsEach:true,
        },
        425:{
            items:1,
            center:false,
            dotsEach:true,
        },
        375:{
            items:1,
            center:false,
            dotsEach:true,
        },
        320:{
            items:1,
            center:false,
            dotsEach:true,
        },
            
    }
    });

    var owl = $('.owl-carousel');
    owl.owlCarousel();
    owl.on('changed.owl.carousel', function(event) {
        new WOW().init();
    })
    new WOW().init();
    
    function startCounting(elementId, start = 1, end = 1000, interval = 1000) {
        let current = start;
    
        const counterElement = document.getElementById(elementId);
    
        const intervalId = setInterval(() => {
            counterElement.textContent = current + " +";
            if (current >= end) {
                clearInterval(intervalId);
            } else {
                current++;
            }
        }, interval);
    }
    
    // Call the function for the four counters
    startCounting('counter1', 1, 45, 50);
    startCounting('counter2', 1, 20, 50);
    startCounting('counter3', 1, 80, 50);
    startCounting('counter4', 1, 25, 50);


     $("a.group").fancybox({
		'transitionIn'	:	'elastic',
		'transitionOut'	:	'elastic',
		'speedIn'		:	600, 
		'speedOut'		:	200, 
		'overlayShow'	:	false
});
    
});
// $(document).ready(function(){
//     $("#Art").owlCarousel({
//         items:1,
//     });

//     var owl = $('#Art');
//     owl.owlCarousel();
//     owl.on('changed.owl.carousel', function(event) {
//         new WOW().init();
//     })
//     new WOW().init();
// })