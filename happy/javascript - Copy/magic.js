// Configuration
const IMAGE_COUNT = 12;
const IMAGE_WIDTH = 200;
const IMAGE_HEIGHT = 150;
const RADIUS = 400;
const ROTATION_SPEED = 0.002;

// Image paths
const IMAGE_PATHS = [
  'rotate _image - Copy/1.png',
  'rotate _image - Copy/2.png',
  'rotate _image - Copy/3.jpg',
  'rotate _image - Copy/4.jpg',
  'rotate _image - Copy/5.jpg',
  'rotate _image - Copy/6.jpg',
  'rotate _image - Copy/7.jpg',
  'rotate _image - Copy/8.jpg',
  'rotate _image - Copy/9.jpg',
  'rotate _image - Copy/10.jpg',
  'rotate _image - Copy/11.jpg',
  'rotate _image - Copy/12.jpg'
];

// Create container
const container = document.createElement('div');
container.style.position = 'fixed';
container.style.top = '0';
container.style.left = '0';
container.style.width = '100vw';
container.style.height = '100vh';
container.style.perspective = '1000px';
container.style.overflow = 'hidden';
container.style.backgroundColor = '#1a1a1a';
container.style.display = 'none';
container.style.opacity = '0';

// Create carousel
const carousel = document.createElement('div');
carousel.style.position = 'absolute';
carousel.style.width = `${IMAGE_WIDTH}px`;
carousel.style.height = `${IMAGE_HEIGHT}px`;
carousel.style.transformStyle = 'preserve-3d';
carousel.style.transition = 'transform 1s';
carousel.style.top = '50%';
carousel.style.left = '50%';

// Create images
let angle = 0;
const angleIncrement = (2 * Math.PI) / IMAGE_COUNT;
const images = [];
IMAGE_PATHS.forEach((path, i) => {
  const imgContainer = document.createElement('div');
  imgContainer.style.position = 'absolute';
  imgContainer.style.width = `${IMAGE_WIDTH}px`;
  imgContainer.style.height = `${IMAGE_HEIGHT}px`;
  imgContainer.style.transform = `rotateY(${angle}rad) translateZ(${RADIUS}px)`;
  const img = document.createElement('img');
  img.src = path;
  console.log(`Loading image from: ${path}`);
  img.onerror = () => {
    console.error(`Failed to load image: ${path}`);
  };
  img.style.width = '100%';
  img.style.height = '100%';
  img.style.objectFit = 'cover';
  img.style.borderRadius = '10px';
  img.style.boxShadow = '0 0 20px rgba(255, 255, 255, 0.3)';
  img.style.transition = 'transform 0.3s';
  img.onmouseenter = () => {
    img.style.transform = 'scale(1.1)';
  };
  img.onmouseleave = () => {
    img.style.transform = 'scale(1)';
  };
  imgContainer.appendChild(img);
  carousel.appendChild(imgContainer);
  images.push(imgContainer);
  angle += angleIncrement;
});

// Add navigation buttons
const prevButton = document.createElement('button');
prevButton.innerHTML = '';
prevButton.style.position = 'absolute';
prevButton.style.left = '20px';
prevButton.style.top = '50%';
prevButton.style.transform = 'translateY(-50%)';
prevButton.style.background = 'rgba(0,0,0,0.5)';
prevButton.style.color = 'white';
prevButton.style.border = 'none';
prevButton.style.padding = '15px';
prevButton.style.borderRadius = '50%';
prevButton.style.cursor = 'pointer';
prevButton.style.zIndex = '1000';

const nextButton = document.createElement('button');
nextButton.innerHTML = '';
nextButton.style.position = 'absolute';
nextButton.style.right = '20px';
nextButton.style.top = '50%';
nextButton.style.transform = 'translateY(-50%)';
nextButton.style.background = 'rgba(0,0,0,0.5)';
nextButton.style.color = 'white';
nextButton.style.border = 'none';
nextButton.style.padding = '15px';
nextButton.style.borderRadius = '50%';
nextButton.style.cursor = 'pointer';
nextButton.style.zIndex = '1000';

// Add auto-rotation
let rotationAngle = 0;
let autoRotate = true;
function rotateCarousel() {
  if (autoRotate) {
    rotationAngle += ROTATION_SPEED;
    carousel.style.transform = `rotateY(${rotationAngle}rad)`;
  }
  requestAnimationFrame(rotateCarousel);
}

// Add navigation controls
let targetAngle = 0;
prevButton.addEventListener('click', () => {
  autoRotate = false;
  targetAngle += angleIncrement;
  carousel.style.transform = `rotateY(${targetAngle}rad)`;
});

nextButton.addEventListener('click', () => {
  autoRotate = false;
  targetAngle -= angleIncrement;
  carousel.style.transform = `rotateY(${targetAngle}rad)`;
});

// Add to DOM
container.appendChild(carousel);
container.appendChild(prevButton);
container.appendChild(nextButton);
document.body.appendChild(container);

// Button click/touch event
const openButton = document.getElementById('open-button');
openButton.addEventListener('click', () => {
  openGallery();
});
openButton.addEventListener('touchstart', (e) => {
  e.preventDefault();
  openGallery();
});

function openGallery() {
  container.style.display = 'block';
  container.style.opacity = '1';
  rotateCarousel();
  const closeButton = document.createElement('button');
  closeButton.id = 'close-button';
  closeButton.innerHTML = 'Close Gallery';
  closeButton.style.position = 'absolute';
  closeButton.style.top = '20px';
  closeButton.style.right = '20px';
  closeButton.style.background = 'rgba(0,0,0,0.5)';
  closeButton.style.color = 'white';
  closeButton.style.border = 'none';
  closeButton.style.padding = '15px';
  closeButton.style.borderRadius = '50%';
  closeButton.style.cursor = 'pointer';
  closeButton.style.zIndex = '1000';
  document.body.appendChild(closeButton);
  closeButton.addEventListener('click', () => {
    container.style.opacity = '0';
    setTimeout(() => {
      container.style.display = 'none';
    }, 1000);
  });
}

// Close button event listener
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    const closeButton = document.getElementById('close-button');
    if (closeButton) {
      closeButton.click();
    }
  }
});



