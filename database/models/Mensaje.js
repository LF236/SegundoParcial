module.exports = (sequelize, DataTypes) => {
    const cols = {
        id: {
            primaryKey: true,
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },

        mensaje: {
            type: DataTypes.TEXT,
            allowNull: false
        },

        correo: {
            type: DataTypes.STRING(100),
            allowNull: false
        },

        nombre: {
            type: DataTypes.STRING(100),
            allowNull: false
        }
    };

    const config = {
        timestamps: true,
        updatedAt: 'updated_at',
        createdAt: 'created_at'
    };

    const Mensaje = sequelize.define("Mensaje", cols, config);
    return Mensaje;
};