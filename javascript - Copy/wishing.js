// Get all draggable media elements
const mediaElements = document.querySelectorAll('.draggable-media');

// Add event listeners to each media element
mediaElements.forEach(media => {
  let isDragging = false;
  let startX, startY;

  // Add event listeners for drag start
  media.addEventListener('mousedown', (e) => {
    isDragging = true;
    // Bring the dragged element to front
    mediaElements.forEach(el => el.style.zIndex = 1);
    media.style.zIndex = 1000;
    
    // Get element's current position from computed style
    const style = window.getComputedStyle(media);
    const currentLeft = parseFloat(style.left) || 0;
    const currentTop = parseFloat(style.top) || 0;
    
    // Calculate offset from mouse position to element position
    const rect = media.getBoundingClientRect();
    startX = e.clientX - rect.left;
    startY = e.clientY - rect.top;
    
    // Pause video if it's a video element
    if (media.tagName === 'VIDEO') {
      media.pause();
    }
  });

  // Add event listeners for touch start
  media.addEventListener('touchstart', (e) => {
    console.log('Touch start detected');
    isDragging = true;
    // Bring the dragged element to front
    mediaElements.forEach(el => el.style.zIndex = 1);
    media.style.zIndex = 1000;
    
    // Get element's current position from computed style
    const style = window.getComputedStyle(media);
    const currentLeft = parseFloat(style.left) || 0;
    const currentTop = parseFloat(style.top) || 0;
    
    // Calculate offset from touch position to element position
    const rect = media.getBoundingClientRect();
    startX = e.touches[0].clientX - rect.left;
    startY = e.touches[0].clientY - rect.top;
    
    console.log(`Touch start at X: ${startX}, Y: ${startY}`);
    
    // Pause video if it's a video element
    if (media.tagName === 'VIDEO') {
      media.pause();
    }
    
    // Prevent default touch behaviors
    e.preventDefault();
  });

  // Add event listeners for dragging
  document.addEventListener('mousemove', (e) => {
    if (isDragging) {
      const newX = e.clientX - startX;
      const newY = e.clientY - startY;

      // Ensure positive values and stay within viewport
      const maxX = window.innerWidth - media.offsetWidth;
      const maxY = window.innerHeight - media.offsetHeight;
      
      media.style.left = `${Math.max(0, Math.min(newX, maxX))}px`;
      media.style.top = `${Math.max(0, Math.min(newY, maxY))}px`;
    }
  });

  // Add event listeners for touch move
  document.addEventListener('touchmove', (e) => {
    if (isDragging) {
      const newX = e.touches[0].clientX - startX;
      const newY = e.touches[0].clientY - startY;

      // Ensure positive values and stay within viewport
      const maxX = window.innerWidth - media.offsetWidth;
      const maxY = window.innerHeight - media.offsetHeight;
      
      const finalX = Math.max(0, Math.min(newX, maxX));
      const finalY = Math.max(0, Math.min(newY, maxY));
      
      media.style.left = `${finalX}px`;
      media.style.top = `${finalY}px`;
      
      console.log(`Moving to X: ${finalX}, Y: ${finalY}`);
    }
    
    // Prevent default touch behaviors
    e.preventDefault();
  });

  // Add event listeners for drag end
  document.addEventListener('mouseup', () => {
    isDragging = false;
  });

  // Add event listeners for touch end
  document.addEventListener('touchend', () => {
    console.log('Touch end detected');
    isDragging = false;
  });

  // Pause video if it's a video element
  if (media.tagName === 'VIDEO') {
    media.addEventListener('mousedown', () => {
      media.pause();
    });
    media.addEventListener('touchstart', () => {
      media.pause();
    });
  }

  // Play and unmute video on interaction
  if (media.tagName === 'VIDEO') {
    media.addEventListener('click', () => {
      media.muted = false;
      media.play();
    });
    media.addEventListener('touchstart', () => {
      media.muted = false;
      media.play();
    });
  }
});




