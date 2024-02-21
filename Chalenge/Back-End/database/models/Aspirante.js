module.exports = (sequelize, dataTypes) => {
    let alias = "Aspirantes";

    let cols = {
        id:{
                    type: dataTypes.INTEGER,
                    primaryKey: true,
                    autoIncrement: true
        },
        dni:{
                    type: dataTypes.INTEGER,
                    unique: true
        },
        nombre:{
                    type: dataTypes.STRING

        },
        apellido:{
                    type: dataTypes.STRING
        },
        email:{
                    type: dataTypes.STRING,
                    unique: true
        },
        telefono:{
                    type: dataTypes.STRING
        },
        urlLinkedin:{
                    type: dataTypes.STRING
        },
        fechaNacimiento:{
                    type: dataTypes.DATE
        },
        genero:{
                    type: dataTypes.STRING
        },
        imagen:{
                    type: dataTypes.STRING
        },
        profesionesId:{
                    type: dataTypes.INTEGER
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
        tableName: "aspirantes",
        timestamps: false
    }


    const Aspirante = sequelize.define(alias, cols, config);
    return Aspirante;
}