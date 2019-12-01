import { DataTypes, Model } from 'sequelize';

import FeedFile from './FeedFile';
import FeedReply from './FeedReply';
import sequelize from '../db';

const { INTEGER, TEXT } = DataTypes;

class Feed extends Model {
  public id!: number;

  public content!: string;

  public readonly createdAt!: Date;

  public readonly updatedAt!: Date;
}

Feed.init(
  {
    id: {
      type: INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    content: {
      type: TEXT,
      allowNull: false
    },  
  },
  {
    sequelize,
    timestamps: true,
  }
);

Feed.hasMany(FeedFile, { onDelete: 'cascade' });
Feed.hasMany(FeedReply, { onDelete: 'cascade' });

export default Feed;