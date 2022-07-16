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

const showFullPic = basicLightbox.create(`<img src="">`, {
    onShow: instance => {
        window.addEventListener("keydown", onCloseImg);
    },
    onClose: instance => {
        window.removeEventListener("keydown", onCloseImg);
    }
})

console.log(basicLightbox.create(`<img src="">`));

function onShowFullImg(e) {
  e.preventDefault();
  if (e.target.nodeName !== "IMG") {
    return;
  }
    showFullPic.element().querySelector("img").src = e.target.dataset.source;
    showFullPic.show()
}

function onCloseImg(e) {
  if (e.code === "Escape") {
      showFullPic.close()
      return
  }
}
