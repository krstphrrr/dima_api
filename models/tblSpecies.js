const Sequelize = require('sequelize')

const db = require("../config/database")

const species = db.define('tblSpecies', {
		speciesCode: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'SpeciesCode'
		},
		scientificName: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'ScientificName'
		},
		commonName: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'CommonName'
		},
		family: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'Family'
		},
		sortSeq: {
			type: Sequelize.INTEGER,
			allowNull: true,
			field: 'SortSeq'
		},
		synonymOf: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'synonymOf'
		},
		growthHabitCode: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'GrowthHabitCode'
		},
		duration: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'Duration'
		},
		stabilizing: {
			type: Sequelize.BOOLEAN,
			allowNull: true,
			field: 'Stabilizing'
		},
		invasive: {
			type: Sequelize.BOOLEAN,
			allowNull: true,
			field: 'Invasive'
		},
		group: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'Group'
		},
		dateLoadedInDb: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'DateLoadedInDB'
		},
		dbKey: {
			type: Sequelize.TEXT,
			allowNull: true,
			primaryKey:true,
			field: 'DBKey'
		}
	}, {
		tableName: 'tblSpecies',
		createdAt: false,
		updatedAt:false,
	});

module.exports = species
