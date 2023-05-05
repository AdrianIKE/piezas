import _sequelize from "sequelize";
const DataTypes = _sequelize.DataTypes;
import _categorias from  "./categorias.js";
import _pieza_proveedor from  "./pieza_proveedor.js";
import _piezas from  "./piezas.js";
import _proveedores from  "./proveedores.js";

export default function initModels(sequelize) {
  const categorias = _categorias.init(sequelize, DataTypes);
  const pieza_proveedor = _pieza_proveedor.init(sequelize, DataTypes);
  const piezas = _piezas.init(sequelize, DataTypes);
  const proveedores = _proveedores.init(sequelize, DataTypes);

  piezas.belongsTo(categorias, { as: "categoria", foreignKey: "categoria_id"});
  categorias.hasMany(piezas, { as: "piezas", foreignKey: "categoria_id"});
  pieza_proveedor.belongsTo(piezas, { as: "pieza", foreignKey: "pieza_id"});
  piezas.hasMany(pieza_proveedor, { as: "entregas", foreignKey: "pieza_id"});
  pieza_proveedor.belongsTo(proveedores, { as: "proveedor", foreignKey: "proveedor_id"});
  proveedores.hasMany(pieza_proveedor, { as: "pieza_proveedors", foreignKey: "proveedor_id"});

  return {
    categorias,
    pieza_proveedor,
    piezas,
    proveedores,
  };
}
