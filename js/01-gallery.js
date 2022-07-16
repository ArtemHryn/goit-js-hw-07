import { galleryItems } from "./gallery-items.js";

// Change code below this line

// console.log(galleryItems);

const gallery = document.querySelector(".gallery");

gallery.addEventListener("click", onShowFullImg);

gallery.insertAdjacentHTML("beforeend", createGalarryMarkup(galleryItems));

function createGalarryMarkup(pictures) {
  const markup = pictures
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
        <a class="gallery__link" href="large-image.jpg">
            <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
            />
        </a>
    </div>`;
    })
    .join("");
  return markup;
}

function onShowFullImg(e) {
  e.preventDefault();
  if (e.target.nodeName !== "IMG") {
    return;
  }

  onShow(e.target.dataset.source).show();
  window.addEventListener("keydown", onCloseImg);
}

function onShow(target) {
  const onShow = basicLightbox.create(`<img src="${target}">`);
  return onShow;
}

function onCloseImg(e) {
  if (e.code === "Escape") {
    console.log("Added");
  }
}
