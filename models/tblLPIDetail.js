const Sequelize = require('sequelize')

const db = require("../config/database")

const lpidetail = db.define('tblLpiDetail', {
		RecKey: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'RecKey'
		},
		PointLoc: {
			type: Sequelize.DOUBLE,
			allowNull: true,
			field: 'PointLoc'
		},
		PointNbr: {
			type: Sequelize.INTEGER,
			allowNull: true,
			field: 'PointNbr'
		},
		TopCanopy: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'TopCanopy'
		},
		Lower1: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'Lower1'
		},
		Lower2: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'Lower2'
		},
		Lower3: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'Lower3'
		},
		Lower4: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'Lower4'
		},
		SoilSurface: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'SoilSurface'
		},
		HeightTop: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'HeightTop'
		},
		ChkboxTop: {
			type: Sequelize.BOOLEAN,
			allowNull: true,
			field: 'ChkboxTop'
		},
		ChkboxLower1: {
			type: Sequelize.BOOLEAN,
			allowNull: true,
			field: 'ChkboxLower1'
		},
		ChkboxLower2: {
			type: Sequelize.BOOLEAN,
			allowNull: true,
			field: 'ChkboxLower2'
		},
		ChkboxLower3: {
			type: Sequelize.BOOLEAN,
			allowNull: true,
			field: 'ChkboxLower3'
		},
		ChkboxLower4: {
			type: Sequelize.BOOLEAN,
			allowNull: true,
			field: 'ChkboxLower4'
		},
		ChkboxSoil: {
			type: Sequelize.BOOLEAN,
			allowNull: true,
			field: 'ChkboxSoil'
		},
		HeightLower1: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'HeightLower1'
		},
		HeightLower2: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'HeightLower2'
		},
		HeightLower3: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'HeightLower3'
		},
		HeightLower4: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'HeightLower4'
		},
		HeightSurface: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'HeightSurface'
		},
		HeightWoody: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'HeightWoody'
		},
		HeightHerbaceous: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'HeightHerbaceous'
		},
		ShrubShape: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'ShrubShape'
		},
		SpeciesWoody: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'SpeciesWoody'
		},
		SpeciesHerbaceous: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'SpeciesHerbaceous'
		},
		ChkboxWoody: {
			type: Sequelize.BOOLEAN,
			allowNull: true,
			field: 'ChkboxWoody'
		},
		ChkboxHerbaceous: {
			type: Sequelize.BOOLEAN,
			allowNull: true,
			field: 'ChkboxHerbaceous'
		},
		Lower5: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'Lower5'
		},
		Lower6: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'Lower6'
		},
		Lower7: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'Lower7'
		},
		ChkboxLower5: {
			type: Sequelize.BOOLEAN,
			allowNull: true,
			field: 'ChkboxLower5'
		},
		ChkboxLower6: {
			type: Sequelize.BOOLEAN,
			allowNull: true,
			field: 'ChkboxLower6'
		},
		ChkboxLower7: {
			type: Sequelize.BOOLEAN,
			allowNull: true,
			field: 'ChkboxLower7'
		},
		HeightLower5: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'HeightLower5'
		},
		HeightLower6: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'HeightLower6'
		},
		HeightLower7: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'HeightLower7'
		},
		SpeciesLowerHerb: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'SpeciesLowerHerb'
		},
		HeightLowerHerb: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'HeightLowerHerb'
		},
		ChkboxLowerHerb: {
			type: Sequelize.BOOLEAN,
			allowNull: true,
			field: 'ChkboxLowerHerb'
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
		tableName: 'tblLPIDetail',
		createdAt: false,
		updatedAt:false,
	});

module.exports = lpidetail