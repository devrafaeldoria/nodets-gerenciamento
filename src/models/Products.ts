import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../instances/pg';

export interface ProductsInterface extends Model {
    id: number,
    name: string,
    supplier: string,
    stock: number,
    minimumstock: number,
    price: number
}

export const Product = sequelize.define<ProductsInterface>('Products', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    supplier: {
        type: DataTypes.STRING,
        allowNull: false
    },
    stock: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    minimumstock: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    price: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    tableName: 'products',
    timestamps: false
});