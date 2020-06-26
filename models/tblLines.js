const Sequelize = require('sequelize')

const db = require("../config/database")

const lines = db.define('tblLines', {
		plotKey: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'PlotKey'
		},
		lineKey: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'LineKey'
		},
		dateModified: {
			type: Sequelize.DATE,
			allowNull: true,
			field: 'DateModified'
		},
		lineId: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'LineID'
		},
		azimuth: {
			type: Sequelize.INTEGER,
			allowNull: true,
			field: 'Azimuth'
		},
		elevationType: {
			type: Sequelize.INTEGER,
			allowNull: true,
			field: 'ElevationType'
		},
		northType: {
			type: Sequelize.INTEGER,
			allowNull: true,
			field: 'NorthType'
		},
		northingStart: {
			type: Sequelize.DOUBLE,
			allowNull: true,
			field: 'NorthingStart'
		},
		eastingStart: {
			type: Sequelize.DOUBLE,
			allowNull: true,
			field: 'EastingStart'
		},
		elevationStart: {
			type: Sequelize.DOUBLE,
			allowNull: true,
			field: 'ElevationStart'
		},
		northingEnd: {
			type: Sequelize.DOUBLE,
			allowNull: true,
			field: 'NorthingEnd'
		},
		eastingEnd: {
			type: Sequelize.DOUBLE,
			allowNull: true,
			field: 'EastingEnd'
		},
		elevationEnd: {
			type: Sequelize.DOUBLE,
			allowNull: true,
			field: 'ElevationEnd'
		},
		latitudeStart: {
			type: Sequelize.DOUBLE,
			allowNull: true,
			field: 'LatitudeStart'
		},
		longitudeStart: {
			type: Sequelize.DOUBLE,
			allowNull: true,
			field: 'LongitudeStart'
		},
		latitudeEnd: {
			type: Sequelize.DOUBLE,
			allowNull: true,
			field: 'LatitudeEnd'
		},
		longitudeEnd: {
			type: Sequelize.DOUBLE,
			allowNull: true,
			field: 'LongitudeEnd'
		},
		primaryKey: {
			type: Sequelize.TEXT,
			allowNull: true,
			primaryKey:true,
			field: 'PrimaryKey'
		},
		dateLoadedInDb: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'DateLoadedInDB'
		},
		dbKey: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'DBKey'
		}
	}, {
		tableName: 'tblLines',
		createdAt: false,
		updatedAt:false,
	});

	module.exports = lines
