export const USER_FRAGMENT = `
fragment UserParts on User {
  id
  username
  email
  firstName
  bio
  posts {
    id
    caption
  }
}
`;