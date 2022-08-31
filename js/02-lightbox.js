import { galleryItems } from './gallery-items.js';

const gallery = document.querySelector('.gallery');
const listOfGallery = galleryItems
  .map(
    image =>
      `<a class="gallery__item" href="${image.original}">
  <img class="gallery__image" src="${image.preview}" alt="${image.description}"/>
</a>`
  )
  .join('');
gallery.insertAdjacentHTML('beforeend', listOfGallery);

gallery.addEventListener('click', onOpenModel);
function onOpenModel(evt) {
  evt.preventDefault();
}
const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});
