import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import MovieSection from '../components/MovieSection';
import { useEffect, useState } from 'react';
import { fetchNowPlaying, fetchPopular, getPosterUrl, fetchUpcoming, fetchTopRated } from '../api/tmdb';
import Footer from '../components/Footer';

function Home() {
    const [justRelease, setJustRelease] = useState([]);
    const [popularMovies, setPopularMovies] = useState([]);
    const [upcomingMovies, setUpcomingMovies] = useState([]);
    const [topRatedMovies, setTopRatedMovies] = useState([]);
    useEffect(() => {
        const apiKey = import.meta.env.VITE_TMDB_API_KEY;
        if (!apiKey) return;
        
        // Fetch Just Release (Now Playing)
        fetchNowPlaying(apiKey, 'en-US', 1, 'US')
            .then((results) => {
                const mapped = results.map((m) => ({
                    id: m.id,
                    title: m.title || m.name,
                    posterUrl: getPosterUrl(m.poster_path, 'w342'),
                    voteAverage: m.vote_average,
                    releaseDate: m.release_date,
                }));
                setJustRelease(mapped);
            })
            .catch((err) => console.error(err));
            
        // Fetch Popular Movies
        fetchPopular(apiKey, 'en-US', 1)
            .then((results) => {
                const mapped = results.map((m) => ({
                    id: m.id,
                    title: m.title || m.name,
                    posterUrl: getPosterUrl(m.poster_path, 'w342'),
                    voteAverage: m.vote_average,
                    releaseDate: m.release_date,
                    genres: m.genre_ids ? ['Action', 'Movie'] : ['Action', 'Movie'], // Placeholder genres
                }));
                setPopularMovies(mapped);
            })
            .catch((err) => console.error(err));

        // Fetch Upcoming Movies
        fetchUpcoming(apiKey, 'en-US', 1, 'US')
            .then((results) => {
                const mapped = results.map((m) => ({
                    id: m.id,
                    title: m.title || m.name,
                    posterUrl: getPosterUrl(m.poster_path, 'w342'),
                    voteAverage: m.vote_average,
                    releaseDate: m.release_date,
                }));
                setUpcomingMovies(mapped);
            })
            .catch((err) => console.error(err));

        // Fetch Top Rated Movies
        fetchTopRated(apiKey, 'en-US', 1)
            .then((results) => {
                const mapped = results.map((m) => ({
                    id: m.id,
                    title: m.title || m.name,
                    posterUrl: getPosterUrl(m.poster_path, 'w342'),
                    voteAverage: m.vote_average,
                    releaseDate: m.release_date,
                }));
                setTopRatedMovies(mapped);
            })
            .catch((err) => console.error(err));
    }, []);

    const handleStartWatching = () => {
        const el = document.getElementById('just-release');
        if (el) {
            el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <div className="bg-neutral-900">
            <Header />
            <HeroSection onStartWatching={handleStartWatching} /> 
            <div id="just-release" className="px-6 py-6">
                <MovieSection title="Just Release" movies={justRelease} type="card" />
            </div>
            <div className="px-6 py-6">
                <MovieSection title="Popular" movies={popularMovies} type="card2" />
            </div>
            <div className="px-6 py-6">
                <MovieSection title="Upcoming" movies={upcomingMovies} type="card2" />
            </div>
            <div className="px-6 py-6">
                <MovieSection title="Top Rated" movies={topRatedMovies} type="card2" />
            </div>
            <Footer />
        </div>
    );
}

export default Home;