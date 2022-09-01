import { galleryItems } from './gallery-items.js';

const gallery = document.querySelector('.gallery');
const listOfGallery = galleryItems
  .map(
    image =>
      `<div class="gallery__item">
    <a class="gallery__link" href="${image.original}">
    <img
    class="gallery__image"
    src="${image.preview}"
    data-source="${image.original}"
    alt="${image.description}"
    />
    </a>
    </div>`
  )
  .join('');
gallery.insertAdjacentHTML('beforeend', listOfGallery);

gallery.addEventListener('click', onOpenModel);
function onOpenModel(evt) {
  evt.preventDefault();
  if (!evt.target.classList.contains('gallery__image')) {
    return;
  }

  const instance = basicLightbox.create(`
    <img  src= "${evt.target.dataset.source}" width="800" height="600"/>
    {
      onShow: () => {
        document.addEventListener("keydown", onCloseEscape);
      },
      onClose: () => {
        document.removeEventListener("keydown", onCloseEscape);
      },
    }
`);
  instance.show();

  gallery.addEventListener('keydown', onCloseEscape);
  function onCloseEscape(evt) {
    if (evt.code === 'Escape') {
      instance.close();
    }
  }
}
