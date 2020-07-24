const Sequelize = require('sequelize')

const db = require("../config/database")

const sites = db.define('tblSites', {
		SiteKey: {
			type: Sequelize.TEXT,
			allowNull: true,
			primaryKey:true,
			field: 'SiteKey'
		},
		DateModified: {
			type: Sequelize.DATE,
			allowNull: true,
			field: 'DateModified'
		},
		SiteID: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'SiteID'
		},
		SiteName: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'SiteName'
		},
		Ownership: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'Ownership'
		},
		ContactName: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'ContactName'
		},
		MgtObject: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'MgtObject'
		},
		MonObject: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'MonObject'
		},
		Notes: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'Notes'
		},
		uploaded: {
			type: Sequelize.BOOLEAN,
			allowNull: true,
			field: 'uploaded'
		},
		DateLoadedInDB: {
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
		tableName: 'tblSites',
		createdAt: false,
		updatedAt:false,
	});

module.exports = sites
