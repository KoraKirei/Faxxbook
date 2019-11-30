import { DataTypes, Model } from 'sequelize';

import UserFeedFile from './UserFeedFile';
import UserFeedReply from './UserFeedReply';
import sequelize from '../db';

const { INTEGER, STRING } = DataTypes;

class UserFeed extends Model {
  public id!: number;

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

UserFeed.hasMany(UserFeedFile, { onDelete: 'cascade' });
UserFeed.hasMany(UserFeedReply, { onDelete: 'cascade' });

export default UserFeed;