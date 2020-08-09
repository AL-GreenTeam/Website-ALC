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
        "ALU prioritizes the development of 21st century skills—things like self-leading, leading others, entrepreneurial thinking, quantitative reasoning, critical thinking, managing complex projects, and communication. Most universities hope that students pick up some of these skills during their education. At ALU, we intentionally and explicitly develop these skills in students through practice, on-the-job experience, coaching, and regular feedback",
        "https://www.youtube.com/embed/IvU2XAGEZlE" );
    
    showPopup(text);
});
document.getElementById("mbili").addEventListener("click", () => {
    let text = new Text(
        "Personalized Learning",
        "ALU students become part of a talented, diverse community from around the world. They are surrounded by driven, talented, and passionate classmates. They are exposed to ALU’s unique and powerful network of mentors, guest speakers, experts-in-residence, industry leaders, investors, ALU staff, and employers. They participate in events like the African Leadership Network and are provided opportunities to attend conferences where they can meet a broader set of influential people.",
        "https://www.youtube.com/embed/RzsOdlB6eZc" );
    
    showPopup(text);
});
document.getElementById("tatu").addEventListener("click", () => {
    let text = new Text(
        "Values and Character",
        "ALU students become part of a talented, diverse community from around the world. They are surrounded by driven, talented, and passionate classmates. They are exposed to ALU’s unique and powerful network of mentors, guest speakers, experts-in-residence, industry leaders, investors, ALU staff, and employers. They participate in events like the African Leadership Network and are provided opportunities to attend conferences where they can meet a broader set of influential people.",
        "https://www.youtube.com/embed/GRx86CecVM0" );
    
    showPopup(text);
});

document.getElementById("nne").addEventListener("click", () => {
    let text = new Text(
        "Career Development And Work Experience",
        "ALU students become part of a talented, diverse community from around the world. They are surrounded by driven, talented, and passionate classmates. They are exposed to ALU’s unique and powerful network of mentors, guest speakers, experts-in-residence, industry leaders, investors, ALU staff, and employers. They participate in events like the African Leadership Network and are provided opportunities to attend conferences where they can meet a broader set of influential people.",
        "https://www.youtube.com/embed/sP-skltRzF4" );
    
    showPopup(text);
});

document.getElementById("tano").addEventListener("click", () => {
    let text = new Text(
        "A Network",
        "ALU students become part of a talented, diverse community from around the world. They are surrounded by driven, talented, and passionate classmates. They are exposed to ALU’s unique and powerful network of mentors, guest speakers, experts-in-residence, industry leaders, investors, ALU staff, and employers. They participate in events like the African Leadership Network and are provided opportunities to attend conferences where they can meet a broader set of influential people.",
        "https://www.youtube.com/embed/aWkB39AwD8E" );
    
    showPopup(text);
});

document.getElementById("sita").addEventListener("click", () => {
    let text = new Text(
        "Stamp Of Approval",
        "ALU students become part of a talented, diverse community from around the world. They are surrounded by driven, talented, and passionate classmates. They are exposed to ALU’s unique and powerful network of mentors, guest speakers, experts-in-residence, industry leaders, investors, ALU staff, and employers. They participate in events like the African Leadership Network and are provided opportunities to attend conferences where they can meet a broader set of influential people.",
        "https://www.youtube.com/embed/dm181a4_65g" );
    
    showPopup(text);
});

document.getElementById("saba").addEventListener("click", () => {
    let text = new Text(
        "Preparation For an Uncertain World",
        "ALU students become part of a talented, diverse community from around the world. They are surrounded by driven, talented, and passionate classmates. They are exposed to ALU’s unique and powerful network of mentors, guest speakers, experts-in-residence, industry leaders, investors, ALU staff, and employers. They participate in events like the African Leadership Network and are provided opportunities to attend conferences where they can meet a broader set of influential people.",
        "https://www.youtube.com/embed/dm181a4_65g" );
    
    showPopup(text);
});

document.getElementById("nane").addEventListener("click", () => {
    let text = new Text(
        "Alignment With Passion",
        "ALU students become part of a talented, diverse community from around the world. They are surrounded by driven, talented, and passionate classmates. They are exposed to ALU’s unique and powerful network of mentors, guest speakers, experts-in-residence, industry leaders, investors, ALU staff, and employers. They participate in events like the African Leadership Network and are provided opportunities to attend conferences where they can meet a broader set of influential people.",
        "https://www.youtube.com/embed/dm181a4_65g" );
    
    showPopup(text);
});

document.getElementById("tisa").addEventListener("click", () => {
    let text = new Text(
        "Foundational Knowledge and Post-University Preparedness",
        "ALU students become part of a talented, diverse community from around the world. They are surrounded by driven, talented, and passionate classmates. They are exposed to ALU’s unique and powerful network of mentors, guest speakers, experts-in-residence, industry leaders, investors, ALU staff, and employers. They participate in events like the African Leadership Network and are provided opportunities to attend conferences where they can meet a broader set of influential people.",
        "https://www.youtube.com/embed/dm181a4_65g" );
    
    showPopup(text);
});

document.getElementById("kumi").addEventListener("click", () => {
    let text = new Text(
        "Missions Not Majors",
        "ALU students become part of a talented, diverse community from around the world. They are surrounded by driven, talented, and passionate classmates. They are exposed to ALU’s unique and powerful network of mentors, guest speakers, experts-in-residence, industry leaders, investors, ALU staff, and employers. They participate in events like the African Leadership Network and are provided opportunities to attend conferences where they can meet a broader set of influential people.",
        "https://www.youtube.com/embed/dm181a4_65g" );
    
    showPopup(text);
});

document.getElementById("kumimoja").addEventListener("click", () => {
    let text = new Text(
        "Institutional Rationality",
        "ALU students become part of a talented, diverse community from around the world. They are surrounded by driven, talented, and passionate classmates. They are exposed to ALU’s unique and powerful network of mentors, guest speakers, experts-in-residence, industry leaders, investors, ALU staff, and employers. They participate in events like the African Leadership Network and are provided opportunities to attend conferences where they can meet a broader set of influential people.",
        "https://www.youtube.com/embed/dm181a4_65g" );
    
    showPopup(text);
});
