module.exports = (sequelize, DataTypes) => {
    const SaleProduct = sequelize.define('SaleProduct', {
      saleId: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      productId: DataTypes.INTEGER,
      quantity: DataTypes.INTEGER,

    },
      {
        underscore: true,
        tableName: 'salesProducts',
        timestamps: false,
      });
     
      SaleProduct.associate = (models) => {
        SaleProduct.belongsTo(models.Sale, { foreignKey: 'seller_id', as: 'seller' }),
        SaleProduct.belongsTo(models.Product, { foreignKey: 'product_id', as: 'product' })
    }
  
    return SaleProduct;
  };