export function updateGallery(images) {
  const galleryElement = document.querySelector('.gallery');
  galleryElement.innerHTML = '';

  const lightboxElements = images.reduce((acc, image) => {
    const imageElement = document.createElement('img');
    imageElement.src = image.webformatURL;
    imageElement.alt = image.tags;

    imageElement.addEventListener('click', () => {
      const lightbox = new SimpleLightbox('.gallery a');
      lightbox.refresh();
    });

    const linkElement = document.createElement('a');
    linkElement.href = image.largeImageURL;
    linkElement.setAttribute('data-lightbox', 'gallery');
    linkElement.appendChild(imageElement);

    acc.push(linkElement);
    return acc;
  }, []);

  lightboxElements.forEach(element => {
    galleryElement.appendChild(element);
  });

  const lightbox = new SimpleLightbox('.gallery a');
  lightbox.refresh();
}
