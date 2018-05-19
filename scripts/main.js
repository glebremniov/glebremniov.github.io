let isScrolled = false;
function scrollDown() {

    let arrow = document.getElementById("arrow");

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

function getValue() {
    let value1 = document.getElementById("button__log_in").value;
    // alert(value1);
}