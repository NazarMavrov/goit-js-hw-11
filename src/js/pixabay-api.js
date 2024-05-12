const apiKey = '43845799-470caa65ff354fc4cfb98d159';

export async function searchImages(searchTerm) {
  const url = `https://pixabay.com/api/?key=${apiKey}&q=${searchTerm}&image_type=photo&orientation=horizontal&safesearch=true`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error('Error fetching data:', error);
  }
}
