let isScrolled = false;
let arrow = document.getElementById("arrow").addEventListener("click", scrollDown);

function scrollDown() {
    if (!isScrolled){
        document.querySelector('footer').scrollIntoView({
            behavior: 'smooth'
        });
        isScrolled = true;
    }
    else {
        document.querySelector('header').scrollIntoView({
            behavior: 'smooth'
        });
        isScrolled = false;
    }
}

function confirmation(el, event, text){
    let confirm = window.confirm(text);
    if(confirm){
        window.location.href = $(el).attr("href");
    }
    else{
        event.preventDefault();
    }
}