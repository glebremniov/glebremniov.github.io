
function scrollDown() {
    // window.scrollTo(0,document.body.scrollHeight);

    // Scroll to specific values
    // scrollTo is the same
    // window.scroll({
    //     top: 2500,
    //     left: 0,
    //     behavior: 'smooth'
    // });

    // Scroll certain amounts from current position
    // window.scrollBy({
    //     top: 200, // could be negative value
    //     left: 0,
    //     behavior: 'smooth'
    // });

    // Scroll to a certain element
    document.querySelector('footer').scrollIntoView({
        behavior: 'smooth'
    });

}
function YNconfirm(el,event){
    let confirm = window.confirm("Open default e-mail app to contact me?");
    if(confirm){
        window.location.href = $(el).attr("href");
    }
    else{
        event.preventDefault();
    }
}

function getValue() {
    let value1 = document.getElementById("button__log_in").value;
    alert(value1);
}