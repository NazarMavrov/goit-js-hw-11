async function searchImages(searchTerm) {
  const apiKey = '43845799-470caa65ff354fc4cfb98d159';
  const url = `https://pixabay.com/api/?key=${apiKey}&q=${searchTerm}&image_type=photo&orientation=horizontal&safesearch=true`;

  try {
    document.getElementById('loader').style.display = 'block';

    const response = await fetch(url);
    const data = await response.json();

    document.getElementById('loader').style.display = 'none';

    if (data.hits.length === 0) {
      iziToast.error({
        title: 'Error',
        message: 'Sorry, there are no images matching your search query. Please try again!',
      });
      return;
    }

    updateGallery(data.hits);
  } catch (error) {
    console.error('Error fetching data:', error);
    iziToast.error({
      title: 'Error',
      message: 'An error occurred while fetching data. Please try again later.',
    });
  }
}

function updateGallery(images) {
  const galleryElement = document.querySelector('.gallery');
  galleryElement.innerHTML = ''; 
  images.forEach(image => {
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

    galleryElement.appendChild(linkElement);
  });

  const lightbox = new SimpleLightbox('.gallery a');
  lightbox.refresh();
}

document.querySelector('.search-form').addEventListener('submit', function(event) {
  event.preventDefault();
  const searchTerm = document.querySelector('.search-input').value.trim();
  if (searchTerm === '') {
    iziToast.error({
      title: 'Error',
      message: 'Please enter a search term.',
    });
    return;
  }
  searchImages(searchTerm);
});
