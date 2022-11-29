module.exports = (sequelize, DataTypes) => {
    const Product = sequelize.define('Product', {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      name: DataTypes.STRING,
      price: DataTypes.DECIMAL,
      urlImage: DataTypes.STRING,
    },
      {
        underscore: true,
        tableName: 'products',
        timestamps: false,
      });
     
  
    return Product;
  };