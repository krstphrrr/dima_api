const Sequelize = require('sequelize')
const db = require("../config/database")

/**
 * @swagger 
 * definitions:
 * 	GapDetail:
 * 		type:object
 * 		properties:
 * 			RecKey:
 * 				type: string
 * 			SeqNo:
 * 				type: integer
 * 			RecType:
 * 				type: string
 * 			GapStart:
 * 				type: string
 * 			GapEnd:
 * 				type: string
 * 			Gap:
 * 				type: string
 * 			PrimaryKey:
 * 				type: string
 * 			DateLoadedInDB:
 * 				type: string
 * 				format:date-time
 * 			DBKey:
 * 				type: string
 * 
 */

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
			allowNull: true,
			primaryKey:true
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
