const Sequelize = require('sequelize')

const db = require("../config/database")

const speciesgeneric = db.define('tblSpeciesGeneric', {
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
		group: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'Group'
		},
		dateModified: {
			type: Sequelize.DATE,
			allowNull: true,
			field: 'DateModified'
		},
		dateFound: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'DateFound'
		},
		plotFirstFound: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'PlotFirstFound'
		},
		potentialGenus: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'PotentialGenus'
		},
		potenialSpecies: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'PotenialSpecies'
		},
		potentialSubspecies: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'PotentialSubspecies'
		},
		comments: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'Comments'
		},
		photosTaken: {
			type: Sequelize.BOOLEAN,
			allowNull: true,
			field: 'PhotosTaken'
		},
		photoNumbers: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'PhotoNumbers'
		},
		specimenCollected: {
			type: Sequelize.BOOLEAN,
			allowNull: true,
			field: 'SpecimenCollected'
		},
		identifiedTo: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'IdentifiedTo'
		},
		finalCode: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'FinalCode'
		},
		changedInDima: {
			type: Sequelize.BOOLEAN,
			allowNull: true,
			field: 'ChangedInDIMA'
		},
		petalsNumber: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'petalsNumber'
		},
		petalsColor: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'petalsColor'
		},
		petalsSize: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'petalsSize'
		},
		sepalsNumber: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'sepalsNumber'
		},
		sepalsColor: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'sepalsColor'
		},
		sepalsSize: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'sepalsSize'
		},
		stamensNumber: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'stamensNumber'
		},
		stamensColor: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'stamensColor'
		},
		stamensSize: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'stamensSize'
		},
		glumesPresent: {
			type: Sequelize.BOOLEAN,
			allowNull: true,
			field: 'glumesPresent'
		},
		ligulesPresent: {
			type: Sequelize.BOOLEAN,
			allowNull: true,
			field: 'ligulesPresent'
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
		tableName: 'tblSpeciesGeneric',
		createdAt: false,
		updatedAt:false,
	});

module.exports = speciesgeneric
