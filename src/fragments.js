export const COMMENT_STRING = `
  id
  text
  user{
    id
    username
  }
`;

export const USER_STRING = `
  id
  username
  avatar
`;

export const FILE_STRING = `
  id
  url
`;

export const MESSAGE_STRING = `
  id
  text
  to {
    ${USER_STRING}
  }
  from {
    ${USER_STRING}
  }
`

export const ROOM_FRAGMENT = `
  fragment RoomParts on Room {
    id
    participants {
      ${USER_STRING}
    }
    messages {
      ${MESSAGE_STRING}
    }
  }
`

