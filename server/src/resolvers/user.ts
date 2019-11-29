import { Resolvers } from '../generated/graphql';

const resovler: Resolvers = {
  Query: {
    User: async (_, args, { models }, info) => {
      const fullUser = await models.User.findAll();
      return fullUser;
    }
  },
  Mutation: {
    addUser: async (parent, { uid, email, username }, { models }, info) => {
      const user = await models.User.create({
        uid,
        email,
        username
      });
      return user;
    }
  }
}

export default resovler;