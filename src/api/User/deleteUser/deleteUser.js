import { prisma } from "../../../../generated/prisma-client"
import { isAuthenticated } from "../../../middlewares"

export default {
    Mutation: {
        deleteUser: async (_, args, { request }) => {
            isAuthenticated(request);
            const { id } = args;
            const { user } = request;
            try {
              console.log(id);
                await prisma.deleteUser({where: {id}});
                return true;
            } catch (error) {
                return false;
            }
            
            return true;
        }
    }
}