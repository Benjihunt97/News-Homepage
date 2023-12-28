$(document).ready(() => {

    // open and close the menu
    function openMenu() {
        $('.main-list').animate({
            'right': '0',
        }, 700);

        $('body').css('background-color', 'rgba(30, 30, 30, 0.5)');
    }

    function closeMenu() {
        $('.main-list').animate({
            'right': '-100%',
        }, 700);
        $('body').css('background-color', 'transparent');
    }

    $('#open-menu').click(() => {
        openMenu();
    });

    $('#close-menu').click(() => {
        closeMenu();
    });

    $(window).on('resize', function () {
        let screenW = $(window).width();

        if (screenW >= 1000) {
            $('.hero-img').attr('src', 'https://github.com/Benjihunt97/News-Homepage/blob/main/images/image-web-3-desktop.jpg?raw=true');
        } else {
            $('.hero-img').attr('src', 'https://github.com/Benjihunt97/News-Homepage/blob/main/images/image-web-3-mobile.jpg?raw=true');
        }
    });

    // Trigger the resize event once to set the initial image based on the window size
    $(window).resize();
});
