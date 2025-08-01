// Fungsi typing untuk tagline
const taglineText = "I have something to say...";
const taglineEl = document.querySelector(".tagline");
let i = 0;

function typeTagline() {
    if (i < taglineText.length) {
        taglineEl.textContent += taglineText.charAt(i);
        i++;
        setTimeout(typeTagline, 100);
    }
}

// Saat halaman dimuat
document.addEventListener("DOMContentLoaded", function () {
    typeTagline();
});

// === Interaksi bertahap setelah klik Open ===
document.getElementById("playButton").addEventListener("click", function () {
    const audio = document.getElementById("bg-music");
    const introText = document.getElementById("introText");

    audio.play().catch(err => console.warn("Autoplay gagal:", err));

    introText.textContent = "Are you ready?";
    this.textContent = "Yes";
    this.id = "confirmButton"; // ubah ID agar tidak bentrok
});

// Tahap kedua klik: munculkan konten utama
document.addEventListener("click", function (e) {
    if (e.target.id === "confirmButton") {
        const introText = document.getElementById("introText");
        introText.textContent = "Selamat datang... ada sesuatu yang ingin kusampaikan.";
        e.target.style.display = "none";
        introText.classList.add("visible");
    }
});

// Scroll trigger untuk munculkan teks bertahap
window.addEventListener("scroll", function () {
    const elements = document.querySelectorAll(".hidden");
    const windowHeight = window.innerHeight;

    elements.forEach((el) => {
        const position = el.getBoundingClientRect().top;
        if (position < windowHeight - 100) {
            el.classList.add("visible");
            el.classList.remove("hidden");
        }
    });
});
