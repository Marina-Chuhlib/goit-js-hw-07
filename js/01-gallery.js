import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const refs = {
  gallery: document.querySelector(".gallery"),
};

const galleryMarkup = ({ preview, original, description }) => {
  return `
  <div class="gallery__item">
  <a class="gallery__link" href="large-image.jpg">
    <img
      class="gallery__image"
      src= '${preview}' "gallery__image"
      data-source='${original}' "small-image.jpg"
      alt= '${description}' "Image description"
    />
  </a>
</div>
  `;
};

const render = () => {
  const pictures = galleryItems.map(galleryMarkup).join("");
  refs.gallery.insertAdjacentHTML("beforeend", pictures);
};

const onPictureClick = (event) => {
  event.preventDefault();

  if (event.target === event.currentTarget) return;

  // const instance = basicLightbox.create(
  //   `<img src= '${event.target.dataset.source}' width="800" height="600">`,

  //   {
  //     onShow: () => {
  //       window.addEventListener("keydown", onEscClose);
  //     },
  //     onClose: () => {
  //       window.removeEventListener("keydown", onEscClose);
  //     },
  //   }
  // );
  // return instance;

  const instance = basicLightbox.create(
    `<img src= '${event.target.dataset.source}' width="800" height="600">`
  );

  instance.show();
};

const onEscClose = (event) => {
  if (event.code === "Escape") {
    return;
  }
};

render();

refs.gallery.addEventListener("click", onPictureClick);
