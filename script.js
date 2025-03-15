function showGift() {
    document.getElementById("gift-info").style.display = "block";
}

function copyGift() {
    var text = "50301580006671";
    navigator.clipboard.writeText(text).then(function() {
        alert("Nomor rekening berhasil disalin: " + text);
    }).catch(function(err) {
        alert("Gagal menyalin teks");
        console.error("Error:", err);
    });
}

document.getElementById("comment-form").addEventListener("submit", function(e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const message = document.getElementById("message").value;
    const confirmation = document.getElementById("confirmation").value;
    
    const newComment = document.createElement("div");
    newComment.classList.add("comment");
    
    const confirmationIcon = confirmation === "Hadir" 
        ? '<span class="confirmation-icon" style="color: green;">✔️</span>' 
        : '<span class="confirmation-icon" style="color: red;">❌</span>';
    
    newComment.innerHTML = `<strong>${name} ${confirmationIcon}</strong><p>${message}</p>`;
    
    document.getElementById("comments").prepend(newComment);
    
    document.getElementById("comment-form").reset();
});

const weddingDate = new Date("December 27, 2024 00:00:00").getTime();


const images = [
    "img/images1.jpg", 
    "img/groom.jpg",
    "img/bride.jpg"
];

let currentImageIndex = 0;
const heroSection = document.getElementById("hero");

const image1 = document.createElement('div');
const image2 = document.createElement('div');
image1.classList.add('image', 'image-1');
image2.classList.add('image', 'image-2');
heroSection.prepend(image1, image2);

image1.style.backgroundImage = `url(${images[0]})`;
image2.style.backgroundImage = `url(${images[1]})`;

let isImage1Active = true;

function changeBackground() {
    setTimeout(() => {
        currentImageIndex = (currentImageIndex + 1) % images.length;
        if (isImage1Active) {
            image2.style.backgroundImage = `url(${images[currentImageIndex]})`;
            image1.style.opacity = 0;
            image2.style.opacity = 1;
        } else {
            image1.style.backgroundImage = `url(${images[currentImageIndex]})`;
            image1.style.opacity = 1;
            image2.style.opacity = 0;
        }
        isImage1Active = !isImage1Active;
    }, 2500);
}

setInterval(changeBackground, 5000);
changeBackground();

function updateCountdown() {
    const now = new Date().getTime();
    const distance = weddingDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;

    if (distance < 0) {
        document.getElementById("countdown").innerHTML = "The Wedding is Happening!";
    }
}

setInterval(updateCountdown, 1000);
updateCountdown();

const images2 = [
    "img/images1.jpg", 
    "img/groom.jpg",
    "img/bride.jpg"
];

let currentImageIndex2 = 0;
const heroSection2 = document.getElementById("hero-2");

const image1_2 = document.createElement('div');
const image2_2 = document.createElement('div');
image1_2.classList.add('image', 'image-1');
image2_2.classList.add('image', 'image-2');
heroSection2.prepend(image1_2, image2_2);

image1_2.style.backgroundImage = `url(${images2[0]})`;
image2_2.style.backgroundImage = `url(${images2[1]})`;

let isImage1Active2 = true;

function changeBackground2() {
    setTimeout(() => {
        currentImageIndex2 = (currentImageIndex2 + 1) % images2.length;
        if (isImage1Active2) {
            image2_2.style.backgroundImage = `url(${images2[currentImageIndex2]})`;
            image1_2.style.opacity = 0;
            image2_2.style.opacity = 1;
        } else {
            image1_2.style.backgroundImage = `url(${images2[currentImageIndex2]})`;
            image1_2.style.opacity = 1;
            image2_2.style.opacity = 0;
        }
        isImage1Active2 = !isImage1Active2;
    }, 2500);
}

setInterval(changeBackground2, 5000);
changeBackground2();

document.addEventListener("DOMContentLoaded", function () {
    setTimeout(() => {
        document.querySelector(".content").classList.add("show");
    }, 300);
});

document.addEventListener("DOMContentLoaded", function () {
    const heroContent = document.querySelector(".hero-content");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    heroContent.classList.add("show");
                }
            });
        },
        { threshold: 0.5 }
    );

    observer.observe(heroContent);
});

document.addEventListener("DOMContentLoaded", function () {
    const fadeElements = document.querySelectorAll(".fade-in");

    const observer = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("show");
                    observer.unobserve(entry.target);
                }
            });
        },
        { rootMargin: "0px", threshold: 0.2 }
    );

    fadeElements.forEach((el) => observer.observe(el));
});

function hideCover() {
    document.getElementById("cover").style.transform = "translateY(100%)";
    setTimeout(() => {
        cover.classList.add("hidden");
    }, 800);
}

