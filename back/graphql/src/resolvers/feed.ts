import { Resolvers } from '../generated/graphql';

const resovler: Resolvers = {
  Query: {
    getFeed: async (_, { uid, limit, page }, { models }, info) => {
      return await models.UserFeed.findAll({
        where: { uid },
        order: ['createdAt', 'DESC'],
        offset: (page - 1) * limit,
        limit,
      });
    },
    // getTbContent: async (_, __, {models}, info) => {
    //   return await models.
    // }
  },
  Mutation: {
    addFeed: async (_, { userId, content }, { models }, info) => {
      return await models.User.create({
        userId, content
      });
    },
    updateFeed: async (_, { id, content }, { models }, info) => {
      return await models.User.update({
        content
      }, {
        where: { id }
      });
    },
    delFeed: async (_, { id }, { models }, info) => {
      return await models.User.destroy({
        where: { id }
      });
    },
  }
}

export default resovler;