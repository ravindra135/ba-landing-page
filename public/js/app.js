$(function () {
    
    // Wow
    new WOW(
        {
            boxClass:     'wow',      // default
            animateClass: 'animate__animated', // default
            offset:       0,          // default
            mobile:       true,       // default
            live:         true        // default
        }
    ).init();
    // lax.init()

    // // Add a driver that we use to control our animations
    // lax.addDriver('scrollY', function () {
    //   return window.scrollY
    // })

    // // Add animation bindings to elements
    // lax.addElements('.selector', {
    //   scrollY: {
    //     translateX: [
    //       ["elInY", "elCenterY", "elOutY"],
    //       [0, 'screenWidth/2', 'screenWidth'],
    //     ]
    //   }
    // })
    
});