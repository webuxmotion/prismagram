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

