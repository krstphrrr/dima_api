const Sequelize = require('sequelize')

const db = require("../config/database")

const gapheader = db.define('tblGapHeader', {
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
		gapMin: {
			type: Sequelize.DOUBLE,
			allowNull: true,
			field: 'GapMin'
		},
		gapData: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'GapData'
		},
		perennialsCanopy: {
			type: Sequelize.BOOLEAN,
			allowNull: true,
			field: 'PerennialsCanopy'
		},
		annualGrassesCanopy: {
			type: Sequelize.BOOLEAN,
			allowNull: true,
			field: 'AnnualGrassesCanopy'
		},
		annualForbsCanopy: {
			type: Sequelize.BOOLEAN,
			allowNull: true,
			field: 'AnnualForbsCanopy'
		},
		otherCanopy: {
			type: Sequelize.BOOLEAN,
			allowNull: true,
			field: 'OtherCanopy'
		},
		sumCanCat1: {
			type: Sequelize.DOUBLE,
			allowNull: true,
			field: 'sumCanCat1'
		},
		sumCanCat2: {
			type: Sequelize.DOUBLE,
			allowNull: true,
			field: 'sumCanCat2'
		},
		sumCanCat3: {
			type: Sequelize.DOUBLE,
			allowNull: true,
			field: 'sumCanCat3'
		},
		sumCanCat4: {
			type: Sequelize.DOUBLE,
			allowNull: true,
			field: 'sumCanCat4'
		},
		pctCanCat1: {
			type: Sequelize.DOUBLE,
			allowNull: true,
			field: 'pctCanCat1'
		},
		pctCanCat2: {
			type: Sequelize.DOUBLE,
			allowNull: true,
			field: 'pctCanCat2'
		},
		pctCanCat3: {
			type: Sequelize.DOUBLE,
			allowNull: true,
			field: 'pctCanCat3'
		},
		pctCanCat4: {
			type: Sequelize.DOUBLE,
			allowNull: true,
			field: 'pctCanCat4'
		},
		sumBasCat1: {
			type: Sequelize.DOUBLE,
			allowNull: true,
			field: 'sumBasCat1'
		},
		sumBasCat2: {
			type: Sequelize.DOUBLE,
			allowNull: true,
			field: 'sumBasCat2'
		},
		sumBasCat3: {
			type: Sequelize.DOUBLE,
			allowNull: true,
			field: 'sumBasCat3'
		},
		sumBasCat4: {
			type: Sequelize.DOUBLE,
			allowNull: true,
			field: 'sumBasCat4'
		},
		pctBasCat1: {
			type: Sequelize.DOUBLE,
			allowNull: true,
			field: 'pctBasCat1'
		},
		pctBasCat2: {
			type: Sequelize.DOUBLE,
			allowNull: true,
			field: 'pctBasCat2'
		},
		pctBasCat3: {
			type: Sequelize.DOUBLE,
			allowNull: true,
			field: 'pctBasCat3'
		},
		pctBasCat4: {
			type: Sequelize.DOUBLE,
			allowNull: true,
			field: 'pctBasCat4'
		},
		notes: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'Notes'
		},
		noCanopyGaps: {
			type: Sequelize.BOOLEAN,
			allowNull: true,
			field: 'NoCanopyGaps'
		},
		noBasalGaps: {
			type: Sequelize.BOOLEAN,
			allowNull: true,
			field: 'NoBasalGaps'
		},
		perennialsBasal: {
			type: Sequelize.BOOLEAN,
			allowNull: true,
			field: 'PerennialsBasal'
		},
		annualGrassesBasal: {
			type: Sequelize.BOOLEAN,
			allowNull: true,
			field: 'AnnualGrassesBasal'
		},
		annualForbsBasal: {
			type: Sequelize.BOOLEAN,
			allowNull: true,
			field: 'AnnualForbsBasal'
		},
		otherBasal: {
			type: Sequelize.BOOLEAN,
			allowNull: true,
			field: 'OtherBasal'
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
		tableName: 'tblGapHeader',
		createdAt: false,
		updatedAt:false,
	});

module.exports = gapheader