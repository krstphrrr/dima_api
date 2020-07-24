const Sequelize = require('sequelize')

const db = require("../config/database")

const speciesgeneric = db.define('tblSpeciesGeneric', {
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
	Group: {
		type: Sequelize.TEXT,
		allowNull: true
	},
	DateModified: {
		type: Sequelize.DATE,
		allowNull: true
	},
	DateFound: {
		type: Sequelize.TEXT,
		allowNull: true
	},
	PlotFirstFound: {
		type: Sequelize.TEXT,
		allowNull: true
	},
	PotentialGenus: {
		type: Sequelize.TEXT,
		allowNull: true
	},
	PotenialSpecies: {
		type: Sequelize.TEXT,
		allowNull: true
	},
	PotentialSubspecies: {
		type: Sequelize.TEXT,
		allowNull: true
	},
	Comments: {
		type: Sequelize.TEXT,
		allowNull: true
	},
	PhotosTaken: {
		type: Sequelize.BOOLEAN,
		allowNull: true
	},
	PhotoNumbers: {
		type: Sequelize.TEXT,
		allowNull: true
	},
	SpecimenCollected: {
		type: Sequelize.BOOLEAN,
		allowNull: true
	},
	IdentifiedTo: {
		type: Sequelize.TEXT,
		allowNull: true
	},
	FinalCode: {
		type: Sequelize.TEXT,
		allowNull: true
	},
	ChangedInDIMA: {
		type: Sequelize.BOOLEAN,
		allowNull: true
	},
	petalsNumber: {
		type: Sequelize.TEXT,
		allowNull: true
	},
	petalsColor: {
		type: Sequelize.TEXT,
		allowNull: true
	},
	petalsSize: {
		type: Sequelize.TEXT,
		allowNull: true
	},
	sepalsNumber: {
		type: Sequelize.TEXT,
		allowNull: true
	},
	sepalsColor: {
		type: Sequelize.TEXT,
		allowNull: true
	},
	sepalsSize: {
		type: Sequelize.TEXT,
		allowNull: true
	},
	stamensNumber: {
		type: Sequelize.TEXT,
		allowNull: true
	},
	stamensColor: {
		type: Sequelize.TEXT,
		allowNull: true
	},
	stamensSize: {
		type: Sequelize.TEXT,
		allowNull: true
	},
	glumesPresent: {
		type: Sequelize.BOOLEAN,
		allowNull: true
	},
	ligulesPresent: {
		type: Sequelize.BOOLEAN,
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
		tableName: 'tblSpeciesGeneric',
		createdAt: false,
		updatedAt:false,
	});

module.exports = speciesgeneric
