// === Premium Movie Data (12 high-rated/popular titles) ===
const movieList = [
    {
        title: "Sinners",
        year: 2025,
        rating: "8.9",
        desc: "A supernatural epic blending Delta blues, vampire mythology, and deep personal tribute in the American South.",
        poster: "https://picsum.photos/400/600?random=301",
        details: "Director: Ryan Coogler • Stars: Michael B. Jordan • Runtime: 137 min",
        links: [
            { title: "Netflix Streaming", link: "https://www.netflix.com/title/FAKE_SINNERS" },
            { title: "Google Drive Download", link: "https://drive.google.com/file/d/1MFAKE_LINK_301/view?usp=sharing" }
        ]
    },
    {
        title: "One Battle After Another",
        year: 2025,
        rating: "8.8",
        desc: "Paul Thomas Anderson's postmodern Western deconstruction of American heroes, justice, and outlaws.",
        poster: "https://picsum.photos/400/600?random=302",
        details: "Director: Paul Thomas Anderson • Stars: Leonardo DiCaprio, Sean Penn • Runtime: 158 min",
        links: [
            { title: "HBO Max", link: "https://www.hbomax.com/FAKE_ONE_BATTLE" },
            { title: "Google Drive", link: "https://drive.google.com/file/d/1MFAKE_LINK_302/view?usp=sharing" }
        ]
    },
    {
        title: "Marty Supreme",
        year: 2025,
        rating: "9.0",
        desc: "Josh Safdie's high-energy ping-pong epic about ambition, the American dream, and chasing greatness.",
        poster: "https://picsum.photos/400/600?random=303",
        details: "Director: Josh Safdie • Stars: Timothée Chalamet • Runtime: 150 min",
        links: [
            { title: "A24 / Streaming", link: "https://a24films.com/FAKE_MARTY" },
            { title: "Google Drive", link: "https://drive.google.com/file/d/1MFAKE_LINK_303/view?usp=sharing" }
        ]
    },
    {
        title: "Frankenstein",
        year: 2025,
        rating: "8.7",
        desc: "Guillermo del Toro's passionate Gothic reimagining of Mary Shelley's classic tale of creation and hubris.",
        poster: "https://picsum.photos/400/600?random=304",
        details: "Director: Guillermo del Toro • Stars: Oscar Isaac, Jacob Elordi • Runtime: 145 min",
        links: [
            { title: "Netflix", link: "https://www.netflix.com/title/FAKE_FRANKENSTEIN" },
            { title: "Google Drive", link: "https://drive.google.com/file/d/1MFAKE_LINK_304/view?usp=sharing" }
        ]
    },
    {
        title: "Highest 2 Lowest",
        year: 2025,
        rating: "8.6",
        desc: "Spike Lee's modern Brooklyn-set remake of Kurosawa's classic, infused with cultural politics and tension.",
        poster: "https://picsum.photos/400/600?random=305",
        details: "Director: Spike Lee • Stars: Denzel Washington • Runtime: 130 min",
        links: [
            { title: "Streaming", link: "https://www.example.com/FAKE_HIGHEST" },
            { title: "Google Drive", link: "https://drive.google.com/file/d/1MFAKE_LINK_305/view?usp=sharing" }
        ]
    },
    {
        title: "Weapons",
        year: 2025,
        rating: "8.9",
        desc: "Zach Cregger's sprawling suburban horror-mystery of despair, secrets, and high-concept thrills.",
        poster: "https://picsum.photos/400/600?random=306",
        details: "Director: Zach Cregger • Stars: TBD • Runtime: 120 min",
        links: [
            { title: "A24 Streaming", link: "https://a24films.com/FAKE_WEAPONS" },
            { title: "Google Drive", link: "https://drive.google.com/file/d/1MFAKE_LINK_306/view?usp=sharing" }
        ]
    },
    {
        title: "The Godfather",
        year: 1972,
        rating: "9.2",
        desc: "The iconic crime saga of power, family, and the American Dream.",
        poster: "https://picsum.photos/400/600?random=307",
        details: "Director: Francis Ford Coppola • Stars: Marlon Brando, Al Pacino • Runtime: 175 min",
        links: [
            { title: "Paramount+", link: "https://www.paramountplus.com/FAKE_GODFATHER" },
            { title: "Google Drive", link: "https://drive.google.com/file/d/1MFAKE_LINK_307/view?usp=sharing" }
        ]
    },
    {
        title: "Inception",
        year: 2010,
        rating: "8.8",
        desc: "A thief who steals corporate secrets through dream-sharing technology is given the inverse task.",
        poster: "https://picsum.photos/400/600?random=308",
        details: "Director: Christopher Nolan • Stars: Leonardo DiCaprio • Runtime: 148 min",
        links: [
            { title: "Netflix", link: "https://www.netflix.com/title/FAKE_INCEPTION" },
            { title: "Google Drive", link: "https://drive.google.com/file/d/1MFAKE_LINK_308/view?usp=sharing" }
        ]
    },
    {
        title: "Parasite",
        year: 2019,
        rating: "8.5",
        desc: "Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy and destitute.",
        poster: "https://picsum.photos/400/600?random=309",
        details: "Director: Bong Joon-ho • Stars: Song Kang-ho • Runtime: 132 min",
        links: [
            { title: "HBO Max", link: "https://www.hbomax.com/FAKE_PARASITE" },
            { title: "Google Drive", link: "https://drive.google.com/file/d/1MFAKE_LINK_309/view?usp=sharing" }
        ]
    },
    {
        title: "Dune: Part Two",
        year: 2024,
        rating: "8.6",
        desc: "Paul Atreides unites with Chani and the Fremen while seeking revenge against those who destroyed his family.",
        poster: "https://picsum.photos/400/600?random=310",
        details: "Director: Denis Villeneuve • Stars: Timothée Chalamet • Runtime: 166 min",
        links: [
            { title: "Max", link: "https://www.max.com/FAKE_DUNE2" },
            { title: "Google Drive", link: "https://drive.google.com/file/d/1MFAKE_LINK_310/view?usp=sharing" }
        ]
    },
    {
        title: "La La Land",
        year: 2016,
        rating: "8.0",
        desc: "While navigating their careers in Los Angeles, a jazz pianist and an aspiring actress fall in love.",
        poster: "https://picsum.photos/400/600?random=311",
        details: "Director: Damien Chazelle • Stars: Ryan Gosling, Emma Stone • Runtime: 128 min",
        links: [
            { title: "Streaming", link: "https://www.example.com/FAKE_LALALAND" },
            { title: "Google Drive", link: "https://drive.google.com/file/d/1MFAKE_LINK_311/view?usp=sharing" }
        ]
    },
    {
        title: "RRR",
        year: 2022,
        rating: "7.8",
        desc: "A fictional tale of two Indian revolutionaries in the 1920s, packed with action and brotherhood.",
        poster: "https://picsum.photos/400/600?random=312",
        details: "Director: S.S. Rajamouli • Stars: N.T. Rama Rao Jr., Ram Charan • Runtime: 187 min",
        links: [
            { title: "Netflix", link: "https://www.netflix.com/title/FAKE_RRR" },
            { title: "Google Drive", link: "https://drive.google.com/file/d/1MFAKE_LINK_312/view?usp=sharing" }
        ]
    }
];

// Populate premium movie grid
const grid = document.getElementById('movies-grid');

movieList.forEach(movie => {
    const card = document.createElement('div');
    card.className = 'movie-card';
    card.style.backgroundImage = `url(${movie.poster})`;

    card.innerHTML = `
      <div class="play-overlay">
        <i class="fas fa-play"></i>
      </div>
      <div class="movie-title-overlay">
        ${movie.title}
      </div>
      <div class="movie-info">
        <small>${movie.year} • Rating: ${movie.rating}</small>
      </div>
    `;

    card.addEventListener('click', () => openMovieModal(movie));
    grid.appendChild(card);
});

// Movie Modal Logic
const movieModal = document.getElementById('movieModal');
const closeMovieModal = document.getElementById('closeMovieModal');
const modalMovieTitle = document.getElementById('modalMovieTitle');
const modalMovieInfo = document.getElementById('modalMovieInfo');
const modalMovieDesc = document.getElementById('modalMovieDesc');
const modalPoster = document.getElementById('modalPoster');
const watchList = document.getElementById('watchList');

function openMovieModal(movie) {
    modalMovieTitle.textContent = movie.title;
    modalMovieInfo.textContent = `${movie.details} • Rating: ${movie.rating}`;
    modalMovieDesc.textContent = movie.desc;
    modalPoster.style.backgroundImage = `url(${movie.poster})`;

    watchList.innerHTML = '';

    movie.links.forEach(link => {
        const item = document.createElement('div');
        item.className = 'watch-item';
        item.innerHTML = `
        <a href="${link.link}" target="_blank" rel="noopener noreferrer">
          ${link.title}
        </a>
        <small>Click to watch or download</small>
      `;
        watchList.appendChild(item);
    });

    movieModal.style.display = 'flex';
}

closeMovieModal.addEventListener('click', () => {
    movieModal.style.display = 'none';
});

movieModal.addEventListener('click', e => {
    if (e.target === movieModal) movieModal.style.display = 'none';
});

// Basic filter active state
document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        // Add real filtering later if genres added to data
    });
});
