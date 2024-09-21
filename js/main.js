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

let modal = document.querySelector(".portfolio-preview");
let box = modal.querySelectorAll(".preview");

document.querySelectorAll("#info").forEach((portfolio) => {
  portfolio.onclick = () => {
    modal.style.display = "flex";
    let name = portfolio.getAttribute("data-name");
    box.forEach((preview) => {
      let target = preview.getAttribute("data-target");
      if (name == target) {
        preview.classList.add("active");
      }
    });
  };
});

box.forEach((portfolio) => {
  portfolio.querySelector(".fa-x").onclick = () => {
    portfolio.classList.remove("active");
    modal.style.display = "none";
  };
});
