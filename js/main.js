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

function setupModal(buttonSelector, modalSelector, previewSelector) {
  let modal = document.querySelector(modalSelector);
  let box = modal.querySelectorAll(previewSelector);

  document.querySelectorAll(buttonSelector).forEach((btn) => {
    btn.onclick = () => {
      modal.style.display = "flex";
      let name = btn.getAttribute("data-name");
      box.forEach((preview) => {
        let target = preview.getAttribute("data-target");
        if (name == target) {
          preview.classList.add("active");
        }
      });
    };
  });
}

setupModal("#info-1", ".portfolio-preview", ".preview");
setupModal("#info-2", ".portfolio-preview2", ".preview2");

const closeButtons = document.querySelectorAll(".fa-x");

closeButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const preview = btn.closest(".preview, .preview2");
    if (preview) {
      preview.classList.remove("active");
    }

    document.querySelectorAll(".portfolio-preview, .portfolio-preview2").forEach((m) => {
      m.style.display = "none";
    });
  });
});
