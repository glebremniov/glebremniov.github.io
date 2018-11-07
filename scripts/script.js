$(function() {

    $('#vk').click(()=> window.open("https://goo.gl/28oyKM", "_blank"));
    $('#facebook').click(()=> window.open("https://goo.gl/AqxRWe", "_blank"));
    $('#instagram').click(()=> window.open("https://goo.gl/mYBh3E", "_blank"));
    $('#github').click(()=> window.open("https://goo.gl/nGAZaa", "_blank"));
    $('#linkedin').click(()=> window.open("https://goo.gl/NUDvGD", "_blank"));


    $('#arrow').click(scrollDown);
    $('#button_email').click(function() {
        const text = 'Do you want contact me?';
        let confirm = window.confirm(text);
        if (confirm) {
            window.open('mailto:remniov.work@gmail.com?subject=odinrossy.github.io', '_blank');
        }
    });
    $('#button_projects').click(function() {
        window.open('https://goo.gl/8ADu2B', '_blank');
    });

    let isScrolled = false;

    function scrollDown() {
        if (!isScrolled) {
            window.scroll({ top: 10000, left: 0, behavior: 'smooth' });
            isScrolled = true;
        } else {
            window.scroll({ top: 0, left: 0, behavior: 'smooth' });
            isScrolled = false;
        }
    }
});