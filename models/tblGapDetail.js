const Sequelize = require('sequelize')

const db = require("../config/database")

const gapdetail = db.define('tblGapDetail', {
		RecKey: {
			type: Sequelize.TEXT,
			allowNull: true
		},
		SeqNo: {
			type: Sequelize.INTEGER,
			allowNull: true
		},
		RecType: {
			type: Sequelize.TEXT,
			allowNull: true
		},
		GapStart: {
			type: Sequelize.TEXT,
			allowNull: true
		},
		GapEnd: {
			type: Sequelize.TEXT,
			allowNull: true
		},
		Gap: {
			type: Sequelize.TEXT,
			allowNull: true
		},
		PrimaryKey: {
			type: Sequelize.TEXT,
			allowNull: true
		},
		DateLoadedInDB: {
			type: Sequelize.TEXT,
			allowNull: true
		},
		DBKey: {
			type: Sequelize.TEXT,
			allowNull: true
		}
	}, {
		tableName: 'tblGapDetail',
		createdAt: false,
		updatedAt:false,
	});

module.exports = gapdetail
