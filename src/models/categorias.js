import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class categorias extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id_categoria: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nombre: {
      type: DataTypes.STRING(100),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'categorias',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "categorias_pkey",
        unique: true,
        fields: [
          { name: "id_categoria" },
        ]
      },
    ]
  });
  }
}
