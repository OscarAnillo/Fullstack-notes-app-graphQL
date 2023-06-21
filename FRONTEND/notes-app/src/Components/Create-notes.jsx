import { useState } from "react"
import { useMutation } from "@apollo/client";

import { ALL_NOTES, CREATE_NOTE } from "../Queries";

export const CreateNote = () => {
    const [userInput, setUserInput] = useState({
        title: "",
        body: ""
    });

    const [ createNote ] = useMutation(CREATE_NOTE, {
        refetchQueries: [{ query: ALL_NOTES }]
    })

    const changeHandler = e => {
        const {name, value} = e.target;
        setUserInput({
            ...userInput,
            [name]: value
        })
    }

    const submitHandler = e => {
        e.preventDefault();
        createNote({ variables: {title, body}});

        setUserInput({
            title: "",
            body: ""
        })
    }

    const {title, body} = userInput

    return (
        <div className="create-note-div">
            <h2>Create a note</h2>
            <form onSubmit={submitHandler}>
                <label>
                    Title:
                    <input type="text" placeholder="Create your title" value={title}  name="title" onChange={changeHandler} />
                </label>
                <label>
                    Body:
                    <input type="text" placeholder="Create your content" value={body} name="body" onChange={changeHandler} />
                </label>
                <button>Create Note</button>
            </form>
        </div>
    )
}