import { DataTypes, Model } from 'sequelize';

import UserFeedFile from './UserFeedFile';
import UserFeedReply from './UserFeedReply';
import sequelize from '../db';

const { INTEGER, STRING } = DataTypes;

class UserFeed extends Model {
  public id!: number;

  public title!: string;

  public content!: string;

  public readonly createdAt: Date

  public readonly updatedAt: Date
}

UserFeed.init(
  {
    id: {
      type: INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    title: {
      type: STRING,
      allowNull: false
    },
    content: {
      type: STRING,
      allowNull: false
    },  
  },
  {
    sequelize,
    timestamps: true,
  }
);

UserFeed.hasMany(UserFeedFile);
UserFeed.hasMany(UserFeedReply);

export default UserFeed;