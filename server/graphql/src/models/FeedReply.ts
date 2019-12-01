import { DataTypes, Model } from 'sequelize';

import FeedReplyFile from './FeedReplyFile';
import sequelize from '../db';

const { INTEGER, STRING } = DataTypes;

class FeedReply extends Model {
  public id!: number;

  public uid!: string;

  public level!: number;

  public content!: string;

  public readonly createdAt: Date

  public readonly updatedAt: Date
}

FeedReply.init(
  {
    id: {
      type: INTEGER,
      primaryKey: true,
      autoIncrement: true
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

FeedReply.hasMany(FeedReplyFile, { onDelete: 'cascade' });

export default FeedReply;