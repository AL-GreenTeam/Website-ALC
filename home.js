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
        "Join  a group of innovative african leaders ready to become change makers. We are an institution aimed at creating leaders with the ability to influence and bring change to the continent. We train our students to tackle our seven global challenges which include Urbanization, Education, Healthcare, Infrastructure, Job Creation, Governance and Climate Change. ",
        "https://www.youtube.com/embed/Paap6LOeGzc"),

    new Texts(
            "On Becoming ALC", 
            "Hear from some of our Inaugural students what their experience at ALC in Mauritius has been and what this journey meant to them",
            "https://www.youtube.com/embed/SZVpSAZ0iVE"),

    new Texts(
        "ALC Mauritius Campus",
        "Our campus located on the island paradise of Mauritius provides a serene environment to our future leaders for learning and is located in close vicinity to the island capital of Port Louis where our students can experience the rich culture of the native citizens",
        "https://www.youtube.com/embed/3ES0lurL03M")
    
        
];

let slideshow_index = 0;
let cloned_node = null;
let handled_objects = 0;
let intervalId = null;
function move(isLeft) {
    let direction_class = "moveright";
    let index = slideshow_index - 1;
    if (isLeft) {
        direction_class = "moveleft";
        index = slideshow_index +1;
    }

    videos.classList.add(direction_class);
    writings.classList.add(direction_class);
    handled_objects = 0;
    cloned_node = videos.querySelector("iframe").cloneNode(true);
    

    if (index == writings_texts.length){
        index = 0;
    } else if (index < 0) {
        index = writings_texts.length - 1; 
    }

    let next_text = writings_texts[index];
    cloned_node.setAttribute("src", next_text.youtube_link);
}

let animation_IntervalId = null;
function set_Interval() {
    animation_IntervalId = window.setInterval(move,20000, true);
}

function setup(event) {
    if (intervalId) {
        window.clearInterval(intervalId);
        intervalId = null;

        set_Interval();
    }
}
function setHidden(event) {
    let element = event.currentTarget;
    let className = element.className;
    if (className.includes("moveleft") || className.includes("moveright")) {
        handled_objects++ ;
        let fromLeft = false;
        if (element.className.includes("moveleft")) {
            element.classList.remove("moveleft");
        }else if (element.className.includes("moveright")) {
            element.classList.remove("moveright");
            fromLeft = true;
        }

        if (handled_objects === 1) {
            slideshow_index += (fromLeft) ? -1 : 1;
            if (slideshow_index == writings_texts.length) {
                slideshow_index = 0;   
            } else if (slideshow_index < 0) {
                slideshow_index = writings_texts.length -1; 
            }
            let text = writings_texts[slideshow_index];
            writings.querySelector("h1").textContent = text.header;
            writings.querySelector("p").textContent = text.paragraph;

            videos.querySelector("iframe").replaceWith(cloned_node);
        }

        
        if (fromLeft) {
            element.classList.add("appearfromleft"); 
        } else {
            element.classList.add("appearfromright");
        }
       
    } else if (element.className.includes("appearfromleft")){
        element.classList.remove("appearfromleft");
    }else if (element.className.includes("appearfromright")){
        element.classList.remove("appearfromright");
    }
}

let videos = document.getElementsByClassName("videos")[0];
videos.addEventListener("animationend", setHidden, true);

videos.addEventListener("animationstart", setup, true);

let writings = document.getElementsByClassName("writings")[0];
writings.addEventListener("animationend", setHidden, true);

intervalId = window.setInterval(move, 10000, true);

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

document.getElementById("left_btn").addEventListener("click", () =>{
    window.clearInterval(animation_IntervalId);
    move(true);
    set_Interval();
});

document.getElementById("right_btn").addEventListener("click", () =>{
    window.clearInterval(animation_IntervalId);
    move(false);
    set_Interval();
});