export const USER_FRAGMENT = `
fragment UserParts on User {
  user {
    username
  }
  posts {
    id
    caption
  }
}
`;