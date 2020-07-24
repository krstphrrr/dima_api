const Sequelize = require('sequelize')

const db = require("../config/database")

const lpiheader = db.define('tblLpiHeader', {
		LineKey: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'LineKey'
		},
		RecKey: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'RecKey'
		},
		DateModified: {
			type: Sequelize.DATE,
			allowNull: true,
			field: 'DateModified'
		},
		FormType: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'FormType'
		},
		FormDate: {
			type: Sequelize.DATE,
			allowNull: true,
			field: 'FormDate'
		},
		Observer: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'Observer'
		},
		Recorder: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'Recorder'
		},
		DataEntry: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'DataEntry'
		},
		DataErrorChecking: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'DataErrorChecking'
		},
		Direction: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'Direction'
		},
		Measure: {
			type: Sequelize.INTEGER,
			allowNull: true,
			field: 'Measure'
		},
		LineLengthAmount: {
			type: Sequelize.DOUBLE,
			allowNull: true,
			field: 'LineLengthAmount'
		},
		SpacingIntervalAmount: {
			type: Sequelize.DOUBLE,
			allowNull: true,
			field: 'SpacingIntervalAmount'
		},
		SpacingType: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'SpacingType'
		},
		HeightOption: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'HeightOption'
		},
		HeightUOM: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'HeightUOM'
		},
		ShowCheckbox: {
			type: Sequelize.BOOLEAN,
			allowNull: true,
			field: 'ShowCheckbox'
		},
		CheckboxLabel: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'CheckboxLabel'
		},
		numCanopy: {
			type: Sequelize.INTEGER,
			allowNull: true,
			field: 'numCanopy'
		},
		numBare: {
			type: Sequelize.INTEGER,
			allowNull: true,
			field: 'numBare'
		},
		numBasal: {
			type: Sequelize.INTEGER,
			allowNull: true,
			field: 'numBasal'
		},
		pctCanopy: {
			type: Sequelize.DOUBLE,
			allowNull: true,
			field: 'pctCanopy'
		},
		pctBare: {
			type: Sequelize.DOUBLE,
			allowNull: true,
			field: 'pctBare'
		},
		pctBasal: {
			type: Sequelize.DOUBLE,
			allowNull: true,
			field: 'pctBasal'
		},
		pctCheckedPlants: {
			type: Sequelize.DOUBLE,
			allowNull: true,
			field: 'pctCheckedPlants'
		},
		pctCheckedTopPlants: {
			type: Sequelize.DOUBLE,
			allowNull: true,
			field: 'pctCheckedTopPlants'
		},
		pctCheckedTopPoints: {
			type: Sequelize.DOUBLE,
			allowNull: true,
			field: 'pctCheckedTopPoints'
		},
		LayerHeights: {
			type: Sequelize.BOOLEAN,
			allowNull: true,
			field: 'LayerHeights'
		},
		WoodyHerbHeights: {
			type: Sequelize.BOOLEAN,
			allowNull: true,
			field: 'WoodyHerbHeights'
		},
		LowerHerbHeight: {
			type: Sequelize.BOOLEAN,
			allowNull: true,
			field: 'LowerHerbHeight'
		},
		pctCheckedSoil: {
			type: Sequelize.DOUBLE,
			allowNull: true,
			field: 'pctCheckedSoil'
		},
		avgHeightTop: {
			type: Sequelize.DOUBLE,
			allowNull: true,
			field: 'avgHeightTop'
		},
		Notes: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'Notes'
		},
		avgHeightLower1: {
			type: Sequelize.DOUBLE,
			allowNull: true,
			field: 'avgHeightLower1'
		},
		avgHeightLower2: {
			type: Sequelize.DOUBLE,
			allowNull: true,
			field: 'avgHeightLower2'
		},
		avgHeightLower3: {
			type: Sequelize.DOUBLE,
			allowNull: true,
			field: 'avgHeightLower3'
		},
		avgHeightLower4: {
			type: Sequelize.DOUBLE,
			allowNull: true,
			field: 'avgHeightLower4'
		},
		avgHeightSurface: {
			type: Sequelize.DOUBLE,
			allowNull: true,
			field: 'avgHeightSurface'
		},
		numGrCovTotal: {
			type: Sequelize.INTEGER,
			allowNull: true,
			field: 'numGrCovTotal'
		},
		numGrCovBetween: {
			type: Sequelize.INTEGER,
			allowNull: true,
			field: 'numGrCovBetween'
		},
		numGrCovUnder: {
			type: Sequelize.INTEGER,
			allowNull: true,
			field: 'numGrCovUnder'
		},
		numLitterTotal: {
			type: Sequelize.INTEGER,
			allowNull: true,
			field: 'numLitterTotal'
		},
		numLitterBetween: {
			type: Sequelize.INTEGER,
			allowNull: true,
			field: 'numLitterBetween'
		},
		numLitterUnder: {
			type: Sequelize.INTEGER,
			allowNull: true,
			field: 'numLitterUnder'
		},
		pctGrCovTotal: {
			type: Sequelize.DOUBLE,
			allowNull: true,
			field: 'pctGrCovTotal'
		},
		pctGrCovBetween: {
			type: Sequelize.DOUBLE,
			allowNull: true,
			field: 'pctGrCovBetween'
		},
		pctGrCovUnder: {
			type: Sequelize.DOUBLE,
			allowNull: true,
			field: 'pctGrCovUnder'
		},
		pctLitterTotal: {
			type: Sequelize.DOUBLE,
			allowNull: true,
			field: 'pctLitterTotal'
		},
		pctLitterBetween: {
			type: Sequelize.DOUBLE,
			allowNull: true,
			field: 'pctLitterBetween'
		},
		pctLitterUnder: {
			type: Sequelize.DOUBLE,
			allowNull: true,
			field: 'pctLitterUnder'
		},
		HeightNoneOption: {
			type: Sequelize.BOOLEAN,
			allowNull: true,
			field: 'HeightNoneOption'
		},
		avgHeightWoody: {
			type: Sequelize.DOUBLE,
			allowNull: true,
			field: 'avgHeightWoody'
		},
		avgHeightHerb: {
			type: Sequelize.DOUBLE,
			allowNull: true,
			field: 'avgHeightHerb'
		},
		ShowShrubShape: {
			type: Sequelize.BOOLEAN,
			allowNull: true,
			field: 'ShowShrubShape'
		},
		RapidMode: {
			type: Sequelize.BOOLEAN,
			allowNull: true,
			field: 'RapidMode'
		},
		avgHeightLower5: {
			type: Sequelize.DOUBLE,
			allowNull: true,
			field: 'avgHeightLower5'
		},
		avgHeightLower6: {
			type: Sequelize.DOUBLE,
			allowNull: true,
			field: 'avgHeightLower6'
		},
		avgHeightLower7: {
			type: Sequelize.DOUBLE,
			allowNull: true,
			field: 'avgHeightLower7'
		},
		HAF_Other: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'HAF_Other'
		},
		avgHeightLowerHerb: {
			type: Sequelize.DOUBLE,
			allowNull: true,
			field: 'avgHeightLowerHerb'
		},
		PrimaryKey: {
			type: Sequelize.TEXT,
			allowNull: true,
			primaryKey: true,
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
		tableName: 'tblLPIHeader',
		createdAt: false,
		updatedAt:false,
	});

	module.exports = lpiheader
