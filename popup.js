class Text {
    constructor(header,paragraph,youtube_link){
        this.header = header;
        this.paragraph = paragraph;
        this.youtube_link = youtube_link;
    }
}

function showPopup(text) {
    let pop = document.getElementsByClassName("pop")[0];
    pop.style.display = "block";

    let popupvid = document.getElementsByClassName("popupvid")[0];
    popupvid.querySelector("iframe").setAttribute("src", text.youtube_link);

    let popupwrite = document.getElementsByClassName("popupwrite")[0];
    popupwrite.querySelector("h1").textContent = text.header;
    popupwrite.querySelector("p").textContent = text.paragraph;
}

function closepopup() {
    let pop = document.getElementsByClassName("pop")[0];
    pop.style.display = "none";
}

document.getElementById("funga").addEventListener("click", closepopup);

document.getElementById("moja").addEventListener("click", () => {
    let text = new Text(
        "21st Century Skills",
        "ALU prioritizes the development of 21st century skills—things like self-leading, leading others, entrepreneurial thinking, quantitative reasoning, critical thinking, managing complex projects, and communication. Most universities hope that students pick up some of these skills during their education. At ALU, we intentionally and explicitly develop these skills in students through practice, on-the-job experience, coaching, and regular feedback.This approach is designed to augment academic theory and provide you with the development you need to remain relevant in an ever-changing world. With these Meta Skills, you’ll answer questions like “Who do I lead?” and “How do I lead?”At ALU, you’ll prepare for jobs that haven’t even been created yet.",
        "https://www.youtube.com/embed/IvU2XAGEZlE" );
    
    showPopup(text);
});