import { gql } from '@apollo/client';

export const ALL_NOTES = gql`
    query {
        allNotes {
            id
            title
            body
        }
    }
`

export const CREATE_NOTE = gql`
    mutation createNote($title: String!, $body: String!){
        addNote(title: $title, body: $body){
            title
            body
        }
    }
`

export const EDIT_NOTE = gql`
    mutation editNote($title: String!, $body: String!){
        editNote(title: $title, body: $body){
            id
            title
            body
        }
    }
`