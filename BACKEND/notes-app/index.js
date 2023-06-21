const { ApolloServer } = require("@apollo/server");
const { startStandaloneServer } = require("@apollo/server/standalone");
const fs = require("fs");
const path = require("path");
const { v1: uuid } = require('uuid')

let notes = [
    {
        id: "1",
        title: "This is my first note",
        body:"This is the body of the first note"
    }
]

const resolvers = {
    Query: {
        allNotes: () => notes
    },
    Mutation: {
        addNote: (root, args) => {
            const newNote = {...args, id: uuid(), title: args.title, body: args.body}
            notes = notes.concat(newNote)
            return newNote;
        },
        editNote: (root, args) => {
            const note = notes.find((note) => note.title === args.title);
            if(!note) {
                return null;
            }

            const updatedNote = {...note, body: args.body}
            notes = notes.map(n => n.title === args.title ? updatedNote : n)
            return updatedNote;
        }
    }
}   

const server = new ApolloServer({
    typeDefs: fs.readFileSync(path.join(__dirname, "schema.graphql"), "utf-8" ),
    resolvers
});

startStandaloneServer(server, {
    listen: { port: 3005 },
}).then((res) => console.log(`Server running on port ${res.url}`))