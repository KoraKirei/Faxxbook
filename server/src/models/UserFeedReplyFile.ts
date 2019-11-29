import { DataTypes, Model } from 'sequelize';

import sequelize from '../db';

const { INTEGER, STRING } = DataTypes;

class UserFeedReplyFile extends Model {
  public id!: number;

  public filePath!: string;

  public fileIndex!: string;

  public readonly createdAt: Date

  public readonly updatedAt: Date
}

UserFeedReplyFile.init(
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
    fileIndex: {
      type: STRING,
      allowNull: false
    },
  },
  {
    sequelize,
    timestamps: true,
  }
);

export default UserFeedReplyFile;