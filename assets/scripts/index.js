import PhotoSwipeLightbox from "https://unpkg.com/photoswipe@5.3.7/dist/photoswipe-lightbox.esm.js";

const width = 1440;
const height = 1440;

// building the DOM
[...document.querySelectorAll(".gallery a")].forEach(($a) => {
  const $img = document.createElement("img");
  $img.src = $a.href;
  $img.setAttribute("loading", "lazy");
  $a.setAttribute("target", "_blank");

  $img.addEventListener("load", ({ target }) => {
    target.classList.add("loaded");
  });

  $a.append($img);
  $a.dataset.pswpWidth = width;
  $a.dataset.pswpHeight = height;
});

// the lightbox
const lightbox = new PhotoSwipeLightbox({
  gallery: ".gallery",
  children: "a",
  pswpModule: () => import("https://unpkg.com/photoswipe@5.3.7/dist/photoswipe.esm.js"),
});
lightbox.init();

// the contact form

[...document.querySelectorAll(".modal-toggle")].forEach(($toggle) => {
  $toggle.addEventListener("click", (event) => {
    event.preventDefault();

    const $dialog = document.querySelector("dialog");
    const open = $dialog.getAttribute("open") === "true";

    $dialog.setAttribute("open", !open);
  });
});
