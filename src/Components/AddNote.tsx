import react from 'react';

const AddNote=()=>{

    return(
        <div>
            <h1>Add Note</h1>
            <p>This is the Add Note page.</p>
            <div>
                <label htmlFor="title">Title:</label>
                <input type="text" id="title" name="title" />
            </div>
             <div>
                <label htmlFor="content">Content:</label>
                <textarea id="content" name="content" />
            </div>
                <button type="submit">Add Note</button>
        </div>
    )
}

export default AddNote;