module.exports = (sequelize, dataTypes) => {
    let alias = "Profesiones";

    let cols = {
        id:{
                    type: dataTypes.INTEGER,
                    primaryKey: true,
                    autoIncrement: true
        },
        nombre:{
                type: dataTypes.STRING

        },
        createdAt:{
                    type: dataTypes.DATE
        },
        updatedAt:{
                    type: dataTypes.DATE
        },
        deletedAt:{
                    type: dataTypes.DATE
        }
    }

    let config = {
        tableName: "profesiones",
        timestamps: false
    }


    const Profesion = sequelize.define(alias, cols, config);
    Profesion.associate= function(models){
        Profesion.hasMany(models.Aspirantes,{
            as: "aspirantes",
            foreignKey: "profesionesId"
        })
    }
    return Profesion;
}