
// === C-Drama Data ===
const cdramaList = [
    {
        title: "The Untamed",
        year: 2019,
        rating: "9.1",
        desc: "A legendary tale of two soulmates bound by fate, loyalty, and the dark power of resentment in a world of cultivation and war.",
        poster: "https://picsum.photos/400/600?random=101",
        episodes: Array.from({ length: 50 }, (_, i) => ({
            ep: i + 1,
            title: `Episode ${i + 1} – ${["Rebirth", "Cloud Recesses", "Lan Disciples", "Xuanwu Cave", "Yi City", "Wangxian Finale"][i % 6]}`,
            link: `https://drive.google.com/file/d/1FAKE_LINK_${i + 1}/view?usp=sharing`
        }))
    },
    {
        title: "Love Between Fairy and Devil",
        year: 2022,
        rating: "8.9",
        desc: "A feared demon lord awakens after 30,000 years and unexpectedly falls for a gentle orchid fairy destined to change his fate.",
        poster: "https://picsum.photos/400/600?random=102",
        episodes: Array.from({ length: 36 }, (_, i) => ({
            ep: i + 1,
            title: `Episode ${i + 1}`,
            link: `https://drive.google.com/file/d/1FAKE_LINK_${i + 101}/view?usp=sharing`
        }))
    },
    {
        title: "Eternal Love",
        year: 2017,
        rating: "8.7",
        desc: "A divine romance that spans three lifetimes between a goddess and a heavenly lord, filled with sacrifice and destiny.",
        poster: "https://picsum.photos/400/600?random=103",
        episodes: Array.from({ length: 58 }, (_, i) => ({
            ep: i + 1,
            title: `Episode ${i + 1}`,
            link: `https://drive.google.com/file/d/1FAKE_LINK_${i + 201}/view?usp=sharing`
        }))
    },
    {
        title: "Story of Yanxi Palace",
        year: 2018,
        rating: "8.6",
        desc: "A palace maid rises through cunning, betrayal, and ambition in the opulent yet dangerous Qing Dynasty court.",
        poster: "https://picsum.photos/400/600?random=104",
        episodes: Array.from({ length: 70 }, (_, i) => ({
            ep: i + 1,
            title: `Episode ${i + 1}`,
            link: `https://drive.google.com/file/d/1FAKE_LINK_${i + 301}/view?usp=sharing`
        }))
    },
    {
        title: "Word of Honor",
        year: 2021,
        rating: "8.8",
        desc: "A martial arts brotherhood forged in mystery, loyalty, and hidden destinies amid the chaos of the jianghu.",
        poster: "https://picsum.photos/400/600?random=105",
        episodes: Array.from({ length: 36 }, (_, i) => ({
            ep: i + 1,
            title: `Episode ${i + 1}`,
            link: `https://drive.google.com/file/d/1FAKE_LINK_${i + 401}/view?usp=sharing`
        }))
    },
    {
        title: "Till the End of the Moon",
        year: 2023,
        rating: "9.0",
        desc: "A desperate journey through time to stop a demonic catastrophe, bound by love and sacrifice.",
        poster: "https://picsum.photos/400/600?random=107",
        episodes: Array.from({ length: 40 }, (_, i) => ({
            ep: i + 1,
            title: `Episode ${i + 1}`,
            link: `https://drive.google.com/file/d/1FAKE_LINK_${i + 501}/view?usp=sharing`
        }))
    },
    {
        title: "Lost You Forever",
        year: 2023,
        rating: "8.7",
        desc: "A heartbreaking tale of love, memory, and identity across three realms and forgotten pasts.",
        poster: "https://picsum.photos/400/600?random=109",
        episodes: Array.from({ length: 39 }, (_, i) => ({
            ep: i + 1,
            title: `Episode ${i + 1}`,
            link: `https://drive.google.com/file/d/1FAKE_LINK_${i + 601}/view?usp=sharing`
        }))
    },
    {
        title: "Ashes of Love",
        year: 2018,
        rating: "8.5",
        desc: "A fiery and tragic romance between a fire immortal and a heavenly prince destined to clash.",
        poster: "https://picsum.photos/400/600?random=106",
        episodes: Array.from({ length: 63 }, (_, i) => ({
            ep: i + 1,
            title: `Episode ${i + 1}`,
            link: `https://drive.google.com/file/d/1FAKE_LINK_${i + 701}/view?usp=sharing`
        }))
    },
    {
        title: "Immortal Samsara",
        year: 2022,
        rating: "8.4",
        desc: "A cursed love story spanning lifetimes between immortals and demons in a world of fate.",
        poster: "https://picsum.photos/400/600?random=108",
        episodes: Array.from({ length: 40 }, (_, i) => ({
            ep: i + 1,
            title: `Episode ${i + 1}`,
            link: `https://drive.google.com/file/d/1FAKE_LINK_${i + 801}/view?usp=sharing`
        }))
    },
    {
        title: "The Longest Promise",
        year: 2023,
        rating: "8.6",
        desc: "A destined bond between a dragon and a princess that defies time and tragedy.",
        poster: "https://picsum.photos/400/600?random=110",
        episodes: Array.from({ length: 36 }, (_, i) => ({
            ep: i + 1,
            title: `Episode ${i + 1}`,
            link: `https://drive.google.com/file/d/1FAKE_LINK_${i + 901}/view?usp=sharing`
        }))
    },
    {
        title: "Who Rules the World",
        year: 2022,
        rating: "8.5",
        desc: "Two powerful martial artists cross paths in a world of swords, secrets, and hidden identities.",
        poster: "https://picsum.photos/400/600?random=111",
        episodes: Array.from({ length: 40 }, (_, i) => ({
            ep: i + 1,
            title: `Episode ${i + 1}`,
            link: `https://drive.google.com/file/d/1FAKE_LINK_${i + 1001}/view?usp=sharing`
        }))
    },
    {
        title: "Ancient Love Poetry",
        year: 2021,
        rating: "8.6",
        desc: "Gods and immortals face fate, love, and ultimate sacrifice across countless eons.",
        poster: "https://picsum.photos/400/600?random=112",
        episodes: Array.from({ length: 59 }, (_, i) => ({
            ep: i + 1,
            title: `Episode ${i + 1}`,
            link: `https://drive.google.com/file/d/1FAKE_LINK_${i + 1101}/view?usp=sharing`
        }))
    }
];

// Populate grid
const grid = document.getElementById('cdrama-grid');

cdramaList.forEach(drama => {
    const card = document.createElement('div');
    card.className = 'drama-card';
    card.style.backgroundImage = `url(${drama.poster})`;

    card.innerHTML = `
      <div class="play-overlay">
        <i class="fas fa-play"></i>
      </div>
      <div class="drama-title-overlay">
        ${drama.title}
      </div>
      <div class="drama-info">
        <small>${drama.year} • Rating: ${drama.rating}</small>
      </div>
    `;

    card.addEventListener('click', () => openEpisodeModal(drama));
    grid.appendChild(card);
});

// Modal Logic
const episodeModal = document.getElementById('episodeModal');
const closeEpisodeModal = document.getElementById('closeEpisodeModal');
const modalDramaTitle = document.getElementById('modalDramaTitle');
const modalDramaInfo = document.getElementById('modalDramaInfo');
const modalDramaDesc = document.getElementById('modalDramaDesc');
const modalPoster = document.getElementById('modalPoster');
const episodeList = document.getElementById('episodeList');

function openEpisodeModal(drama) {
    modalDramaTitle.textContent = drama.title;
    modalDramaInfo.textContent = `${drama.year} • Rating: ${drama.rating} • ${drama.episodes.length} Episodes`;
    modalDramaDesc.textContent = drama.desc || "A captivating tale of love, power, and destiny in the cultivation world.";
    modalPoster.style.backgroundImage = `url(${drama.poster})`;

    episodeList.innerHTML = '';

    drama.episodes.forEach(ep => {
        const item = document.createElement('div');
        item.className = 'episode-item';
        item.innerHTML = `
        <a href="${ep.link}" target="_blank" rel="noopener noreferrer">
          Episode ${ep.ep} – ${ep.title}
        </a>
        <small>Google Drive • Click to watch</small>
      `;
        episodeList.appendChild(item);
    });

    episodeModal.style.display = 'flex';
}

closeEpisodeModal.addEventListener('click', () => {
    episodeModal.style.display = 'none';
});

episodeModal.addEventListener('click', e => {
    if (e.target === episodeModal) episodeModal.style.display = 'none';
});

// Filter button active state
document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        // You can add real filtering logic here later (e.g., by adding genre tags to cdramaList)
    });
});