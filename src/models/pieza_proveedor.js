import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class pieza_proveedor extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id_distribucion: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    cantidad: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    fecha_entrega: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    pieza_id: {
      type: DataTypes.STRING(100),
      allowNull: false,
      references: {
        model: 'piezas',
        key: 'id_pieza'
      }
    },
    proveedor_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'proveedores',
        key: 'id_proveedor'
      }
    }
  }, {
    sequelize,
    tableName: 'pieza_proveedor',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "pieza_proveedor_pkey",
        unique: true,
        fields: [
          { name: "id_distribucion" },
        ]
      },
    ]
  });
  }
}
