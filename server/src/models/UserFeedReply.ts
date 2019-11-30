import { DataTypes, Model } from 'sequelize';

import UserFeedReplyFile from './UserFeedReplyFile';
import sequelize from '../db';

const { INTEGER, STRING } = DataTypes;

class UserFeedReply extends Model {
  public id!: number;

  public uid!: string;

  public level!: number;

  public content!: string;

  public readonly createdAt: Date

  public readonly updatedAt: Date
}

UserFeedReply.init(
  {
    id: {
      type: INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    uid: {
      type: STRING,
      allowNull: false
    },
    level: {
      type: INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    content: {
      type: STRING,
      allowNull: false      
    }
  },
  {
    sequelize,
    timestamps: true,
  }
);

UserFeedReply.hasMany(UserFeedReplyFile, { onDelete: 'cascade' });

export default UserFeedReply;