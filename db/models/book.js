'use strict';
module.exports = (sequelize, DataTypes) => {
  const Book = sequelize.define('Book', {
    title: DataTypes.STRING,
    cover: DataTypes.STRING,
    published: DataTypes.STRING,
    summary: DataTypes.TEXT
  }, {});
  Book.associate = function(models) {
    Book.belongsToMany(models.Genre, {
      through: 'bookGenre',
      foreignKey: 'bookId',
      otherKey: 'genreId'
    })
  };
  return Book;
};
