import { DataTypes, Model } from 'sequelize';

import sequelize from '../db';

const { INTEGER, STRING } = DataTypes;

class TbContentFile extends Model {
  public conId! : number;

  public fileId! : string;

  public filePath! : string;

  public fileIndex! : string;
}

TbContentFile.init(
  {
    conId: {
      type:INTEGER
    },
    fileId: {
      type: INTEGER,
      primaryKey: true,
      autoIncrement: true 
    },
    filePath: {
      type: STRING
    },
    fileIndex: {
      type: INTEGER
    }
  },
  {
    sequelize,
    timestamps: true
  }
)

export default TbContentFile;