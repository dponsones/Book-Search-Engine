// IMPORT THE gql METHOD FROM APOLLO SERVER
import { gql } from "@apollo/client";

// EXPORT CONST GET_ME QUERY
export const GET_ME = gql`
  {
    me {
      _id
      username
      email
      savedBooks {
        bookId
        authors
        image
        description
        title
        link
      }
    }
  }
`;

