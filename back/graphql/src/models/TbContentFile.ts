import { DataTypes, Model } from 'sequelize';

import sequelize from '../db';

const { INTEGER, STRING } = DataTypes;

class TbContent extends Model {
  public conId! : number;

  public fileId! : string;

  public filePath! : string;

  public fileIndex! : string;
}

TbContent.init(
  {
    conId: {
      type:INTEGER,
      autoIncrement: true 
    },
    fileId: {
      type: STRING,
      primaryKey: true
    },
    filePath: {
      type: STRING
    },
    fileIndex: {
      type: STRING
    }
  },
  {
    sequelize,
    timestamps: true
  }
)

export default FeedFile;