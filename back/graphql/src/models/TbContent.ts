import { DataTypes, Model } from 'sequelize';

import sequelize from '../db';

const { INTEGER, STRING } = DataTypes;

class TbContent extends Model {
  public conId! : number;

  public userId! : string;

  public conTitle! : string;

  public conBody! : string;

  public readonly conRegDt : Date;

  public readonly conModifyDt : Date;
}

TbContent.init(
  {
    conId: {
      type:INTEGER,
      primaryKey: true,
      autoIncrement: true 
    },
    userId: {
      type: STRING,
      allowNull: false
    },
    conTitle: {
      type: STRING
    },
    conBody: {
      type: STRING
    }
  },
  {
    sequelize,
    timestamps: true
  }
)

export default FeedFile;