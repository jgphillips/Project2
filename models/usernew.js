



module.exports = function (sequelize, DataTypes) {
	var usernew = sequelize.define("usernew", {
		username: {
			type: DataTypes.STRING,
      		allowNull: false,
					unique: true,
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
		},
		email: {
			type: DataTypes.STRING,
      		allowNull: false,
					unique: true,
      		validate: {
        		len: [1]
      		}
		}
	});

	usernew.associate = function(models) {
		usernew.hasMany(models.favorites, {
		  onDelete: "cascade"
		});

	};
	return usernew;
}

