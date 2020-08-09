class Texts {
    constructor(header,paragraph,youtube_link){
        this.header = header;
        this.paragraph = paragraph;
        this.youtube_link = youtube_link;
    }
}

let writings_texts = [
    new Texts(
        "Experience University Like Never Before",
        "African Leadership College (ALC) in Mauritius offers accredited undergraduate degree programmes through its founding academic partner, Glasgow Caledonian University in a stunning setting.",
        "https://www.youtube.com/embed/WIH1W9z_5Fs"),

    new Texts(
        "Welcome to The African Leadership University",
        "Join a group of innovative young African leaders in solving some of Africa's challenges ",
        "https://www.youtube.com/embed/Paap6LOeGzc"),

    new Texts(
            "On Becoming ALC", 
            "Hear from some of our Inaugural students what their experience at ALC in Mauritius has been and what this journey meant to them",
            "https://www.youtube.com/embed/SZVpSAZ0iVE"),

    new Texts(
        "ALC Mauritius Campus",
        "Get a preview of our campus infrastructure and the beautiful Island of Mauritius",
        "https://www.youtube.com/embed/3ES0lurL03M")
    
        
];

let slideshow_index = 0;
let cloned_node = null;
let is_handled = false;
let intervalId = null;
function moveRight() {
    videos.classList.add("moveright");
    writings.classList.add("moveright");
    is_handled = false;
    cloned_node = videos.querySelector("iframe").cloneNode(true);
    let index = slideshow_index + 1;

    if (index == writings_texts.length){
        index = 0;
    }
    let next_text = writings_texts[index];
    cloned_node.setAttribute("src", next_text.youtube_link);
}
function setup(event) {
    if (intervalId) {
        window.clearInterval(intervalId);
        intervalId = null;

        window.setInterval(moveRight, 20000);
    }
}
function setHidden(event) {
    let element = event.currentTarget;
    if (element.className.includes("moveright")) {
       element.classList.remove("moveright");

       if (!is_handled) {
            is_handled = true;
            slideshow_index++;
            if (slideshow_index == writings_texts.length) {
                slideshow_index = 0;
                
            }
            let text = writings_texts[slideshow_index];
            writings.querySelector("h1").textContent = text.header;
            writings.querySelector("p").textContent = text.paragraph;

            videos.querySelector("iframe").replaceWith(cloned_node);

       }

       element.classList.add("appear");
    }  
    else if (element.className.includes("appear")){
        element.classList.remove("appear");
    }
}

let videos = document.getElementsByClassName("videos")[0];
videos.addEventListener("animationend", setHidden, true);

videos.addEventListener("animationstart", setup, true);

let writings = document.getElementsByClassName("writings")[0];
writings.addEventListener("animationend", setHidden, true);

intervalId = window.setInterval(moveRight, 10000);

let searchIsVisible = false;
document.getElementById("srch").addEventListener("click", () =>{
    let input = document.getElementById("inpt");
    let value = "flex";
    if (searchIsVisible) {
        value = "none";
    }
    searchIsVisible = !searchIsVisible;
    input.style.display = value;
});
