import { prisma } from "../../../../generated/prisma-client"
import { isAuthenticated } from "../../../middlewares"
import { sendTextMail } from "../../../utils";

export default {
    Mutation: {
        follow: async (_, args, { request }) => {
            isAuthenticated(request);
            const { id } = args;
            const { user } = request;
            try {
                await prisma.updateUser({where: {id: user.id}, 
                    data: {
                        following: {
                            connect: {
                                id
                            }
                        }
                    }
                });
                const followingUser = await prisma.user({id});
                await sendTextMail(
                    followingUser.email,
                    'You have new follower',
                    `Follower's name is ${user.username}`
                );
                return true;
            } catch (error) {
                return false;
            }
            
            return true;
        }
    }
}