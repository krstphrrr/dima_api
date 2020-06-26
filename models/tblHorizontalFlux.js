const Sequelize = require('sequelize')

const db = require("../config/database")

const horizontalflux = db.define('tblHorizontalFlux', {
		boxId: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'BoxID'
		},
		stackId: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'StackID'
		},
		height: {
			type: Sequelize.DOUBLE,
			allowNull: true,
			field: 'Height'
		},
		dateEstablished: {
			type: Sequelize.DATE,
			allowNull: true,
			field: 'DateEstablished'
		},
		dateModified: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'DateModified'
		},
		description: {
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
		boxType: {
			type: Sequelize.INTEGER,
			allowNull: true,
			field: 'BoxType'
		},
		azimuth: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'azimuth'
		},
		samplerType: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'SamplerType'
		},
		inletArea: {
			type: Sequelize.DOUBLE,
			allowNull: true,
			field: 'InletArea'
		},
		plotKey: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'PlotKey'
		},
		location: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'Location'
		},
		itemType: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'ItemType'
		},
		trapOpeningArea: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'trapOpeningArea'
		},
		gpsCoordSys: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'GPSCoordSys'
		},
		datum: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'Datum'
		},
		zone: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'Zone'
		},
		easting: {
			type: Sequelize.DOUBLE,
			allowNull: true,
			field: 'Easting'
		},
		northing: {
			type: Sequelize.DOUBLE,
			allowNull: true,
			field: 'Northing'
		},
		longitude: {
			type: Sequelize.DOUBLE,
			allowNull: true,
			field: 'Longitude'
		},
		latitude: {
			type: Sequelize.DOUBLE,
			allowNull: true,
			field: 'Latitude'
		},
		recKey: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'RecKey'
		},
		collectDate: {
			type: Sequelize.DATE,
			allowNull: true,
			field: 'collectDate'
		},
		collector: {
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
		notes: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'Notes'
		},
		sedimentGperDayByInlet: {
			type: Sequelize.DOUBLE,
			allowNull: true,
			field: 'sedimentGperDayByInlet'
		},
		seqNo: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'SeqNo'
		},
		sampleCompromised: {
			type: Sequelize.BOOLEAN,
			allowNull: true,
			field: 'SampleCompromised'
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
		tableName: 'tblHorizontalFlux',
		createdAt: false,
		updatedAt:false,
	});

module.exports = horizontalflux