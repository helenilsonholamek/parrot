const db = require ('../dataBase/dbConexao')
const { DataTypes } = require ('sequelize')
const { User } = require('./User')

const Post = db.define ('post', {
    idPost: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    user_id: {
        type: DataTypes.INTEGER,
        references: {
            model: User,
            key: 'idUser'
        }
    },
    comments: {
        type: DataTypes.STRING
    },
    createdAt: {
        type: DataTypes.DATE
    },
    updatedAt: {
        type: DataTypes.DATE
    }
}, {
    tableName: 'post'
})

module.exports = Post