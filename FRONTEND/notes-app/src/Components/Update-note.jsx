import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { EDIT_NOTE } from '../Queries';

export const UpdateNote = () => {
    const [noteUpdateInput, setNoteUpdateInput] = useState({
        title:"",
        body:""
    })

    const [ editNote ] = useMutation(EDIT_NOTE);

    const changeHandler = e => {
        const {name, value} = e.target;
        setNoteUpdateInput({
            ...noteUpdateInput,
            [name]: value
        })

    }
    
    const {title, body} = noteUpdateInput;
    const submitHandler = e => {
        e.preventDefault();
        editNote({ variables: { title, body }})
        setNoteUpdateInput({
            updateTitle: "",
            updateBody:""
        })
    }


    return (
        <div className='update-note-div'>
            <h2>Update Note</h2>
            <form onSubmit={submitHandler}>
                <label>
                    Title:
                    <input type="text" placeholder="Update title" name="title" value={title} onChange={changeHandler} />
                </label>
                <label>
                    Body:
                    <input type="text" placeholder="Update body" name="body" value={body} onChange={changeHandler} />
                </label>
                <button>Update Note</button>
            </form>
        </div>
    )
}