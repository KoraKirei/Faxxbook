import { Resolvers } from '../generated/graphql';

const resovler: Resolvers = {
  Query: {
    getUser: async (_, { uid }, { models }, info) => {
      const user = await models.User.findOne({
        where: { uid }
      });
      return user;
    },
  },
  Mutation: {
    addUser: async (_, { uid, email, username }, { models }, info) => {
      return await models.User.findOrCreate({
        where: { uid },
        defaults: { email, username }
      });
    },
    updateUser: async (_, { uid, username, qnaPoint }, { models }, info) => {
      return await models.User.update({
        username, qnaPoint
      }, {
        where: { uid }
      });
    },
    delUser: async (_, { uid }, { models }, info) => {
      return await models.User.destroy({
        where: { uid }
      });
    },    
  }
}

export default resovler;