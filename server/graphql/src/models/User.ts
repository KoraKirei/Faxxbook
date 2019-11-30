import { DataTypes, Model } from 'sequelize';

import UserFeed from './UserFeed';
import UserFeedReply from './UserFeedReply';
import sequelize from '../db';

const { INTEGER, STRING } = DataTypes;

class User extends Model {
  public id!: number;

  public uid!: string;

  public email!: string;

  public username!: string;

  public accessToken: string;

  public qnaPoint!: string;

  public userSearhedWord_1: string;

  public userSearhedWord_2: string;

  public userSearhedWord_3: string;

  public readonly createdAt: Date

  public readonly updatedAt: Date
}
User.init(
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
    email: {
      type: STRING,
      allowNull: false
    },
    username: {
      type: STRING,
      allowNull: false
    },
    accessToken: {
      type: STRING,
      allowNull: false
    },    
    qnaPoint: {
      type: STRING,
      allowNull: false,
      defaultValue: 0
    },
    userSearhedWord_1: {
      type: STRING,
      allowNull: true
    },
    userSearhedWord_2: {
      type: STRING,
      allowNull: true
    },
    userSearhedWord_3: {
      type: STRING,
      allowNull: true
    },
  },
  {
    sequelize,
    timestamps: true,
  }
);

User.hasMany(UserFeed, { onDelete: 'cascade' });
User.hasMany(UserFeedReply, { onDelete: 'cascade' });

export default User;