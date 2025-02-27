const images = [
    "https://images.unsplash.com/photo-1584395630827-860eee694d7b?auto=format&fit=crop&w=500&q=80",
    "https://images.unsplash.com/photo-1560807707-8cc77767d783?auto=format&fit=crop&w=500&q=80",
    "https://images.unsplash.com/photo-1519068737630-e5db30e12e42?auto=format&fit=crop&w=500&q=80",
    "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=500&q=80",
    "https://images.unsplash.com/photo-1493612276216-ee3925520721?auto=format&fit=crop&w=500&q=80"
];

const gallery = document.getElementById("gallery");
const modal = document.getElementById("modal");
const modalImage = document.getElementById("modal-image");
const closeModal = document.getElementById("close");
const slideshowImage = document.getElementById("slideshow-image");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");
let currentSlide = 0;

// Load images into gallery
document.addEventListener("DOMContentLoaded", () => {
    gallery.innerHTML = images.map(img => `<img src="${img}" onclick="openModal('${img}')">`).join('');
    updateSlideshow();
});

function openModal(imgSrc) {
    modal.style.display = "flex";
    modalImage.src = imgSrc;
}

closeModal.addEventListener("click", () => {
    modal.style.display = "none";
});

function updateSlideshow() {
    slideshowImage.src = images[currentSlide];
}

prevButton.addEventListener("click", () => {
    currentSlide = (currentSlide - 1 + images.length) % images.length;
    updateSlideshow();
});

nextButton.addEventListener("click", () => {
    currentSlide = (currentSlide + 1) % images.length;
    updateSlideshow();
});

setInterval(() => {
    nextButton.click();
}, 3000);
