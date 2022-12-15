module.exports = (sequelize, DataTypes) => {
    const SaleProduct = sequelize.define('SaleProduct', {
      saleId: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      productId: DataTypes.INTEGER,
      quantity: DataTypes.INTEGER,

    },
      {
        underscored: true,
        tableName: 'sales_products',
        timestamps: false,
      });

      SaleProduct.associate = (models) => {
        models.Product.belongsToMany(models.Sale, {
          foreignKey: 'productId',
          otherKey: 'saleId',
          through: SaleProduct,
          as: 'sale',
        });
        models.Sale.belongsToMany(models.Product, {
          foreignKey: 'saleId',
          otherKey: 'productId',
          through: SaleProduct,
          as: 'product',
        });
      };
         
  
    return SaleProduct;
  };