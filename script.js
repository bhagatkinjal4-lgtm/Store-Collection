/* =========================
   LIGHTBOX GALLERY
========================= */

const images = [
  "https://via.placeholder.com/600x800?text=Saree",
  "https://via.placeholder.com/600x700?text=Kurta+Set",
  "https://via.placeholder.com/600x900?text=Dress",
  "https://via.placeholder.com/600x750?text=Accessories"
];

let current = 0;

function openLightbox(index) {
  current = index;
  const lightbox = document.getElementById("lightbox");
  const img = document.getElementById("lightbox-img");

  if (!lightbox || !img) return;

  img.src = images[current];
  lightbox.classList.add("active");
}

function closeLightbox() {
  const lightbox = document.getElementById("lightbox");
  if (lightbox) lightbox.classList.remove("active");
}

function nextImage() {
  current = (current + 1) % images.length;
  document.getElementById("lightbox-img").src = images[current];
}

function prevImage() {
  current = (current - 1 + images.length) % images.length;
  document.getElementById("lightbox-img").src = images[current];
}

/* =========================
   MOBILE MEGA MENU
========================= */

document.querySelectorAll(".has-mega > a").forEach(link => {
  link.addEventListener("click", function (e) {
    if (window.innerWidth <= 768) {
      e.preventDefault();
      const parent = this.parentElement;

      document.querySelectorAll(".has-mega").forEach(item => {
        if (item !== parent) item.classList.remove("active");
      });

      parent.classList.toggle("active");
    }
  });
});

/* =========================
   VIDEO HOVER (DESKTOP)
   TAP TO PLAY (MOBILE)
========================= */

document.querySelectorAll(".card video").forEach(video => {

  /* Desktop hover */
  video.addEventListener("mouseenter", () => {
    if (window.innerWidth > 768) {
      video.play();
    }
  });

  video.addEventListener("mouseleave", () => {
    if (window.innerWidth > 768) {
      video.pause();
      video.currentTime = 0;
    }
  });

  /* Mobile tap */
  video.addEventListener("click", () => {
    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  });
});
/* Exit Intent */
let popupShown = false;

document.addEventListener("mouseleave", function (e) {
  if (e.clientY < 10 && !popupShown) {
    document.getElementById("exitPopup").style.display = "flex";
    popupShown = true;
  }
});

function closePopup() {
  document.getElementById("exitPopup").style.display = "none";
}

  function toggleUserMenu() {
    document.getElementById("userDropdown").classList.toggle("show");
  }

  // Close dropdown when clicking outside
  window.onclick = function (e) {
    if (!e.target.closest('.user-menu')) {
      document.getElementById("userDropdown").classList.remove("show");
    }
  };
const cartCount = document.querySelector(".cart-count");
if (cartCount) {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  cartCount.innerText = cart.length;
}
// SHOW USER NAME AFTER LOGIN
const userNameEl = document.getElementById("userName");
const isLoggedIn = localStorage.getItem("loggedIn");
const storedName = localStorage.getItem("userName");

if (isLoggedIn && storedName && userNameEl) {
  userNameEl.innerText = storedName;
}

// LOGOUT FUNCTION
function logout() {
  localStorage.removeItem("loggedIn");
  localStorage.removeItem("userName");
  window.location.href = "index.html";
}
const sections = document.querySelectorAll('.scroll-animate');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      }
    });
  }, { threshold: 0.3 });

  sections.forEach(section => observer.observe(section));
