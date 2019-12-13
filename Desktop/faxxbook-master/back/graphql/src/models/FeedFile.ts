import { DataTypes, Model } from 'sequelize';

import sequelize from '../db';

const { INTEGER, STRING } = DataTypes;

class FeedFile extends Model {
  public id!: number;

  public filePath!: string;

  public readonly createdAt: Date

  public readonly updatedAt: Date
}

FeedFile.init(
  {
    id: {
      type: INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    filePath: {
      type: STRING,
      allowNull: false
    },
   },
  {
    sequelize,
    timestamps: true,
  }
);

export default FeedFile;