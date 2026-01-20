export default function MovieItem({ movie, onToggle, onDelete }) {
    return (
        <li style={{ padding: '8px', borderBottom: '1px solid #eee' }}>
            <strong>{movie.title}</strong> ({movie.genre}) -
            {movie.watched ? '✅ Watched' : '❌ Unwatched'}
            <button onClick={() => onToggle(movie.id)} style={{ marginLeft: '8px', }}>Toggle</button>
            <button onClick={() => onDelete(movie.id)} style={{ marginLeft: '8px' }}>Delete</button>
        </li>
    )
}