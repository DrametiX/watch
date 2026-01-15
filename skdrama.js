// K-Drama Data (12 popular & high-rated titles)
const kdramaList = [
    {
        title: "Crash Landing on You",
        year: 2019,
        rating: "8.9",
        desc: "A South Korean heiress crash-lands in North Korea and falls for the army officer who hides and protects her.",
        poster: "https://picsum.photos/400/600?random=201",
        episodes: Array.from({ length: 16 }, (_, i) => ({
            ep: i + 1,
            title: `Episode ${i + 1}`,
            link: `https://drive.google.com/file/d/1KFAKE_LINK_${i + 1}/view?usp=sharing`
        }))
    },
    {
        title: "Goblin",
        year: 2016,
        rating: "8.8",
        desc: "An immortal goblin seeks to end his curse by finding his destined bride, leading to timeless love and heartbreak.",
        poster: "https://picsum.photos/400/600?random=202",
        episodes: Array.from({ length: 16 }, (_, i) => ({
            ep: i + 1,
            title: `Episode ${i + 1}`,
            link: `https://drive.google.com/file/d/1KFAKE_LINK_${i + 101}/view?usp=sharing`
        }))
    },
    {
        title: "Reply 1988",
        year: 2015,
        rating: "9.1",
        desc: "A nostalgic look at friendship, family, and first love in a tight-knit Seoul neighborhood in 1988.",
        poster: "https://picsum.photos/400/600?random=203",
        episodes: Array.from({ length: 20 }, (_, i) => ({
            ep: i + 1,
            title: `Episode ${i + 1}`,
            link: `https://drive.google.com/file/d/1KFAKE_LINK_${i + 201}/view?usp=sharing`
        }))
    },
    {
        title: "It's Okay to Not Be Okay",
        year: 2020,
        rating: "8.8",
        desc: "A self-centered children's book author and a compassionate caregiver heal each other's emotional wounds.",
        poster: "https://picsum.photos/400/600?random=204",
        episodes: Array.from({ length: 16 }, (_, i) => ({
            ep: i + 1,
            title: `Episode ${i + 1}`,
            link: `https://drive.google.com/file/d/1KFAKE_LINK_${i + 301}/view?usp=sharing`
        }))
    },
    {
        title: "Vincenzo",
        year: 2021,
        rating: "8.7",
        desc: "An Italian-Korean mafia lawyer returns to Korea to take down a corrupt conglomerate with flair and vengeance.",
        poster: "https://picsum.photos/400/600?random=205",
        episodes: Array.from({ length: 20 }, (_, i) => ({
            ep: i + 1,
            title: `Episode ${i + 1}`,
            link: `https://drive.google.com/file/d/1KFAKE_LINK_${i + 401}/view?usp=sharing`
        }))
    },
    {
        title: "Moving",
        year: 2023,
        rating: "9.0",
        desc: "Superpowered teens and their parents hide their abilities while facing dangerous threats in modern Korea.",
        poster: "https://picsum.photos/400/600?random=206",
        episodes: Array.from({ length: 20 }, (_, i) => ({
            ep: i + 1,
            title: `Episode ${i + 1}`,
            link: `https://drive.google.com/file/d/1KFAKE_LINK_${i + 501}/view?usp=sharing`
        }))
    },
    {
        title: "Lovely Runner",
        year: 2024,
        rating: "9.1",
        desc: "A fan travels back in time to save her favorite idol from tragedy, sparking an emotional time-slip romance.",
        poster: "https://picsum.photos/400/600?random=207",
        episodes: Array.from({ length: 16 }, (_, i) => ({
            ep: i + 1,
            title: `Episode ${i + 1}`,
            link: `https://drive.google.com/file/d/1KFAKE_LINK_${i + 601}/view?usp=sharing`
        }))
    },
    {
        title: "Queen of Tears",
        year: 2024,
        rating: "8.9",
        desc: "A chaebol heiress and her husband rediscover love amid family crises and terminal illness secrets.",
        poster: "https://picsum.photos/400/600?random=208",
        episodes: Array.from({ length: 16 }, (_, i) => ({
            ep: i + 1,
            title: `Episode ${i + 1}`,
            link: `https://drive.google.com/file/d/1KFAKE_LINK_${i + 701}/view?usp=sharing`
        }))
    },
    {
        title: "When Life Gives You Tangerines",
        year: 2025,
        rating: "9.0",
        desc: "A generational love story set on Jeju Island, blending youth, dreams, and enduring romance.",
        poster: "https://picsum.photos/400/600?random=209",
        episodes: Array.from({ length: 16 }, (_, i) => ({
            ep: i + 1,
            title: `Episode ${i + 1}`,
            link: `https://drive.google.com/file/d/1KFAKE_LINK_${i + 801}/view?usp=sharing`
        }))
    },
    {
        title: "Twinkling Watermelon",
        year: 2023,
        rating: "8.9",
        desc: "A time-traveling teen tries to change his parents' fate while discovering music and first love.",
        poster: "https://picsum.photos/400/600?random=210",
        episodes: Array.from({ length: 16 }, (_, i) => ({
            ep: i + 1,
            title: `Episode ${i + 1}`,
            link: `https://drive.google.com/file/d/1KFAKE_LINK_${i + 901}/view?usp=sharing`
        }))
    },
    {
        title: "Alchemy of Souls",
        year: 2022,
        rating: "8.9",
        desc: "A powerful mage soul-swaps into a weak body and forms a fateful bond with her reluctant bodyguard.",
        poster: "https://picsum.photos/400/600?random=211",
        episodes: Array.from({ length: 30 }, (_, i) => ({
            ep: i + 1,
            title: `Episode ${i + 1}`,
            link: `https://drive.google.com/file/d/1KFAKE_LINK_${i + 1001}/view?usp=sharing`
        }))
    },
    {
        title: "Hidden Love",
        year: 2023,
        rating: "9.0",
        desc: "A girl secretly crushes on her brother's best friend for years until fate brings them closer as adults.",
        poster: "https://picsum.photos/400/600?random=212",
        episodes: Array.from({ length: 25 }, (_, i) => ({
            ep: i + 1,
            title: `Episode ${i + 1}`,
            link: `https://drive.google.com/file/d/1KFAKE_LINK_${i + 1101}/view?usp=sharing`
        }))
    }
];

// Populate premium drama grid
const grid = document.getElementById('kdrama-grid');

kdramaList.forEach(drama => {
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

// Episode Modal Logic (same as original)
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
    modalDramaDesc.textContent = drama.desc || "A captivating tale of love, growth, and destiny.";
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

// Optional: Add basic filter functionality (you can expand this)
document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        // Future: add filtering logic based on categories if you add genre tags to data
    });
});
