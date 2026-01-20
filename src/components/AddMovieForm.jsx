import { useState } from "react";

const GENRES = ['Action', 'Drama', 'Comedy', 'Sci-Fi', 'Horror', 'Romance'];

export default function AddMovieForm({ onAdd }) {
    const [title, setTitle] = useState('');
    const [genre, setGenre] = useState(GENRES[0]);


    const handleSubmit = (e) => {
        e.preventDefault();
        if (!title.trim()) return;
        onAdd(title.trim(), genre)
        setTitle('');
    };

    return (
        <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
            <input
                type="text"
                placeholder="Movie title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                style={{ marginRight: '8px', padding: '4px' }}
            />

            < select
                value={genre}
                onChange={(e) => setGenre(e.target.value)}
                style={{ marginRight: '8px', padding: '4px' }}
            >
                {GENRES.map(g => (
                    <option key={g} value={g}>{g}</option>
                ))}
            </select>
            <button
                type="submit"
                style={{ padding: '4px 8px' }}>
                Add Movie
            </button>
        </form>
    );
}