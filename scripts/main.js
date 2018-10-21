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
            window.scroll({ top: 10000, left: 0, behavior: 'smooth' });
            isScrolled = true;
        } else {
            window.scroll({ top: 0, left: 0, behavior: 'smooth' });
            isScrolled = false;
        }
    }
});

function openWindow(src, target) {
    window.open(src, target);
}