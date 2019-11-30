import { Resolvers } from '../generated/graphql';

const resovler: Resolvers = {
  Query: {
    getUserFeed: async (_, { uid, limit, page }, { models }, info) => {
      return await models.UserFeed.findAll({
        where: { uid },
        order: ['createdAt', 'DESC'],
        offset: (page - 1) * limit,
        limit,
      });
    },
  },
  Mutation: {
    addUserFeed: async (_, { userId, content }, { models }, info) => {
      return await models.User.create({
        userId, content
      });
    },
    updateUserFeed: async (_, { userId, content }, { models }, info) => {
      return await models.User.update({
        content
      }, {
        where: { userId }
      });
    },
    delUserFeed: async (_, { userId }, { models }, info) => {
      return await models.User.destroy({
        where: { userId }
      });
    },
  }
}

export default resovler;