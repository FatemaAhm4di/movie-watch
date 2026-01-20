import { useState } from 'react';
import AddMovieForm from './components/AddMovieForm';
import FilterControls from './components/FilterControls';
import MovieItem from './components/MovieItem';
import MovieList from './components/MovieList';
import SummaryStats from './components/SummaryStats'

function App() {
  const [movies, setMovies] = useState([]);
  const [filter, setFilter] = useState('All');

  const watchedCount = movies.filter(m => m.watched).length;
  const unWatchedCount = movies.length - watchedCount;
  const totalMovies = movies.length;

  const filteredMovies = movies.filter(movie => {
    if (filter === 'Watched') return movie.watched;
    if (filter === 'Unwatched') return !movie.watched;
    return true;
  });

  const addMovie = (title, genre) => {
    const newMovie = {
      id: Date.now().toString(),
      title,
      genre,
      watched: false,
    };
    setMovies(prev => [newMovie, ...prev]);
  };

  const toggleWatched = (id) => {
    setMovies(prev =>
      prev.map(movie =>
        movie.id === id ? { ...movie, watched: !movie.watched } : movie
      )
    );
  }

  const deleteMovie = (id) => {
    setMovies(prev => prev.filter(movie => movie.id !== id));
  }


  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
      <h1>🎬 Movie Watchlist Manager</h1>

      <AddMovieForm onAdd={addMovie} />
      <FilterControls filter={filter} onFilterChange={setFilter} />
      <SummaryStats
        total={totalMovies}
        watched={watchedCount}
        unwatched={unWatchedCount}
      />
      <MovieList
        movies={filteredMovies}
        onToggle={toggleWatched}
        onDelete={deleteMovie}
      />
    </div>
  );
}

export default App;