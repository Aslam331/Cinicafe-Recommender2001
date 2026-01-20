// Movie Database with theaters and ticket prices
const movies = [
    // Recent Hollywood Movies (2024, 2023, 2022)
    {
        id: 1,
        title: "Dune: Part Two",
        genres: ["Sci-Fi", "Adventure", "Drama"],
        rating: 8.8,
        year: 2024,
        director: "Denis Villeneuve",
        actors: ["Timothée Chalamet", "Zendaya", "Rebecca Ferguson"],
        poster: "https://image.tmdb.org/t/p/w500/d5NXSklXo0qyIYkgV94XAgMIckC.jpg",
        trailer: "https://www.youtube.com/embed/U2Qp5pL3ovA",
        description: "Paul Atreides unites with Chani and the Fremen while seeking revenge against the conspirators who destroyed his family.",
        language: "English",
        theaters: [
            { name: "PVR Cinemas", location: "Phoenix Mall, Chennai", price: 250, timings: ["10:00 AM", "2:30 PM", "6:45 PM", "10:00 PM"] },
            { name: "INOX", location: "Express Avenue, Chennai", price: 280, timings: ["11:00 AM", "3:00 PM", "7:00 PM", "10:30 PM"] },
            { name: "SPI Cinemas", location: "Grand Mall, Chennai", price: 300, timings: ["10:30 AM", "2:00 PM", "6:30 PM", "9:45 PM"] }
        ]
    },
    {
        id: 2,
        title: "Oppenheimer",
        genres: ["Drama", "Biography", "Thriller"],
        rating: 8.9,
        year: 2023,
        director: "Christopher Nolan",
        actors: ["Cillian Murphy", "Emily Blunt", "Robert Downey Jr."],
        poster: "https://image.tmdb.org/t/p/w500/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg",
        trailer: "https://www.youtube.com/embed/uYPbbksJxIg",
        description: "The story of American scientist J. Robert Oppenheimer and his role in the development of the atomic bomb.",
        language: "English",
        theaters: [
            { name: "PVR Cinemas", location: "Ampa Skywalk, Chennai", price: 220, timings: ["12:00 PM", "4:00 PM", "8:00 PM"] },
            { name: "SPI Cinemas", location: "Grand Mall, Chennai", price: 250, timings: ["11:30 AM", "3:30 PM", "7:30 PM"] }
        ]
    },
    {
        id: 3,
        title: "Barbie",
        genres: ["Comedy", "Adventure", "Fantasy"],
        rating: 7.5,
        year: 2023,
        director: "Greta Gerwig",
        actors: ["Margot Robbie", "Ryan Gosling", "America Ferrera"],
        poster: "https://image.tmdb.org/t/p/w500/iuFNMS8U5cb6xfzi51Dbkovj7vM.jpg",
        trailer: "https://www.youtube.com/embed/pBk4NYhWNMM",
        description: "Barbie suffers a crisis that leads her to question her world and her existence.",
        language: "English",
        theaters: [
            { name: "INOX", location: "Express Avenue, Chennai", price: 200, timings: ["10:00 AM", "2:00 PM", "6:00 PM", "9:30 PM"] },
            { name: "PVR Cinemas", location: "Phoenix Mall, Chennai", price: 230, timings: ["11:00 AM", "3:00 PM", "7:00 PM"] }
        ]
    },
    {
        id: 4,
        title: "Spider-Man: Across the Spider-Verse",
        genres: ["Animation", "Action", "Adventure"],
        rating: 8.9,
        year: 2023,
        director: "Joaquim Dos Santos",
        actors: ["Shameik Moore", "Hailee Steinfeld", "Oscar Isaac"],
        poster: "https://image.tmdb.org/t/p/w500/8Vt6mWEReuy4e61K2zH6hcx0C7y.jpg",
        trailer: "https://www.youtube.com/embed/shW9i6k8cB0",
        description: "Miles Morales catapults across the Multiverse, where he encounters a team of Spider-People charged with protecting its very existence.",
        language: "English",
        theaters: [
            { name: "SPI Cinemas", location: "Grand Mall, Chennai", price: 220, timings: ["10:30 AM", "2:30 PM", "6:30 PM", "10:00 PM"] },
            { name: "PVR Cinemas", location: "Ampa Skywalk, Chennai", price: 240, timings: ["11:15 AM", "3:15 PM", "7:15 PM"] }
        ]
    },
    {
        id: 5,
        title: "Top Gun: Maverick",
        genres: ["Action", "Drama"],
        rating: 8.3,
        year: 2022,
        director: "Joseph Kosinski",
        actors: ["Tom Cruise", "Miles Teller", "Jennifer Connelly"],
        poster: "https://image.tmdb.org/t/p/w500/62HCnUTziyWcpDaBO2i1DX17ljH.jpg",
        trailer: "https://www.youtube.com/embed/giXco2jaZ_4",
        description: "After thirty years, Maverick is still pushing the envelope as a top naval aviator, but must confront ghosts of his past.",
        language: "English",
        theaters: [
            { name: "INOX", location: "Express Avenue, Chennai", price: 200, timings: ["12:00 PM", "4:00 PM", "8:00 PM"] },
            { name: "SPI Cinemas", location: "Grand Mall, Chennai", price: 220, timings: ["11:00 AM", "3:00 PM", "7:00 PM"] }
        ]
    },
    {
        id: 6,
        title: "Everything Everywhere All at Once",
        genres: ["Action", "Comedy", "Sci-Fi"],
        rating: 8.7,
        year: 2022,
        director: "Daniel Kwan",
        actors: ["Michelle Yeoh", "Stephanie Hsu", "Ke Huy Quan"],
        poster: "https://image.tmdb.org/t/p/w500/w3LxiVYdWWRvEVdn5RYq6jIqkb1.jpg",
        trailer: "https://www.youtube.com/embed/wxN1T1uxQ2g",
        description: "An aging Chinese immigrant is swept up in an insane adventure, where she alone can save what's important to her.",
        language: "English",
        theaters: [
            { name: "PVR Cinemas", location: "Phoenix Mall, Chennai", price: 210, timings: ["10:00 AM", "2:00 PM", "6:00 PM", "10:00 PM"] }
        ]
    },
    
    // Tamil Movies (2024, 2023, 2022)
    {
        id: 7,
        title: "Captain Miller",
        genres: ["Action", "Drama", "Adventure"],
        rating: 8.2,
        year: 2024,
        director: "Arun Matheswaran",
        actors: ["Dhanush", "Priyanka Arul Mohan", "Sundeep Kishan"],
        poster: "https://image.tmdb.org/t/p/w500/jFZ6bCDhYuZG4q9qKCPQKY5wn3f.jpg",
        trailer: "https://www.youtube.com/embed/UdCcKDGCTZ8",
        description: "A story set in the pre-Independence era about a man who becomes a rebel leader fighting against British oppression.",
        language: "Tamil",
        theaters: [
            { name: "PVR Cinemas", location: "Phoenix Mall, Chennai", price: 180, timings: ["10:00 AM", "1:30 PM", "5:00 PM", "8:30 PM"] },
            { name: "INOX", location: "Express Avenue, Chennai", price: 200, timings: ["11:00 AM", "2:30 PM", "6:00 PM", "9:30 PM"] },
            { name: "SPI Cinemas", location: "Grand Mall, Chennai", price: 190, timings: ["10:30 AM", "2:00 PM", "5:30 PM", "9:00 PM"] },
            { name: "AGS Cinemas", location: "Villivakkam, Chennai", price: 150, timings: ["11:30 AM", "3:00 PM", "6:30 PM", "10:00 PM"] }
        ]
    },
    {
        id: 8,
        title: "Jailer",
        genres: ["Action", "Crime", "Thriller"],
        rating: 7.8,
        year: 2023,
        director: "Nelson Dilipkumar",
        actors: ["Rajinikanth", "Ramya Krishnan", "Vinayakan"],
        poster: "https://image.tmdb.org/t/p/w500/cOtpF5YBHcpDZYZKRy8lGmGzBOj.jpg",
        trailer: "https://www.youtube.com/embed/IqrgxZLd_gE",
        description: "A retired jailer goes on a mission to track down his son's killers when the system fails to deliver justice.",
        language: "Tamil",
        theaters: [
            { name: "PVR Cinemas", location: "Ampa Skywalk, Chennai", price: 250, timings: ["10:00 AM", "1:00 PM", "4:00 PM", "7:00 PM", "10:00 PM"] },
            { name: "INOX", location: "Express Avenue, Chennai", price: 280, timings: ["11:00 AM", "2:00 PM", "5:00 PM", "8:00 PM", "11:00 PM"] },
            { name: "SPI Cinemas", location: "Grand Mall, Chennai", price: 270, timings: ["10:30 AM", "1:30 PM", "4:30 PM", "7:30 PM", "10:30 PM"] },
            { name: "AGS Cinemas", location: "Villivakkam, Chennai", price: 200, timings: ["12:00 PM", "3:00 PM", "6:00 PM", "9:00 PM"] }
        ]
    },
    {
        id: 9,
        title: "Vikram",
        genres: ["Action", "Crime", "Thriller"],
        rating: 8.5,
        year: 2022,
        director: "Lokesh Kanagaraj",
        actors: ["Kamal Haasan", "Vijay Sethupathi", "Fahadh Faasil"],
        poster: "https://image.tmdb.org/t/p/w500/1m3W6cpgwuIyjtg5nSnPx7yFkXW.jpg",
        trailer: "https://www.youtube.com/embed/OKBMCL-frPU",
        description: "A high-octane action thriller where a special investigator investigates a murder case involving a masked vigilante.",
        language: "Tamil",
        theaters: [
            { name: "PVR Cinemas", location: "Phoenix Mall, Chennai", price: 220, timings: ["11:00 AM", "2:30 PM", "6:00 PM", "9:30 PM"] },
            { name: "SPI Cinemas", location: "Grand Mall, Chennai", price: 240, timings: ["10:00 AM", "1:30 PM", "5:00 PM", "8:30 PM"] },
            { name: "AGS Cinemas", location: "Villivakkam, Chennai", price: 180, timings: ["12:00 PM", "3:30 PM", "7:00 PM", "10:30 PM"] }
        ]
    },
    {
        id: 10,
        title: "Leo",
        genres: ["Action", "Crime", "Drama"],
        rating: 7.5,
        year: 2023,
        director: "Lokesh Kanagaraj",
        actors: ["Vijay", "Trisha Krishnan", "Sanjay Dutt"],
        poster: "https://image.tmdb.org/t/p/w500/90H6u2orSt1jbYveHv1nXSZxq9m.jpg",
        trailer: "https://www.youtube.com/embed/Po3jStA673E",
        description: "A mild-mannered cafe owner is forced to confront his past when a group of ruthless gangsters track him down.",
        language: "Tamil",
        theaters: [
            { name: "PVR Cinemas", location: "Phoenix Mall, Chennai", price: 300, timings: ["10:00 AM", "1:00 PM", "4:00 PM", "7:00 PM", "10:00 PM"] },
            { name: "INOX", location: "Express Avenue, Chennai", price: 320, timings: ["11:00 AM", "2:00 PM", "5:00 PM", "8:00 PM", "11:00 PM"] },
            { name: "SPI Cinemas", location: "Grand Mall, Chennai", price: 310, timings: ["10:30 AM", "1:30 PM", "4:30 PM", "7:30 PM", "10:30 PM"] },
            { name: "AGS Cinemas", location: "Villivakkam, Chennai", price: 250, timings: ["12:00 PM", "3:00 PM", "6:00 PM", "9:00 PM"] }
        ]
    },
    {
        id: 11,
        title: "Ponniyin Selvan: Part 2",
        genres: ["Action", "Drama", "History"],
        rating: 8.0,
        year: 2023,
        director: "Mani Ratnam",
        actors: ["Vikram", "Aishwarya Rai", "Karthi"],
        poster: "https://image.tmdb.org/t/p/w500/95VEF0ZuL94vYUlxKwQNmDVQLdP.jpg",
        trailer: "https://www.youtube.com/embed/KJkJnHUcwOY",
        description: "The epic tale of the Chola dynasty continues as the prince embarks on a journey filled with political intrigue.",
        language: "Tamil",
        theaters: [
            { name: "PVR Cinemas", location: "Ampa Skywalk, Chennai", price: 280, timings: ["10:00 AM", "2:00 PM", "6:00 PM", "10:00 PM"] },
            { name: "INOX", location: "Express Avenue, Chennai", price: 300, timings: ["11:00 AM", "3:00 PM", "7:00 PM"] },
            { name: "SPI Cinemas", location: "Grand Mall, Chennai", price: 290, timings: ["10:30 AM", "2:30 PM", "6:30 PM", "10:30 PM"] }
        ]
    },
    {
        id: 12,
        title: "Good Night",
        genres: ["Comedy", "Drama", "Family"],
        rating: 7.8,
        year: 2023,
        director: "Vinayak Chandrasekaran",
        actors: ["Manikandan", "Meetha Raghunath", "Ramesh Thilak"],
        poster: "https://image.tmdb.org/t/p/w500/jO10L99cVqzY3BrEfvnxXkR5U1r.jpg",
        trailer: "https://www.youtube.com/embed/k_wgZ4XJ1jE",
        description: "A heartwarming story about a man struggling with sleep apnea and how it affects his relationships.",
        language: "Tamil",
        theaters: [
            { name: "PVR Cinemas", location: "Phoenix Mall, Chennai", price: 150, timings: ["10:00 AM", "1:00 PM", "4:00 PM", "7:00 PM"] },
            { name: "SPI Cinemas", location: "Grand Mall, Chennai", price: 170, timings: ["11:00 AM", "2:00 PM", "5:00 PM", "8:00 PM"] },
            { name: "AGS Cinemas", location: "Villivakkam, Chennai", price: 130, timings: ["12:00 PM", "3:00 PM", "6:00 PM", "9:00 PM"] }
        ]
    },
    {
        id: 13,
        title: "Soorarai Pottru",
        genres: ["Drama", "Biography"],
        rating: 9.1,
        year: 2022,
        director: "Sudha Kongara",
        actors: ["Suriya", "Aparna Balamurali", "Paresh Rawal"],
        poster: "https://image.tmdb.org/t/p/w500/1bEdVbOHz1Pw0qbWeqZvqSZXBmZ.jpg",
        trailer: "https://www.youtube.com/embed/fa_DIw1UXqs",
        description: "The story of Nedumaaran Rajangam, a man who goes against all odds to make air travel affordable for the common man.",
        language: "Tamil",
        theaters: [
            { name: "PVR Cinemas", location: "Ampa Skywalk, Chennai", price: 180, timings: ["11:00 AM", "3:00 PM", "7:00 PM"] },
            { name: "SPI Cinemas", location: "Grand Mall, Chennai", price: 200, timings: ["10:30 AM", "2:30 PM", "6:30 PM", "10:00 PM"] }
        ]
    },
    
    // More Popular Movies
    {
        id: 14,
        title: "The Dark Knight",
        genres: ["Action", "Crime", "Drama"],
        rating: 9.0,
        year: 2008,
        director: "Christopher Nolan",
        actors: ["Christian Bale", "Heath Ledger"],
        poster: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
        trailer: "https://www.youtube.com/embed/EXeTwQWrcwY",
        description: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
        language: "English",
        theaters: [
            { name: "PVR Cinemas", location: "Phoenix Mall, Chennai", price: 180, timings: ["12:00 PM", "4:00 PM", "8:00 PM"] }
        ]
    },
    {
        id: 15,
        title: "Inception",
        genres: ["Sci-Fi", "Action", "Thriller"],
        rating: 8.8,
        year: 2010,
        director: "Christopher Nolan",
        actors: ["Leonardo DiCaprio", "Marion Cotillard"],
        poster: "https://image.tmdb.org/t/p/w500/oYuLEt3zVCKq57qu2F8dT7NIa6f.jpg",
        trailer: "https://www.youtube.com/embed/YoHD9XEInc0",
        description: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
        language: "English",
        theaters: [
            { name: "INOX", location: "Express Avenue, Chennai", price: 200, timings: ["11:00 AM", "3:00 PM", "7:00 PM"] }
        ]
    }
];

// User ratings storage
let userRatings = JSON.parse(localStorage.getItem('movieRatings')) || {};
let featuredMovie = null;
let currentGenreFilter = null;

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    setupHeroBanner();
    displayMoviesByGenre();
    setupEventListeners();
    setupModal();
    setupNavbar();
});

// Setup Hero Banner with featured movie
function setupHeroBanner() {
    // Select a random high-rated movie for the hero
    const highRatedMovies = movies.filter(m => m.rating >= 8.0 && m.year >= 2022);
    if (highRatedMovies.length === 0) {
        featuredMovie = movies[0];
    } else {
        featuredMovie = highRatedMovies[Math.floor(Math.random() * highRatedMovies.length)];
    }
    
    const heroSection = document.getElementById('heroSection');
    const heroTitle = document.getElementById('heroTitle');
    const heroDescription = document.getElementById('heroDescription');
    
    // Set hero background
    if (featuredMovie.poster) {
        heroSection.style.backgroundImage = `url(${featuredMovie.poster})`;
        heroSection.style.backgroundSize = 'cover';
        heroSection.style.backgroundPosition = 'center';
        heroSection.style.backgroundRepeat = 'no-repeat';
    } else {
        heroSection.style.backgroundColor = '#000';
    }
    
    heroTitle.textContent = featuredMovie.title;
    heroDescription.textContent = featuredMovie.description.substring(0, 150) + '...';
    
    // Setup hero buttons
    document.querySelector('.btn-play').addEventListener('click', () => {
        showMovieDetails(featuredMovie.id);
    });
    
    document.querySelector('.btn-info').addEventListener('click', () => {
        showMovieDetails(featuredMovie.id);
    });
}

// Display movies organized by genre
function displayMoviesByGenre() {
    const container = document.getElementById('moviesContainer');
    const allGenres = [...new Set(movies.flatMap(movie => movie.genres))].sort();
    
    // Prioritize recent movies
    const sortedMovies = [...movies].sort((a, b) => b.year - a.year);
    
    container.innerHTML = '';
    
    allGenres.forEach(genre => {
        const genreMovies = sortedMovies.filter(movie => movie.genres.includes(genre));
        
        if (genreMovies.length > 0) {
            const row = document.createElement('div');
            row.className = 'movie-row';
            row.innerHTML = `
                <h2 class="row-title">${genre}</h2>
                <div class="movie-slider">
                    ${genreMovies.map(movie => createMovieCard(movie)).join('')}
                </div>
            `;
            
            container.appendChild(row);
        }
    });
}

// Create movie card HTML
function createMovieCard(movie) {
    const posterUrl = movie.poster || '';
    const yearBadge = movie.year >= 2022 ? `<span class="year-badge">${movie.year}</span>` : '';
    
    return `
        <div class="movie-card" onclick="showMovieDetails(${movie.id})">
            <img src="${posterUrl}" alt="${movie.title}" 
                 onerror="this.src='data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22200%22 height=%22300%22%3E%3Crect fill=%22%23e50914%22 width=%22200%22 height=%22300%22/%3E%3Ctext fill=%22white%22 font-family=%22Arial%22 font-size=%2214%22 x=%2250%25%22 y=%2250%25%22 text-anchor=%22middle%22 dominant-baseline=%22middle%22%3E${encodeURIComponent(movie.title)}%3C/text%3E%3C/svg%3E'">
            ${yearBadge}
            <div class="movie-card-info">
                <div class="movie-card-title">${movie.title}</div>
                <div class="movie-card-rating">★ ${movie.rating} | ${movie.language || 'English'}</div>
            </div>
        </div>
    `;
}

// Setup event listeners
function setupEventListeners() {
    // Search functionality
    const searchBtn = document.getElementById('searchBtn');
    const searchContainer = document.getElementById('searchContainer');
    const searchInput = document.getElementById('searchInput');
    
    searchBtn.addEventListener('click', () => {
        searchContainer.classList.toggle('active');
        if (searchContainer.classList.contains('active')) {
            searchInput.focus();
        }
    });
    
    searchInput.addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase().trim();
        if (searchTerm) {
            filterMoviesBySearch(searchTerm);
        } else {
            displayMoviesByGenre();
        }
    });
    
    // Navigation links
    document.querySelectorAll('.nav-link[data-category]').forEach(link => {
        link.addEventListener('click', function() {
            document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
            this.classList.add('active');
            
            const category = this.dataset.category;
            if (category === 'home') {
                displayMoviesByGenre();
            } else if (category === 'movies') {
                filterByType('movie');
            }
        });
    });
}

// Setup navbar scroll effect
function setupNavbar() {
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
}

// Filter movies by search term
function filterMoviesBySearch(searchTerm) {
    const filtered = movies.filter(movie => {
        const searchableText = `
            ${movie.title} 
            ${movie.genres.join(' ')} 
            ${movie.director} 
            ${movie.actors.join(' ')}
            ${movie.language || ''}
        `.toLowerCase();
        
        return searchableText.includes(searchTerm);
    });
    
    displayFilteredMovies(filtered, `Search Results for "${searchTerm}"`);
}

// Display filtered movies
function displayFilteredMovies(moviesToDisplay, title) {
    const container = document.getElementById('moviesContainer');
    
    if (moviesToDisplay.length === 0) {
        container.innerHTML = `
            <div class="movie-row">
                <h2 class="row-title">${title}</h2>
                <div style="padding: 50px; text-align: center; color: #999;">
                    No movies found. Try a different search term.
                </div>
            </div>
        `;
        return;
    }
    
    container.innerHTML = `
        <div class="movie-row">
            <h2 class="row-title">${title} (${moviesToDisplay.length})</h2>
            <div class="movie-slider">
                ${moviesToDisplay.map(movie => createMovieCard(movie)).join('')}
            </div>
        </div>
    `;
}

// Setup modal
function setupModal() {
    const modal = document.getElementById('movieModal');
    const closeBtn = document.querySelector('.close-modal');
    
    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            modal.classList.remove('active');
            const iframe = modal.querySelector('iframe');
            if (iframe) {
                iframe.src = '';
            }
        });
    }
    
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('active');
            const iframe = modal.querySelector('iframe');
            if (iframe) {
                iframe.src = '';
            }
        }
    });
}

// Show movie details modal with theaters
function showMovieDetails(movieId) {
    const movie = movies.find(m => m.id === movieId);
    if (!movie) return;
    
    const modal = document.getElementById('movieModal');
    const modalBody = document.getElementById('modalBody');
    const userRating = userRatings[movieId] || 0;
    
    // Generate theaters HTML
    const theatersHTML = movie.theaters && movie.theaters.length > 0 ? `
        <div class="modal-section">
            <h3>🎬 Now Showing In Theaters</h3>
            <div class="theaters-list">
                ${movie.theaters.map((theater, index) => `
                    <div class="theater-item">
                        <div class="theater-header">
                            <div class="theater-name">${theater.name}</div>
                            <div class="ticket-price">₹${theater.price}</div>
                        </div>
                        <div class="theater-location">📍 ${theater.location}</div>
                        <div class="show-timings">
                            <strong>Show Timings:</strong>
                            <div class="timings-list">
                                ${theater.timings.map(time => `<span class="time-slot">${time}</span>`).join('')}
                            </div>
                        </div>
                        <button class="book-ticket-btn" onclick="alert('Booking for ${movie.title} at ${theater.name} - ₹${theater.price}')">
                            Book Tickets
                        </button>
                    </div>
                `).join('')}
            </div>
        </div>
    ` : `
        <div class="modal-section">
            <h3>🎬 Now Showing In Theaters</h3>
            <div style="padding: 20px; text-align: center; color: #999;">
                Theater information not available. Please check back later.
            </div>
        </div>
    `;
    
    modalBody.innerHTML = `
        <div class="modal-header">
            <img src="${movie.poster}" alt="${movie.title}" class="modal-poster" 
                 onerror="this.src='data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22200%22 height=%22300%22%3E%3Crect fill=%22%23e50914%22 width=%22200%22 height=%22300%22/%3E%3Ctext fill=%22white%22 font-family=%22Arial%22 font-size=%2216%22 x=%2250%25%22 y=%2250%25%22 text-anchor=%22middle%22 dominant-baseline=%22middle%22%3E${encodeURIComponent(movie.title)}%3C/text%3E%3C/svg%3E'">
            <div class="modal-header-info">
                <h2 class="modal-title">${movie.title}</h2>
                <div class="modal-meta">
                    <span class="modal-rating">★ ${movie.rating}</span>
                    <span class="modal-year">${movie.year}</span>
                    <span class="modal-language">${movie.language || 'English'}</span>
                    <span class="modal-genres">${movie.genres.join(' • ')}</span>
                </div>
            </div>
        </div>
        
        <div class="modal-content-details">
            ${theatersHTML}
            
            <div class="modal-section">
                <h3>Watch Trailer</h3>
                <div class="trailer-container">
                    <iframe 
                        src="${movie.trailer}?autoplay=0&rel=0" 
                        frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowfullscreen
                        class="trailer-iframe">
                    </iframe>
                </div>
            </div>
            
            <div class="modal-section">
                <h3>Plot Summary</h3>
                <p class="modal-description">${movie.description}</p>
            </div>
            
            <div class="modal-section">
                <h3>Cast & Crew</h3>
                <div class="modal-cast">
                    <div class="cast-item">
                        <strong>Director:</strong> ${movie.director}
                    </div>
                    <div class="cast-item">
                        <strong>Starring:</strong> ${movie.actors.join(', ')}
                    </div>
                </div>
            </div>
            
            <div class="modal-section">
                <h3>Rate This Movie</h3>
                <div class="rating-section">
                    <div class="user-rating-display">
                        <span>Your Rating:</span>
                        <div class="star-rating">
                            ${generateStarRating(userRating)}
                        </div>
                        <span class="rating-value">${userRating > 0 ? userRating.toFixed(1) : 'Not Rated'}</span>
                    </div>
                    <div class="rating-input-container">
                        <input type="range" 
                               class="rating-slider" 
                               min="0" 
                               max="10" 
                               step="0.5" 
                               value="${userRating}">
                        <div class="rating-labels">
                            <span>0</span>
                            <span>10</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    // Setup rating slider
    const ratingSlider = modalBody.querySelector('.rating-slider');
    const starRating = modalBody.querySelector('.star-rating');
    const ratingValue = modalBody.querySelector('.rating-value');
    
    if (ratingSlider) {
        ratingSlider.addEventListener('input', function() {
            const rating = parseFloat(this.value);
            userRatings[movie.id] = rating;
            localStorage.setItem('movieRatings', JSON.stringify(userRatings));
            
            starRating.innerHTML = generateStarRating(rating);
            ratingValue.textContent = rating > 0 ? rating.toFixed(1) : 'Not Rated';
        });
    }
    
    modal.classList.add('active');
}

// Generate star rating HTML
function generateStarRating(rating) {
    let stars = '';
    const fullStars = Math.floor(rating / 2);
    const hasHalfStar = (rating / 2) % 1 >= 0.5;
    
    for (let i = 0; i < 5; i++) {
        if (i < fullStars) {
            stars += '<span class="star-full">★</span>';
        } else if (i === fullStars && hasHalfStar) {
            stars += '<span class="star-full">★</span>';
        } else {
            stars += '<span class="star-empty">☆</span>';
        }
    }
    return stars;
}

// Filter by type (for future use)
function filterByType(type) {
    displayMoviesByGenre();
}
