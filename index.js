import PhotoSwipeLightbox from "https://unpkg.com/photoswipe@5.3.7/dist/photoswipe-lightbox.esm.js";
const lightbox = new PhotoSwipeLightbox({
  gallery: ".gallery",
  children: ".lightbox",
  pswpModule: () =>
    import("https://unpkg.com/photoswipe@5.3.7/dist/photoswipe.esm.js"),
});
lightbox.init();
