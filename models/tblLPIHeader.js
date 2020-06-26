const Sequelize = require('sequelize')

const db = require("../config/database")

const lpiheader = db.define('tblLpiHeader', {
		lineKey: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'LineKey'
		},
		recKey: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'RecKey'
		},
		dateModified: {
			type: Sequelize.DATE,
			allowNull: true,
			field: 'DateModified'
		},
		formType: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'FormType'
		},
		formDate: {
			type: Sequelize.DATE,
			allowNull: true,
			field: 'FormDate'
		},
		observer: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'Observer'
		},
		recorder: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'Recorder'
		},
		dataEntry: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'DataEntry'
		},
		dataErrorChecking: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'DataErrorChecking'
		},
		direction: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'Direction'
		},
		measure: {
			type: Sequelize.INTEGER,
			allowNull: true,
			field: 'Measure'
		},
		lineLengthAmount: {
			type: Sequelize.DOUBLE,
			allowNull: true,
			field: 'LineLengthAmount'
		},
		spacingIntervalAmount: {
			type: Sequelize.DOUBLE,
			allowNull: true,
			field: 'SpacingIntervalAmount'
		},
		spacingType: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'SpacingType'
		},
		heightOption: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'HeightOption'
		},
		heightUom: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'HeightUOM'
		},
		showCheckbox: {
			type: Sequelize.BOOLEAN,
			allowNull: true,
			field: 'ShowCheckbox'
		},
		checkboxLabel: {
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
		layerHeights: {
			type: Sequelize.BOOLEAN,
			allowNull: true,
			field: 'LayerHeights'
		},
		woodyHerbHeights: {
			type: Sequelize.BOOLEAN,
			allowNull: true,
			field: 'WoodyHerbHeights'
		},
		lowerHerbHeight: {
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
		notes: {
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
		heightNoneOption: {
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
		showShrubShape: {
			type: Sequelize.BOOLEAN,
			allowNull: true,
			field: 'ShowShrubShape'
		},
		rapidMode: {
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
		hafOther: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'HAF_Other'
		},
		avgHeightLowerHerb: {
			type: Sequelize.DOUBLE,
			allowNull: true,
			field: 'avgHeightLowerHerb'
		},
		primaryKey: {
			type: Sequelize.TEXT,
			allowNull: true,
			primaryKey: true,
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
		tableName: 'tblLPIHeader',
		createdAt: false,
		updatedAt:false,
	});

	module.exports = lpiheader
