const Sequelize = require('sequelize')

const db = require("../config/database")

const horizontalflux = db.define('tblHorizontalFlux', {
		BoxID: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'BoxID'
		},
		StackID: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'StackID'
		},
		Height: {
			type: Sequelize.DOUBLE,
			allowNull: true,
			field: 'Height'
		},
		DateEstablished: {
			type: Sequelize.DATE,
			allowNull: true,
			field: 'DateEstablished'
		},
		DateModified: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'DateModified'
		},
		Description: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'Description'
		},
		openingSize: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'openingSize'
		},
		processMethod: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'processMethod'
		},
		ovenTemp: {
			type: Sequelize.INTEGER,
			allowNull: true,
			field: 'ovenTemp'
		},
		BoxType: {
			type: Sequelize.INTEGER,
			allowNull: true,
			field: 'BoxType'
		},
		azimuth: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'azimuth'
		},
		SamplerType: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'SamplerType'
		},
		InletArea: {
			type: Sequelize.DOUBLE,
			allowNull: true,
			field: 'InletArea'
		},
		PlotKey: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'PlotKey'
		},
		Location: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'Location'
		},
		ItemType: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'ItemType'
		},
		trapOpeningArea: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'trapOpeningArea'
		},
		GPSCoordSys: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'GPSCoordSys'
		},
		Datum: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'Datum'
		},
		Zone: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'Zone'
		},
		Easting: {
			type: Sequelize.DOUBLE,
			allowNull: true,
			field: 'Easting'
		},
		Northing: {
			type: Sequelize.DOUBLE,
			allowNull: true,
			field: 'Northing'
		},
		Longitude: {
			type: Sequelize.DOUBLE,
			allowNull: true,
			field: 'Longitude'
		},
		Latitude: {
			type: Sequelize.DOUBLE,
			allowNull: true,
			field: 'Latitude'
		},
		RecKey: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'RecKey'
		},
		collectDate: {
			type: Sequelize.DATE,
			allowNull: true,
			field: 'collectDate'
		},
		Collector: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'Collector'
		},
		labTech: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'labTech'
		},
		beakerNbr: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'beakerNbr'
		},
		emptyWeight: {
			type: Sequelize.DOUBLE,
			allowNull: true,
			field: 'emptyWeight'
		},
		recordedWeight: {
			type: Sequelize.DOUBLE,
			allowNull: true,
			field: 'recordedWeight'
		},
		sedimentWeight: {
			type: Sequelize.DOUBLE,
			allowNull: true,
			field: 'sedimentWeight'
		},
		daysExposed: {
			type: Sequelize.INTEGER,
			allowNull: true,
			field: 'daysExposed'
		},
		sedimentGperDay: {
			type: Sequelize.DOUBLE,
			allowNull: true,
			field: 'sedimentGperDay'
		},
		sedimentArchived: {
			type: Sequelize.BOOLEAN,
			allowNull: true,
			field: 'sedimentArchived'
		},
		Notes: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'Notes'
		},
		sedimentGperDayByInlet: {
			type: Sequelize.DOUBLE,
			allowNull: true,
			field: 'sedimentGperDayByInlet'
		},
		SeqNo: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'SeqNo'
		},
		SampleCompromised: {
			type: Sequelize.BOOLEAN,
			allowNull: true,
			field: 'SampleCompromised'
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
		tableName: 'tblHorizontalFlux',
		createdAt: false,
		updatedAt:false,
	});

module.exports = horizontalflux