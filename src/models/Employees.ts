import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../instances/pg';

export interface EmployeesInterface extends Model {
    id: number,
    name: string,
    age: string,
    sector: string,
    salary: number,
    city: string
}

export const Employee = sequelize.define<EmployeesInterface>('Employees', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    age: {
        type: DataTypes.STRING,
        allowNull: false
    },
    sector: {
        type: DataTypes.STRING,
        allowNull: false
    }, 
    salary: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    city: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    tableName: 'employees',
    timestamps: false
});