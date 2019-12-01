import { DataTypes, Model } from 'sequelize';

import FeedUser from './Feed';
import FeedUserReply from './FeedReply';

import sequelize from '../db';

const { INTEGER, STRING } = DataTypes;

class User extends Model {
  public id!: string;

  public email!: string;

  public username!: string;

  public profilePhotoUrl!: string;

  public coverPhotoUrl!: string;

  public readonly createdAt!: Date

  public readonly updatedAt!: Date
}
User.init(
  {
    id: {
      type: STRING,
      primaryKey: true,
      allowNull: false
    },
    email: {
      type: STRING,
      allowNull: false
    },
    username: {
      type: STRING,
      allowNull: false
    },
    qnaPoint: {
      type: INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    profilePhotoUrl: {
      type: STRING,
      allowNull: false,
      defaultValue: 'http://postfiles16.naver.net/20140606_111/sjinwon2_1402052862659ofnU1_PNG/130917_224626.png?type=w1'
    },
    coverPhotoUrl: {
      type: STRING,
      allowNull: false,
      defaultValue: 'http://www.analogouscolors.com/jpg/130c0e.jpg'
    }
  },
  {
    sequelize,
    timestamps: true,
  }
);

User.hasMany(FeedUser, { onDelete: 'cascade' });
User.hasMany(FeedUserReply, { onDelete: 'cascade' });

export default User;