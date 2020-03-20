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
`;

export const FILE_STRING = `
  id
  url
`;

export const FULL_POST_FRAGMENT = `
  fragment PostParts on Post {
    id
    location
    caption
    files {
      ${FILE_STRING}
    }
    comments {
      ${COMMENT_STRING}
    }
    user {
      ${USER_STRING}
    }
  }
`;

export const ROOM_FREGMENT = `
  fragment RoomParts on Room {
    id
    participants {
      id
    }
  }
`