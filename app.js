document.addEventListener('DOMContentLoaded', () => {
  const mainImage = document.getElementById('main-display');
  const thumbnails = document.querySelectorAll('.thumb');

  thumbnails.forEach((thumb) => {
    thumb.addEventListener('click', (e) => {
      mainImage.src = e.target.src.replace('-thumb', '');
    });
  });
});
