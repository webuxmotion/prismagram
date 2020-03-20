import { prisma } from '../../../../generated/prisma-client'

export default {
  Query: {
    seeFeed: async (_, __, { request, isAuthenticated }) => {
      isAuthenticated(request)
      const { user } = request
      const following = await prisma.user({ id: user.id }).following()
      const followingIds = following
        .map(user => user.id)
      return prisma.posts({ 
        where: {
          user: {
            id_in: [...followingIds, user.id]
          }
        },
        orderBy: "id_DESC"
      })
    }
  }
}