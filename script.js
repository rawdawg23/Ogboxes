// Optional: Auto-scroll the features section
function autoScroll() {
  const container = document.querySelector('.scroll-container');
  let scrollAmount = 0;
  const scrollSpeed = 1;

  setInterval(() => {
    scrollAmount += scrollSpeed;
    container.scrollLeft = scrollAmount;
    if (scrollAmount >= container.scrollWidth - container.clientWidth) {
      scrollAmount = 0;
    }
  }, 20);
}

document.addEventListener('DOMContentLoaded', autoScroll);
