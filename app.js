document.addEventListener('DOMContentLoaded', () => {
  const mainImage = document.getElementById('main-image');
  const thumbnails = document.querySelectorAll('.thumb');

  thumbnails.forEach((thumb) => {
    thumb.addEventListener('click', (e) => {
      e.preventDefault();
      // Set the main image to the first thumbnail on page load
      mainImage.src = e.target.src.replace('-thumb', '');
    });
  });
});
