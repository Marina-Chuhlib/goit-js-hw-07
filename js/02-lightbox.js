import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryMarkup = ({ original, preview, description }) => {
  return `
  <a class="gallery__item" href= '${original}' "large-image.jpg">
  <img class="gallery__image" src= '${preview}' "small-image.jpg" alt= '${description}'"Image description" />
</a>
    `;
};

const refs = {
  gallery: document.querySelector(".gallery"),
};

const render = () => {
  const pictures = galleryItems.map(galleryMarkup).join("");
  refs.gallery.insertAdjacentHTML("beforeend", pictures);
};

const onPictureClick = (event) => {
  event.preventDefault();
  if (!event.target.classList.contains("gallery__image")) return;
};

render();
refs.gallery.addEventListener("click", onPictureClick);

const gallery = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionPosition: "bottom",
  captionDelay: 250,
});

gallery.on("show.simplelightbox", function () {
  return gallery;
});
