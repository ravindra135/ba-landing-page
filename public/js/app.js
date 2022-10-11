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
    
    typingMain();
});

function typingMain() {
    let type = new Typed(
        "#typed", {
            strings:["Battle Arena."],
            typeSpeed:220,
            showCursor:true,
            cursorChar: '|',
            autoInsertCss: true,
            startDelay:500,
        },
    );
}