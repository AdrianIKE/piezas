import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class proveedores extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id_proveedor: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nombre: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    direccion: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    ciudad: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    provincia: {
      type: DataTypes.STRING(100),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'proveedores',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "proveedores_pkey",
        unique: true,
        fields: [
          { name: "id_proveedor" },
        ]
      },
    ]
  });
  }
}
