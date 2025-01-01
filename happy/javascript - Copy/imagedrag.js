const imag = document.querySelectorAll('.gallery-img');

imag.forEach((image) => {
    let isDragging = false;
    let startX, startY;

    image.addEventListener('mousedown', (e) => {
        isDragging = true;
        startX = e.clientX;
        startY = e.clientY;
        image.style.zIndex = 1000;
    });

    image.addEventListener('touchstart', (e) => {
        isDragging = true;
        startX = e.touches[0].clientX;
        startY = e.touches[0].clientY;
        image.style.zIndex = 1000;
        e.preventDefault();
    });

    document.addEventListener('mousemove', (e) => {
        if (isDragging) {
            const newX = e.clientX - startX;
            const newY = e.clientY - startY;
            
            const currentLeft = parseInt(image.style.left) || 0;
            const currentTop = parseInt(image.style.top) || 0;
            
            image.style.left = `${currentLeft + newX}px`;
            image.style.top = `${currentTop + newY}px`;
            
            startX = e.clientX;
            startY = e.clientY;
        }
    });

    document.addEventListener('touchmove', (e) => {
        if (isDragging) {
            const newX = e.touches[0].clientX - startX;
            const newY = e.touches[0].clientY - startY;
            
            const currentLeft = parseInt(image.style.left) || 0;
            const currentTop = parseInt(image.style.top) || 0;
            
            image.style.left = `${currentLeft + newX}px`;
            image.style.top = `${currentTop + newY}px`;
            
            startX = e.touches[0].clientX;
            startY = e.touches[0].clientY;
        }
    });

    document.addEventListener('mouseup', () => {
        isDragging = false;
        image.style.zIndex = 1;
    });

    document.addEventListener('touchend', () => {
        isDragging = false;
        image.style.zIndex = 1;
    });
});
