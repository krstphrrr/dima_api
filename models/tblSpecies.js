const Sequelize = require('sequelize')

const db = require("../config/database")

const species = db.define('tblSpecies', {
	SpeciesCode: {
		type: Sequelize.TEXT,
		allowNull: true
	},
	ScientificName: {
		type: Sequelize.TEXT,
		allowNull: true
	},
	CommonName: {
		type: Sequelize.TEXT,
		allowNull: true
	},
	Family: {
		type: Sequelize.TEXT,
		allowNull: true
	},
	SortSeq: {
		type: Sequelize.INTEGER,
		allowNull: true
	},
	synonymOf: {
		type: Sequelize.TEXT,
		allowNull: true
	},
	GrowthHabitCode: {
		type: Sequelize.TEXT,
		allowNull: true
	},
	Duration: {
		type: Sequelize.TEXT,
		allowNull: true
	},
	Stabilizing: {
		type: Sequelize.BOOLEAN,
		allowNull: true
	},
	Invasive: {
		type: Sequelize.BOOLEAN,
		allowNull: true
	},
	Group: {
		type: Sequelize.TEXT,
		allowNull: true
	},
	DateLoadedInDB: {
		type: Sequelize.TEXT,
		allowNull: true
	},
	DBKey: {
		type: Sequelize.TEXT,
		allowNull: true,
		primaryKey:true
	}
	}, {
		tableName: 'tblSpecies',
		createdAt: false,
		updatedAt:false,
	});

module.exports = species
