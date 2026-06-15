const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".ull li a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 120;
    const sectionHeight = section.clientHeight;

    if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
});



const toggleBtn = document.getElementById("menu-toggle");
const navLink = document.querySelector(".nav-link");

toggleBtn.addEventListener("click", () => {
  navLink.classList.toggle("active");
});




// utton pop show 

function showPopup() {
  document.getElementById("popup").style.display = "flex";
}

function closePopup() {
  document.getElementById("popup").style.display = "none";
}


// work section js 

const phoneScreen = document.getElementById("videoScroll");
const videos = phoneScreen.querySelectorAll("video");

let index = 0;

setInterval(() => {
  index++;

  if(index >= videos.length){
    index = 0;
  }

  phoneScreen.scrollTo({
    top: phoneScreen.clientHeight * index,
    behavior: "smooth"
  });
}, 4000);


// full screen loader

window.addEventListener("load", function(){
  setTimeout(() => {
    document.getElementById("loader").style.opacity = "0";
    
    setTimeout(() => {
      document.getElementById("loader").style.display = "none";
    }, 500);
    
  }, 3000); // 3 sec show
});