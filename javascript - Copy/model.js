// Modal creation
var modal = document.createElement('div');
modal.style.position = 'fixed';
modal.style.top = '0';
modal.style.left = '0';
modal.style.width = '100%';
modal.style.height = '100%';
modal.style.background = 'rgba(0, 0, 0, 0.5)';
modal.style.display = 'block';
modal.style.opacity = '1';
modal.style.transition = 'opacity 3s ease-in-out';

// Video creation
var video = document.createElement('video');
video.style.position = 'absolute';
video.style.top = '50%';
video.style.left = '50%';
video.style.transform = 'translate(-50%, -50%)';
video.style.width = '100%';
video.style.height = '100%';
video.controls = true;
video.src = '🌟 Unique New Year 2025 Greetings Video 🎉 Send Heartfelt Happy New Year 2025 Wishes in Style - Copy.mp4';
video.muted = true;
video.autoplay = true;
video.controls = false;

// Append video to modal
modal.appendChild(video);

// Append modal to body
document.body.appendChild(modal);

// Play video
video.play();

// Hide modal after 30 seconds
setTimeout(function() {
  modal.style.opacity = '0';
  setTimeout(function() {
    modal.style.display = 'none';
    video.pause();
}, 10000);
}, 20000);



