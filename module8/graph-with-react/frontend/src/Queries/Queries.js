import { gql } from '@apollo/client'

export const GET_ALL_AUTHORS = gql`
query {
    allAuthors {
        name
        born
        bookCount
      }
}
`

export const GET_All_BOOK = gql`
query {
    allBooks {
        title
        author
        published
      }
}
`

export const ADD_BOOK = gql`
mutation addBook($title: String!, $published: Int!, $author: String!, $genres: [String!]!) {
  addBook(
    title: $title,
    published: $published,
    author: $author,
    genres: $genres
  ) {
    id
    title
    published
    author
    genres
  }
}
`
