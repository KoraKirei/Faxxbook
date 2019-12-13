import { Resolvers } from '../generated/graphql';

const resovler: Resolvers = {
  Query: {
    getUser: async (_, { id }, { models }, info) => {
      const user = await models.User.findOne({
        where: { id }
      });
      return user;
    },
  },
  Mutation: {
    loginUser: async (_, { id, email, username }, { models }, info) => {
      const exUser = await models.User.findOne({
        where: { id }
      });
      // 기존 회원일 경우
      if(exUser) {
        return exUser;
      }

      // 신규 회원일 경우
      return await models.User.create({
        id, email, username
      });
    },
    // QnaPoint 정보와 Username 정보 변경 가능.
    updateUser: async (_, { id, username, profilePhotoUrl, coverPhotoUrl, qnaPoint }, { models }, info) => {
      await models.User.update({
        username, profilePhotoUrl, coverPhotoUrl, qnaPoint
      }, {
        where: { id }
      });
      return await models.User.findOne({
        where: { id }
      });
    },
    delUser: async (_, { id }, { models }, info) => {
      return await models.User.destroy({
        where: { id }
      });
    },    
  }
}

export default resovler;