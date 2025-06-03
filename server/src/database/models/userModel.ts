

import {Table,Column,Model,DataType, PrimaryKey} from "sequelize-typescript"

@Table({
   tableName : "users",
   modelName : "User",
   timestamps: true
})


class User extends Model {
   @Column({
      primaryKey : true,
      type: DataType.UUID,
      defaultValue: DataType.UUIDV4,
   })
   declare id: string

   @Column({
      type: DataType.STRING,
      allowNull: false,
      unique: true
   })
   declare username: string;

   @Column({
      type: DataType.STRING,
      allowNull: false
   })
   declare password: string;

   @Column({
      type: DataType.STRING,
      allowNull: false,
      unique: true
   })
   declare email: string;

   @Column({
      type: DataType.ENUM('teacher', 'student', 'institude', 'super-admin'),
      defaultValue: 'student',
      allowNull: false
   })
   declare role: string
}

export default User;