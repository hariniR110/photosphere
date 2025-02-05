// script.js
document.addEventListener("DOMContentLoaded", function() {
    const galleryImages = document.querySelectorAll(".gallery img");
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    const closeBtn = document.querySelector(".close");

    galleryImages.forEach(img => {
        img.addEventListener("click", function() {
            lightboxImg.src = this.src;
            lightbox.style.display = "flex";
        });
    });

    closeBtn.addEventListener("click", function() {
        lightbox.style.display = "none";
    });

    lightbox.addEventListener("click", function(event) {
        if (event.target !== lightboxImg) {
            lightbox.style.display = "none";
        }
    });
});
