class Text {
    constructor(header,paragraph,youtube_link){
        this.header = header;
        this.paragraph = paragraph;
        this.youtube_link = youtube_link;
    }
}

function showPopup(text, shouldMoveDown = false) {
    let pop = document.getElementsByClassName("pop")[0];
    pop.style.display = "block";

    //ternary operator 
    pop.style.top = (shouldMoveDown) ? "216%" : "116%";
    
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
        "The world is rapidly changing. Huge advances in artificial intelligence, nanotechnology, robotics, digital biology, and 3D manufacturing are altering the world in unanticipated ways. Traditional university graduates are rarely exposed to this information, let alone given the skills to thrive in volatile, complex, and uncertain environments. ALU graduates develop a high-level understanding of these technologies and their implications, and they practice operating in a world that is full of ambiguity, complexity, and uncertainty.",
        "https://www.youtube.com/embed/ntoaCkn8ye8" );
    
    showPopup(text, true);
});

document.getElementById("nane").addEventListener("click", () => {
    let text = new Text(
        "Alignment With Passion",
        "Traditional universities rarely engage students in deep self-inquiry and self-discovery. At ALU, students have recurring opportunities to assess themselves and receive feedback from others. They have the opportunity to learn more about who they are, their strengths and weaknesses, and their passions and interests. They gain significant exposure to the greatest challenges in our world and the passionate leaders and mentors who are working on them. This repeated exposure allows students to become inspired by what is possible and learn which problems they are uniquely passionate about solving.",
        "https://www.youtube.com/embed/kM03K2HM_cU" );
    
    showPopup(text, true);
});

document.getElementById("tisa").addEventListener("click", () => {
    let text = new Text(
        "Foundational Knowledge and Post-University Preparedness",
        "Many of today’s universities are structured as “knowledge enterprises” rather than “skills enterprises.” As such, many do not focus on equipping students with the actual skills that employers seek. Recent studies indicate that 90% of employers believe that traditional university graduates are unprepared for the workplace. ALU students are prepared with the skills that are attractive to a wide range of potential employers. They are prepared to become innovators and entrepreneurs and to apply their unique perspectives and abilities to government, corporate, NGO, and nonprofit sectors.",
        "https://www.youtube.com/embed/4rYu-HUFlWE" );
    
    showPopup(text, true);
});

document.getElementById("kumi").addEventListener("click", () => {
    let text = new Text(
        "Missions Not Majors",
        "At traditional universities, students declare a major in a single academic discipline. Not so at ALU: rather, students declare a “mission” related to problems they want to solve. Instead of dedicating themselves to memorizing a specific body of facts and figures, ALU students dedicate themselves to solving real problems in the real world and acquire the skills and methods they need to solve them. They drive their own personalized educational journeys under the guidance of mentors and curate their learning experiences around the problems they want to solve.",
        "https://www.youtube.com/embed/mAN_r1K02uw" );
    
    showPopup(text, true);
});

document.getElementById("kumimoja").addEventListener("click", () => {
    let text = new Text(
        "Institutional Rationality",
        "The goal of traditional universities is to transfer knowledge to the next generation. ALU exists to create leaders: catalysts for change who will navigate a rapidly-evolving world. ALU graduates understand complex systems and are not boxed in by traditional disciplinary lines. ALU exists to develop leaders. Education is simply the means through which these leaders are developed—it is not the end in and of itself.",
        "https://www.youtube.com/embed/UjesfMeekJs" );
    
    showPopup(text, true);
});
