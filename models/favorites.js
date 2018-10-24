
module.exports = function(sequelize, DataTypes) {
	var favorites = sequelize.define("favorites", {
	  name: {
		type: DataTypes.STRING,
		allowNull: false,
		validate: {
		  len: [1]
		}
	  },
	  url: {
		type: DataTypes.STRING,
		allowNull: false,
		len: [1]
	  }
	});
  
	favorites.associate = function(models) {
	  // We're saying that favs should belong to user
	  // A fav can't be created without a user due to the foreign key constraint
	  favorites.belongsTo(models.users, {
		foreignKey: {
		  allowNull: false
		}
	  });
	};
  
	return favorites;
  };
  