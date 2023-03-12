// Add imports above this line
import { galleryItems } from "./gallery-items";
// Change code below this line

console.log(galleryItems);

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const galary = document.querySelector(".gallery");

function createGalary(array) {
  const items = array
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
      <a class="gallery__item" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
    </a>
</div>`;
    })
    .join("");
  galary.insertAdjacentHTML("beforeend", items);
}
createGalary(galleryItems);

const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
