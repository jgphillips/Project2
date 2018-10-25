
/*
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

*/



module.exports = function (sequelize, DataTypes) {
	var users = sequelize.define("users", {
		username: {
			type: DataTypes.STRING,
      		allowNull: false,
      		validate: {
        		len: [1]
      		}
		},
		password: {
			type: DataTypes.STRING,
      		allowNull: false,
      		validate: {
        		len: [1]
      		}
		}
	});
	return users;
}



