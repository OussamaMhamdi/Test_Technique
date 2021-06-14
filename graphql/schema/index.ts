import { buildSchema } from'graphql';
const graphqlSchemas = buildSchema(`
       
    type Partage {
            _id: ID!
            user: User!
            tache: Tache!
            createdAt: String!
            updatedAt: String!
    }
    type Comment {
            _id: ID!
            description: String!
            user: User!
            tache: Tache!
            createdAt: String!
            updatedAt: String!
    }
    
    type Tache {
             _id: ID!
             name: String!
             description: String
             isCompleted: Boolean
             user: User!
        }
        type User {
            _id: ID!
            email: String!
            password: String
            createdTaches: [Tache!]
            partages : [Partage!]
            comments : [Comment!]
        }

        type AuthData {
            userId : ID!
            token : String!
        }
        input TacheInput {
            name: String!
            description: String
            isCompleted: Boolean
        }
        input CommentInput {
            description: String!
        }

        input UserInput {
            email: String!
            password: String!
        }

        type RootQuery {
            taches: [Tache!]!
            getTache(id: ID!): Tache
            partages: [Partage!]!
            comments:[Comment!]!
            login(email : String!, password : String!) : AuthData!
        }
        type RootMutation {
            addTache(tacheInput : TacheInput): Tache
            updateTahce(tacheInput : TacheInput): Tache
            deleteTache(tacheId: ID!): Tache
            addUser(userInput: UserInput): User
            partager(tacheid: ID!): Partage!
            cancelPartege(partageId: ID!): Tache
            deleteComment(commentId: ID!): Tache
            commenter(tacheid: ID!, commentInput : CommentInput ): Comment!
        }
        schema {
            query: RootQuery
            mutation: RootMutation
        }
    `)
    export {graphqlSchemas}