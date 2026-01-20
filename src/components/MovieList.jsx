import MovieItem from './MovieItem';

export default function MovieList({ movies, onToggle, onDelete }) {
    if (!movies.length) {
        return <p>No movies found. Add one!</p>
    }

    return (
        <ul style={{ listStyle: 'none', padding: '0' }}>
            {movies.map(movie => (
                <MovieItem
                    key={movie.id}
                    movie={movie}
                    onToggle={onToggle}
                    onDelete={onDelete}
                />
            ))}
        </ul>
    );
}