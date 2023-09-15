AOS.init();

//  Work experience cards

const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "Software Engineer (Freelance)",
    cardImage: "assets/images/experience-page/varlyq.svg",
    place: "Varlyq Technologies",
    time: "(Aug, 2023 - present)",
    desp: "<li>Built an MDM (Mobile Device Management) EMI Android application from scratch having potential reach of 10k+ users</li> <li>Developed the Java - Quarkus Backend and Apis along with React (Web) FrontEnd</li> <li>Deployed the stack on AWS, Firebase and Playstore</li>",
  },
  {
    title: "Software Engineer (Freelance)",
    cardImage: "assets/images/experience-page/synecore.jpeg",
    place: "Synecore Interactives",
    time: "(May 2023 - present)",
    desp: "<li>Developed Notch Design application with 500k+ downloads on PlayStore</li><li>Worked on the application backend and website</li><li>Managed the PlayConsole and app releases.</li>",
  },
  {
    title: "Android Engineer",
    cardImage: "assets/images/experience-page/eyecan.svg",
    place: "Eyecan Solutions",
    time: "(Feb 2022 - Aug 2023)",
    desp: "<li>Developed Eyecan Application that helped 8000+ visually impaired using Ai assistive technologies.</li><li>Implemented features, fixed bugs.</li><li>Managed the release cycle of the application</li>",
  },
  {
    title: "Java Teaching Assistant",
    cardImage: "assets/images/experience-page/codingninjas.jpeg",
    place: "Coding Ninjas",
    time: "(Oct 2021 - Dec 2021)",
    desp: "<li>Cleared 500+ Students doubts</li><li>Explaining & Solving DSA Problems</li><li>Mentoring Students</li>",
  },
];

const showCards2 = () => {
  let output = "";
  exp.forEach(
    ({ title, cardImage, place, time, desp }) =>
      (output += `        
    <div class="col gaap" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="400"> 
      <div class="card card1">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
              <span class="author">${time}</span>
            </p>
            <ol>
              ${desp}
            </ol>
          </header>
        </article>
      </div>
    </div>
      `)
  );
  experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);

// Volunteership Cards

const volunteership = document.querySelector(".volunteership");
const volunteershipcards = [

];

const showCards = () => {
  let output = "";
  volunteershipcards.forEach(
    ({ title, cardImage, description }) =>
      (output += `        
      <div class="card volunteerCard" data-aos="fade-down" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="600" style="height: 550px;width:400px">
      
      <img src="${cardImage}" height="250" width="65" class="card-img" style="border-radius:10px">
      <div class="content">
          <h2 class="volunteerTitle">${title}</h2><br>
          <p class="copy">${description}</p></div>
      
      </div>
      `)
  );
  volunteership.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);

// Hackathon Section

const hackathonsection = document.querySelector(".hackathon-section");
const mentor = [
  {
    title: "Dell Designathon",
    subtitle: "First Runner Up",
    image: "assets/images/experience-page/dell.jpg",
    desp: "24 hours designathon where teams were required to design a idea. Based on the theme given we designed a solution for blind. Team Eyecan was the First Runner Up",
    href: "https://www.linkedin.com/feed/update/urn:li:activity:6980849104612450304?utm_source=share&utm_medium=member_desktop",
  },
];

const showCards3 = () => {
  let output = "";
  mentor.forEach(
    ({ title, image, subtitle, desp, href }) =>
      (output += `  
      <div class="blog-slider__item swiper-slide">
        <div class="blog-slider__img">
            <img src="${image}" alt="">
        </div>
        <div class="blog-slider__content">
          <div class="blog-slider__title">${title}</div>
          <span class="blog-slider__code">${subtitle}</span>
          <div class="blog-slider__text">${desp}</div>
          <a href="${href}" class="blog-slider__button">Read More</a>   
        </div>
      </div>
      `)
  );
  hackathonsection.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards3);
