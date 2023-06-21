import PropTypes from 'prop-types';

export const AllNotes = ({ notes }) => {
    return (
        <div className='all-notes-div'>
            <h1>All notes</h1>
            {notes.map((note) => (
                <div key={note.id} className='all-notes-map-div'>
                    <h2>{note.title}</h2>
                    <p>{note.body}</p>
                </div>
            ))}
        </div>
    )
}

AllNotes.propTypes = {
    notes: PropTypes.array.isRequired
}