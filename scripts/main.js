$(function() {
    $('#arrow').click(scrollDown);
    $('#button_email').click(function() {
        let text = 'Open default e-mail app to contact me?';
        let confirm = window.confirm(text);
        if (confirm) {
            openWindow('mailto:remniov.work@gmail.com?subject=Hey,Od1n!', '_blank');
        }
    });
    $('#button_projects').click(function() {
        openWindow('pages/page1.html', '_blank');
    });

    let isScrolled = false;

    function scrollDown() {
        if (!isScrolled) {
            document.querySelector('footer').scrollIntoView({
                behavior: 'smooth'
            });
            
            isScrolled = true;
        } else {
            document.querySelector('header').scrollIntoView({
                behavior: 'smooth'
            });
            isScrolled = false;
        }
    }
});

function openWindow(src, target) {
    window.open(src, target);
}