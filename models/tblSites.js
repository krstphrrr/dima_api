const Sequelize = require('sequelize')

const db = require("../config/database")

const sites = db.define('tblSites', {
		siteKey: {
			type: Sequelize.TEXT,
			allowNull: true,
			primaryKey:true,
			field: 'SiteKey'
		},
		dateModified: {
			type: Sequelize.DATE,
			allowNull: true,
			field: 'DateModified'
		},
		siteId: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'SiteID'
		},
		siteName: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'SiteName'
		},
		ownership: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'Ownership'
		},
		contactName: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'ContactName'
		},
		mgtObject: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'MgtObject'
		},
		monObject: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'MonObject'
		},
		notes: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'Notes'
		},
		uploaded: {
			type: Sequelize.BOOLEAN,
			allowNull: true,
			field: 'uploaded'
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
		tableName: 'tblSites',
		createdAt: false,
		updatedAt:false,
	});

module.exports = sites
