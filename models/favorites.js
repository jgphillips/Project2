
module.exports = function (sequelize, DataTypes) {
	var favorites = sequelize.define("favorites", {	
		image: {
			type: DataTypes.STRING,
      		allowNull: false,
      		validate: {
        		len: [1]
      		}
		}
	});

	return favorites;
}

