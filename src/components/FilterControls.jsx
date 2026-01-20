export default function FilterControls({ filter, onFilterChange }) {
    const buttonStyle = (value) => ({
        fontWeight: filter === value ? 'bold' : 'normal',
        marginLeft: value === 'All' ? '0' : '8px',
        padding: '4px 8px',
        cursor: 'pointer'
    });

    return (
        <div style={{ marginBottom: '16px' }}>
            <button
                onClick={() => onFilterChange('All')}
                style={buttonStyle('All')} 
            >
                All
            </button>
            <button
                onClick={() => onFilterChange('Watched')}
                style={buttonStyle('Watched')}
            >
                Watched
            </button>
            <button
                onClick={() => onFilterChange('Unwatched')}
                style={buttonStyle('Unwatched')} 
            >
                Unwatched
            </button>
        </div>
    );
}