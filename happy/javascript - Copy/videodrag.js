
const videoElements = document.querySelectorAll('.video-container video');

videoElements.forEach((video) => {
  let isDragging = false;
  let startX, startY;

  video.addEventListener('mousedown', (e) => {
    isDragging = true;
    startX = e.clientX;
    startY = e.clientY;
  });

  video.addEventListener('touchstart', (e) => {
    isDragging = true;
    startX = e.touches[0].clientX;
    startY = e.touches[0].clientY;
  });

  document.addEventListener('mousemove', (e) => {
    if (isDragging) {
      const newX = e.clientX - startX;
      const newY = e.clientY - startY;
      video.style.top = `${video.offsetTop + newY}px`;
      video.style.left = `${video.offsetLeft + newX}px`;
      startX = e.clientX;
      startY = e.clientY;
    }
  });

  document.addEventListener('touchmove', (e) => {
    if (isDragging) {
      const newX = e.touches[0].clientX - startX;
      const newY = e.touches[0].clientY - startY;
      video.style.top = `${video.offsetTop + newY}px`;
      video.style.left = `${video.offsetLeft + newX}px`;
      startX = e.touches[0].clientX;
      startY = e.touches[0].clientY;
    }
  });

  document.addEventListener('mouseup', () => {
    isDragging = false;
  });

  document.addEventListener('touchend', () => {
    isDragging = false;
  });
});


