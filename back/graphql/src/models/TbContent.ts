// 모델은 무엇?
import { DataTypes, Model } from 'sequelize';

import sequelize from '../db';

// Date는 안가져와서 써도 되나 보다.
const { INTEGER, STRING } = DataTypes;

class TbContent extends Model {
  public conId! : number;

  public userId! : string;

  public conTitle! : string;

  public conBody! : string;

  public readonly conRegDt : Date;

  public readonly conModifyDt : Date;
}

// init 메소드에 마우스를 올리면 상세하게 잘 가르쳐 준다.
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

export default TbContent;