const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define("movie", {
    movie_title: {
      type: DataTypes.STRING,
      // allowNull: false,
    },
    original_language: {
      type: DataTypes.STRING,
      // allowNull: false,
    },
    overview: {
      type: DataTypes.TEXT,
      // allowNull: false,
    },
    vote_average: {
      type: DataTypes.FLOAT,
      // allowNull: false,
    },
    img: {
      type: DataTypes.STRING,
      // allowNull: false,
    },
    popularity: {
      type: DataTypes.FLOAT,
      // allowNull: false,
    },
    release_date: {
      type: DataTypes.STRING,
      // allowNull: false,
    },
    adult: {
      type: DataTypes.BOOLEAN,
      // allowNull: false,
    },
  });
};
