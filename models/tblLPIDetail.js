const Sequelize = require('sequelize')

const db = require("../config/database")

const lpidetail = db.define('tblLpiDetail', {
		recKey: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'RecKey'
		},
		pointLoc: {
			type: Sequelize.DOUBLE,
			allowNull: true,
			field: 'PointLoc'
		},
		pointNbr: {
			type: Sequelize.INTEGER,
			allowNull: true,
			field: 'PointNbr'
		},
		topCanopy: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'TopCanopy'
		},
		lower1: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'Lower1'
		},
		lower2: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'Lower2'
		},
		lower3: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'Lower3'
		},
		lower4: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'Lower4'
		},
		soilSurface: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'SoilSurface'
		},
		heightTop: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'HeightTop'
		},
		chkboxTop: {
			type: Sequelize.BOOLEAN,
			allowNull: true,
			field: 'ChkboxTop'
		},
		chkboxLower1: {
			type: Sequelize.BOOLEAN,
			allowNull: true,
			field: 'ChkboxLower1'
		},
		chkboxLower2: {
			type: Sequelize.BOOLEAN,
			allowNull: true,
			field: 'ChkboxLower2'
		},
		chkboxLower3: {
			type: Sequelize.BOOLEAN,
			allowNull: true,
			field: 'ChkboxLower3'
		},
		chkboxLower4: {
			type: Sequelize.BOOLEAN,
			allowNull: true,
			field: 'ChkboxLower4'
		},
		chkboxSoil: {
			type: Sequelize.BOOLEAN,
			allowNull: true,
			field: 'ChkboxSoil'
		},
		heightLower1: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'HeightLower1'
		},
		heightLower2: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'HeightLower2'
		},
		heightLower3: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'HeightLower3'
		},
		heightLower4: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'HeightLower4'
		},
		heightSurface: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'HeightSurface'
		},
		heightWoody: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'HeightWoody'
		},
		heightHerbaceous: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'HeightHerbaceous'
		},
		shrubShape: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'ShrubShape'
		},
		speciesWoody: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'SpeciesWoody'
		},
		speciesHerbaceous: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'SpeciesHerbaceous'
		},
		chkboxWoody: {
			type: Sequelize.BOOLEAN,
			allowNull: true,
			field: 'ChkboxWoody'
		},
		chkboxHerbaceous: {
			type: Sequelize.BOOLEAN,
			allowNull: true,
			field: 'ChkboxHerbaceous'
		},
		lower5: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'Lower5'
		},
		lower6: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'Lower6'
		},
		lower7: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'Lower7'
		},
		chkboxLower5: {
			type: Sequelize.BOOLEAN,
			allowNull: true,
			field: 'ChkboxLower5'
		},
		chkboxLower6: {
			type: Sequelize.BOOLEAN,
			allowNull: true,
			field: 'ChkboxLower6'
		},
		chkboxLower7: {
			type: Sequelize.BOOLEAN,
			allowNull: true,
			field: 'ChkboxLower7'
		},
		heightLower5: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'HeightLower5'
		},
		heightLower6: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'HeightLower6'
		},
		heightLower7: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'HeightLower7'
		},
		speciesLowerHerb: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'SpeciesLowerHerb'
		},
		heightLowerHerb: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'HeightLowerHerb'
		},
		chkboxLowerHerb: {
			type: Sequelize.BOOLEAN,
			allowNull: true,
			field: 'ChkboxLowerHerb'
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
		tableName: 'tblLPIDetail',
		createdAt: false,
		updatedAt:false,
	});

module.exports = lpidetail