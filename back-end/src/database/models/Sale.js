module.exports = (sequelize, DataTypes) => {
    const Sale = sequelize.define('Sale', {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      userId: DataTypes.INTEGER,
      sellerId: DataTypes.INTEGER,
      totalPrice: DataTypes.DECIMAL,
      deliveryAddress: DataTypes.STRING,
      deliveryNumber: DataTypes.STRING,
      saleDate: DataTypes.DATE,
      status: DataTypes.STRING
    },
      {
        underscored: true,
        tableName: 'sales',
        timestamps: false,
      });
     
      Sale.associate = (models) => {
        Sale.belongsTo(models.User, { foreignKey: 'sellerId', as: 'seller' }),
        Sale.belongsTo(models.User, { foreignKey: 'userId', as: 'user' });
    };
  
    return Sale;
  };