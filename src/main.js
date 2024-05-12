import { searchImages } from './js/pixabay-api.js';
import { updateGallery } from './js/render-functions.js';

document.querySelector('.search-form').addEventListener('submit', async function(event) {
  event.preventDefault();
  const searchTerm = document.querySelector('.search-input').value.trim();
  if (searchTerm === '') {
    iziToast.error({
      title: 'Error',
      message: 'Please enter a search term.',
    });
    return;
  }

  try {
    document.querySelector('.loader').style.display = 'block';

    const data = await searchImages(searchTerm);

    document.querySelector('.loader').style.display = 'none';

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
});
