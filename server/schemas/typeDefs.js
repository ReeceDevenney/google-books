const { gql } = require('apollo-server-express');

const typeDefs = gql`
type User {
    _id: ID
    username: String
    email: String
    bookCount: Int
    savedBooks: [Book]
}

type Book {
    _id: ID
    authors: [String]
    description: String
    title: String
    image: String
    link: String
}

type Auth {
    token: ID!
    user: User
}

input SaveInput {
    authors: [String],
    description: String,
    title: String,
    bookId: ID!
    image: String,
}

type Query {
    me: User
    users: [User]
}

type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveBook(input: SaveInput): User
    removeBook(bookId: ID!): User
}
`
module.exports = typeDefs;