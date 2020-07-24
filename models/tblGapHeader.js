const Sequelize = require('sequelize')

const db = require("../config/database")

const gapheader = db.define('tblGapHeader', {
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
		GapMin: {
			type: Sequelize.DOUBLE,
			allowNull: true,
			field: 'GapMin'
		},
		GapMin: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'GapData'
		},
		PerennialsCanopy: {
			type: Sequelize.BOOLEAN,
			allowNull: true,
			field: 'PerennialsCanopy'
		},
		AnnualGrassesCanopy: {
			type: Sequelize.BOOLEAN,
			allowNull: true,
			field: 'AnnualGrassesCanopy'
		},
		AnnualForbsCanopy: {
			type: Sequelize.BOOLEAN,
			allowNull: true,
			field: 'AnnualForbsCanopy'
		},
		OtherCanopy: {
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
		Notes: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'Notes'
		},
		NoCanopyGaps: {
			type: Sequelize.BOOLEAN,
			allowNull: true,
			field: 'NoCanopyGaps'
		},
		NoBasalGaps: {
			type: Sequelize.BOOLEAN,
			allowNull: true,
			field: 'NoBasalGaps'
		},
		PerennialsBasal: {
			type: Sequelize.BOOLEAN,
			allowNull: true,
			field: 'PerennialsBasal'
		},
		AnnualGrassesBasal: {
			type: Sequelize.BOOLEAN,
			allowNull: true,
			field: 'AnnualGrassesBasal'
		},
		AnnualForbsBasal: {
			type: Sequelize.BOOLEAN,
			allowNull: true,
			field: 'AnnualForbsBasal'
		},
		OtherBasal: {
			type: Sequelize.BOOLEAN,
			allowNull: true,
			field: 'OtherBasal'
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
		tableName: 'tblGapHeader',
		createdAt: false,
		updatedAt:false,
	});

module.exports = gapheader