import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class piezas extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id_pieza: {
      type: DataTypes.STRING(100),
      allowNull: false,
      primaryKey: true
    },
    nombre: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    color: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    precio: {
      type: DataTypes.REAL,
      allowNull: false
    },
    categoria_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'categorias',
        key: 'id_categoria'
      }
    },
    precio_dinero: {
      type: DataTypes.DECIMAL(19,4),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'piezas',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "piezas_pkey",
        unique: true,
        fields: [
          { name: "id_pieza" },
        ]
      },
    ]
  });
  }
}
