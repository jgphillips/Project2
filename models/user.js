

module.exports = function (sequelize, DataTypes) {
	var users = sequelize.define("users", {	
		username: {
            type: DataTypes.STRING,
            allowNull: false
		}
	});
	users.associate= function(models){
		users.hasMany(models.favorites, {
			onDelete: "cascade"
		});
	};
	return users;
}

