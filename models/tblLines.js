const Sequelize = require('sequelize')

const db = require("../config/database")

const lines = db.define('tblLines', {
		PlotKey: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'PlotKey'
		},
		LineKey: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'LineKey'
		},
		DateModified: {
			type: Sequelize.DATE,
			allowNull: true,
			field: 'DateModified'
		},
		LineID: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'LineID'
		},
		Azimuth: {
			type: Sequelize.INTEGER,
			allowNull: true,
			field: 'Azimuth'
		},
		ElevationType: {
			type: Sequelize.INTEGER,
			allowNull: true,
			field: 'ElevationType'
		},
		NorthType: {
			type: Sequelize.INTEGER,
			allowNull: true,
			field: 'NorthType'
		},
		NorthingStart: {
			type: Sequelize.DOUBLE,
			allowNull: true,
			field: 'NorthingStart'
		},
		EastingStart: {
			type: Sequelize.DOUBLE,
			allowNull: true,
			field: 'EastingStart'
		},
		ElevationStart: {
			type: Sequelize.DOUBLE,
			allowNull: true,
			field: 'ElevationStart'
		},
		NorthingEnd: {
			type: Sequelize.DOUBLE,
			allowNull: true,
			field: 'NorthingEnd'
		},
		EastingEnd: {
			type: Sequelize.DOUBLE,
			allowNull: true,
			field: 'EastingEnd'
		},
		ElevationEnd: {
			type: Sequelize.DOUBLE,
			allowNull: true,
			field: 'ElevationEnd'
		},
		LatitudeStart: {
			type: Sequelize.DOUBLE,
			allowNull: true,
			field: 'LatitudeStart'
		},
		LongitudeStart: {
			type: Sequelize.DOUBLE,
			allowNull: true,
			field: 'LongitudeStart'
		},
		LatitudeEnd: {
			type: Sequelize.DOUBLE,
			allowNull: true,
			field: 'LatitudeEnd'
		},
		LongitudeEnd: {
			type: Sequelize.DOUBLE,
			allowNull: true,
			field: 'LongitudeEnd'
		},
		PrimaryKey: {
			type: Sequelize.TEXT,
			allowNull: true,
			primaryKey:true,
			field: 'PrimaryKey'
		},
		DateLoadedInDB: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'DateLoadedInDB'
		},
		DBKey: {
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
