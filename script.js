// Sample content data (you can expand this later)
const content = {
  cDrama: [
    { title: "The Untamed", year: 2019, desc: "A story of friendship, loyalty, and cultivation in a fantasy world.", poster: "https://picsum.photos/220/330?random=11" },
    { title: "Word of Honor", year: 2021, desc: "A tale of brotherhood and hidden identities in ancient China.", poster: "https://picsum.photos/220/330?random=12" },
    { title: "Love Between Fairy and Devil", year: 2022, desc: "A romance between a powerful demon lord and a fairy.", poster: "https://picsum.photos/220/330?random=13" },
    { title: "Story of Yanxi Palace", year: 2018, desc: "Intrigue and power struggles in the Qing Dynasty palace.", poster: "https://picsum.photos/220/330?random=14" },
    { title: "Eternal Love", year: 2017, desc: "A timeless love story across three lifetimes.", poster: "https://picsum.photos/220/330?random=15" }
  ],
  kDrama: [
    { title: "Crash Landing on You", year: 2019, desc: "A South Korean heiress accidentally lands in North Korea.", poster: "https://picsum.photos/220/330?random=21" },
    { title: "Goblin", year: 2016, desc: "A 900-year-old immortal goblin seeks to end his curse.", poster: "https://picsum.photos/220/330?random=22" },
    { title: "Itaewon Class", year: 2020, desc: "A young man seeks revenge through business success.", poster: "https://picsum.photos/220/330?random=23" },
    { title: "Vincenzo", year: 2021, desc: "An Italian-Korean mafia lawyer returns to Korea.", poster: "https://picsum.photos/220/330?random=24" },
    { title: "Descendants of the Sun", year: 2016, desc: "Love story between a soldier and a doctor.", poster: "https://picsum.photos/220/330?random=25" }
  ],
  movies: [
    { title: "Train to Busan", year: 2016, desc: "A father and daughter fight to survive a zombie outbreak.", poster: "https://picsum.photos/220/330?random=31" },
    { title: "Parasite", year: 2019, desc: "A dark comedy-thriller about class disparity.", poster: "https://picsum.photos/220/330?random=32" },
    { title: "The Handmaiden", year: 2016, desc: "A con artist and a handmaiden plot to deceive a wealthy woman.", poster: "https://picsum.photos/220/330?random=33" },
    { title: "Burning", year: 2018, desc: "A mysterious love triangle with dark undertones.", poster: "https://picsum.photos/220/330?random=34" },
    { title: "Oldboy", year: 2003, desc: "A man imprisoned for 15 years seeks revenge.", poster: "https://picsum.photos/220/330?random=35" }
  ]
};

// Populate all sliders
function populateSlider(containerId, items) {
  const container = document.getElementById(containerId);
  if (!container) return; // safety check

  items.forEach(item => {
    const poster = document.createElement('div');
    poster.className = 'poster';
    poster.style.backgroundImage = `url(${item.poster})`;
    poster.innerHTML = `
      <div class="poster-info">
        <div class="poster-title">${item.title}</div>
        <div class="poster-year">${item.year}</div>
      </div>
    `;
    poster.addEventListener('click', () => showModal(item));
    container.appendChild(poster);
  });
}

// Run population once DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  populateSlider('c-drama-slider', content.cDrama);
  populateSlider('k-drama-slider', content.kDrama);
  populateSlider('movies-slider', content.movies);
});

// ─── MODAL ──────────────────────────────────────────────────
const modal = document.getElementById('modal');
const closeModalBtn = document.getElementById('close-modal');

function showModal(item) {
  if (!modal) return;

  document.getElementById('modal-poster').style.backgroundImage = `url(${item.poster})`;
  document.getElementById('modal-title').textContent = item.title;
  document.getElementById('modal-meta').textContent = `${item.year} • Drama`;
  document.getElementById('modal-desc').textContent = item.desc;
  modal.style.display = 'flex';
}

if (closeModalBtn) {
  closeModalBtn.addEventListener('click', () => {
    modal.style.display = 'none';
  });
}

if (modal) {
  modal.addEventListener('click', e => {
    if (e.target === modal) {
      modal.style.display = 'none';
    }
  });
}

// ─── NAVBAR SCROLL + ACTIVE LINK ────────────────────────────
window.addEventListener('scroll', () => {
  const navbar = document.getElementById('navbar');
  if (navbar) {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
  }

  // Active link highlighting
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a');

  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 120; // offset for navbar height
    if (window.scrollY >= sectionTop) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
});

// ─── HORIZONTAL DRAG SCROLLING FOR ALL SLIDERS ──────────────
document.querySelectorAll('.slider').forEach(slider => {
  let isDown = false;
  let startX;
  let scrollLeft;

  const startDrag = (e) => {
    isDown = true;
    slider.style.cursor = 'grabbing';
    startX = (e.pageX || e.touches[0].pageX) - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
  };

  const stopDrag = () => {
    isDown = false;
    slider.style.cursor = 'grab';
  };

  const drag = (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = (e.pageX || e.touches[0].pageX) - slider.offsetLeft;
    const walk = (x - startX) * 2; // scroll speed
    slider.scrollLeft = scrollLeft - walk;
  };

  // Mouse events
  slider.addEventListener('mousedown', startDrag);
  slider.addEventListener('mousemove', drag);
  slider.addEventListener('mouseup', stopDrag);
  slider.addEventListener('mouseleave', stopDrag);

  // Touch events (mobile)
  slider.addEventListener('touchstart', startDrag);
  slider.addEventListener('touchmove', drag);
  slider.addEventListener('touchend', stopDrag);

  // Wheel horizontal scroll
  slider.addEventListener('wheel', e => {
    if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
      e.preventDefault();
      slider.scrollLeft += e.deltaY;
    }
  });
});

// ─── MOBILE HAMBURGER MENU ──────────────────────────────────
const hamburger = document.getElementById('hamburger');
const mobileNav = document.getElementById('mobile-nav');

if (hamburger && mobileNav) {
  const toggleMenu = () => {
    hamburger.classList.toggle('active');
    mobileNav.classList.toggle('active');
  };

  hamburger.addEventListener('click', toggleMenu);

  // Close when clicking a link
  mobileNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('active');
      mobileNav.classList.remove('active');
    });
  });

  // Close when clicking outside
  document.addEventListener('click', e => {
    if (!mobileNav.contains(e.target) && !hamburger.contains(e.target)) {
      hamburger.classList.remove('active');
      mobileNav.classList.remove('active');
    }
  });
}