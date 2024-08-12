window.onbeforeunload = () => {
  for (const form of document.getElementsByTagName("form")) {
    form.reset();
  }
};

const navSlide = document.querySelector(".navbar-nav");
document.querySelector("#menu").onclick = () => {
  navSlide.classList.toggle("active");
};

const hamburgerMenu = document.querySelector("#menu");

document.addEventListener("click", function (e) {
  if (!hamburgerMenu.contains(e.target) && !navSlide.contains(e.target)) {
    navSlide.classList.remove("active");
  }
});

function bckTop() {
  window.scrollTo({
    top: 0,
  });
}

const toTop = document.querySelector("#btn-to-top");

window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    toTop.classList.add("active");
  } else {
    toTop.classList.remove("active");
  }
});

let cvModel = document.getElementById("homeModel");
