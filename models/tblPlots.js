const Sequelize = require('sequelize')

const db = require("../config/database")

const plots = db.define('tblPlots', {
	SiteKey: {
		type: Sequelize.TEXT,
		allowNull: true
	},
	PlotKey: {
		type: Sequelize.TEXT,
		allowNull: true
	},
	DateModified: {
		type: Sequelize.DATE,
		allowNull: true
	},
	PlotID: {
		type: Sequelize.TEXT,
		allowNull: true
	},
	genericPlot: {
		type: Sequelize.BOOLEAN,
		allowNull: true
	},
	EstablishDate: {
		type: Sequelize.DATE,
		allowNull: true
	},
	State: {
		type: Sequelize.TEXT,
		allowNull: true
	},
	County: {
		type: Sequelize.TEXT,
		allowNull: true
	},
	Directions: {
		type: Sequelize.TEXT,
		allowNull: true
	},
	AvgPrecip: {
		type: Sequelize.DOUBLE,
		allowNull: true
	},
	AvgPrecipUOM: {
		type: Sequelize.TEXT,
		allowNull: true
	},
	EcolSite: {
		type: Sequelize.TEXT,
		allowNull: true
	},
	EcolSiteMLRA: {
		type: Sequelize.TEXT,
		allowNull: true
	},
	EcolSiteSubMLRA: {
		type: Sequelize.TEXT,
		allowNull: true
	},
	EcolSiteNum: {
		type: Sequelize.TEXT,
		allowNull: true
	},
	EcolSiteState: {
		type: Sequelize.TEXT,
		allowNull: true
	},
	Soil: {
		type: Sequelize.TEXT,
		allowNull: true
	},
	ParentMaterial: {
		type: Sequelize.TEXT,
		allowNull: true
	},
	Slope: {
		type: Sequelize.DOUBLE,
		allowNull: true
	},
	Aspect: {
		type: Sequelize.TEXT,
		allowNull: true
	},
	ESD_SlopeShape: {
		type: Sequelize.TEXT,
		allowNull: true
	},
	LandscapeType: {
		type: Sequelize.TEXT,
		allowNull: true
	},
	LandscapeTypeSecondary: {
		type: Sequelize.TEXT,
		allowNull: true
	},
	MgtUnit: {
		type: Sequelize.TEXT,
		allowNull: true
	},
	GPSCoordSys: {
		type: Sequelize.TEXT,
		allowNull: true
	},
	Datum: {
		type: Sequelize.TEXT,
		allowNull: true
	},
	Zone: {
		type: Sequelize.TEXT,
		allowNull: true
	},
	Easting: {
		type: Sequelize.DOUBLE,
		allowNull: true
	},
	Northing: {
		type: Sequelize.DOUBLE,
		allowNull: true
	},
	Elevation: {
		type: Sequelize.DOUBLE,
		allowNull: true
	},
	ElevationType: {
		type: Sequelize.INTEGER,
		allowNull: true
	},
	RecentWeatherPast12: {
		type: Sequelize.TEXT,
		allowNull: true
	},
	RecentWeatherPrevious12: {
		type: Sequelize.TEXT,
		allowNull: true
	},
	DisturbWildfire: {
		type: Sequelize.BOOLEAN,
		allowNull: true
	},
	DisturbRodents: {
		type: Sequelize.BOOLEAN,
		allowNull: true
	},
	DisturbMammals: {
		type: Sequelize.BOOLEAN,
		allowNull: true
	},
	DisturbWater: {
		type: Sequelize.BOOLEAN,
		allowNull: true
	},
	DisturbWind: {
		type: Sequelize.BOOLEAN,
		allowNull: true
	},
	DisturbWaterSoilDep: {
		type: Sequelize.BOOLEAN,
		allowNull: true
	},
	DisturbWindSoilDep: {
		type: Sequelize.BOOLEAN,
		allowNull: true
	},
	DisturbUndgroundUtils: {
		type: Sequelize.BOOLEAN,
		allowNull: true
	},
	DisturbOverhdTransLines: {
		type: Sequelize.BOOLEAN,
		allowNull: true
	},
	DisturbOther: {
		type: Sequelize.BOOLEAN,
		allowNull: true
	},
	DisturbOtherDesc: {
		type: Sequelize.TEXT,
		allowNull: true
	},
	WildlifeUse: {
		type: Sequelize.TEXT,
		allowNull: true
	},
	MgtHistory: {
		type: Sequelize.TEXT,
		allowNull: true
	},
	OffsiteInfluences: {
		type: Sequelize.TEXT,
		allowNull: true
	},
	Comments: {
		type: Sequelize.TEXT,
		allowNull: true
	},
	SpeciesList: {
		type: Sequelize.TEXT,
		allowNull: true
	},
	DensityList: {
		type: Sequelize.TEXT,
		allowNull: true
	},
	MapUnitComponent: {
		type: Sequelize.TEXT,
		allowNull: true
	},
	SoilPhase: {
		type: Sequelize.TEXT,
		allowNull: true
	},
	Unused3: {
		type: Sequelize.TEXT,
		allowNull: true
	},
	Unused4: {
		type: Sequelize.TEXT,
		allowNull: true
	},
	ESD_MLRA: {
		type: Sequelize.TEXT,
		allowNull: true
	},
	ESD_CRA: {
		type: Sequelize.TEXT,
		allowNull: true
	},
	Unused5: {
		type: Sequelize.TEXT,
		allowNull: true
	},
	ESD_Region: {
		type: Sequelize.TEXT,
		allowNull: true
	},
	ESD_Investigators: {
		type: Sequelize.TEXT,
		allowNull: true
	},
	ESD_Bedrock: {
		type: Sequelize.TEXT,
		allowNull: true
	},
	Unused6: {
		type: Sequelize.TEXT,
		allowNull: true
	},
	ESD_MajorLandform: {
		type: Sequelize.TEXT,
		allowNull: true
	},
	ESD_ComponentLandform: {
		type: Sequelize.TEXT,
		allowNull: true
	},
	HillslopeType: {
		type: Sequelize.TEXT,
		allowNull: true
	},
	ESD_GeomorphicComp: {
		type: Sequelize.TEXT,
		allowNull: true
	},
	ESD_RunIn_RunOff: {
		type: Sequelize.TEXT,
		allowNull: true
	},
	ESD_SlopeComplexity: {
		type: Sequelize.TEXT,
		allowNull: true
	},
	Unused7: {
		type: Sequelize.TEXT,
		allowNull: true
	},
	Unused8: {
		type: Sequelize.DOUBLE,
		allowNull: true
	},
	Unused9: {
		type: Sequelize.TEXT,
		allowNull: true
	},
	Unused10: {
		type: Sequelize.TEXT,
		allowNull: true
	},
	Unused11: {
		type: Sequelize.TEXT,
		allowNull: true
	},
	ESD_LitterClass: {
		type: Sequelize.TEXT,
		allowNull: true
	},
	ESD_BiologicalCrustClass: {
		type: Sequelize.TEXT,
		allowNull: true
	},
	Unused12: {
		type: Sequelize.TEXT,
		allowNull: true
	},
	Unused13: {
		type: Sequelize.TEXT,
		allowNull: true
	},
	Unused14: {
		type: Sequelize.TEXT,
		allowNull: true
	},
	Unused15: {
		type: Sequelize.TEXT,
		allowNull: true
	},
	Unused16: {
		type: Sequelize.TEXT,
		allowNull: true
	},
	Unused17: {
		type: Sequelize.TEXT,
		allowNull: true
	},
	Unused18: {
		type: Sequelize.TEXT,
		allowNull: true
	},
	Unused19: {
		type: Sequelize.TEXT,
		allowNull: true
	},
	Unused20: {
		type: Sequelize.TEXT,
		allowNull: true
	},
	ESD_Series: {
		type: Sequelize.TEXT,
		allowNull: true
	},
	ESD_ParticleSizeClass: {
		type: Sequelize.TEXT,
		allowNull: true
	},
	ESD_Mineralogy: {
		type: Sequelize.TEXT,
		allowNull: true
	},
	ESD_SoilTempRegime: {
		type: Sequelize.TEXT,
		allowNull: true
	},
	ESD_DepthClass: {
		type: Sequelize.TEXT,
		allowNull: true
	},
	ESD_Subgroup: {
		type: Sequelize.TEXT,
		allowNull: true
	},
	ESD_Greatgroup: {
		type: Sequelize.TEXT,
		allowNull: true
	},
	ESD_Reaction: {
		type: Sequelize.TEXT,
		allowNull: true
	},
	ESD_SoilMoistureRegime: {
		type: Sequelize.TEXT,
		allowNull: true
	},
	ESD_CationExchangeActivityClass: {
		type: Sequelize.TEXT,
		allowNull: true
	},
	ESD_Epipedon: {
		type: Sequelize.TEXT,
		allowNull: true
	},
	ESD_Subsurface_features: {
		type: Sequelize.TEXT,
		allowNull: true
	},
	ESD_Depth_to_root_horizon: {
		type: Sequelize.TEXT,
		allowNull: true
	},
	ESD_Type_root_horizon: {
		type: Sequelize.TEXT,
		allowNull: true
	},
	ESD_Horizon_notes: {
		type: Sequelize.TEXT,
		allowNull: true
	},
	ESD_TrackingID: {
		type: Sequelize.TEXT,
		allowNull: true
	},
	Unused21: {
		type: Sequelize.TEXT,
		allowNull: true
	},
	Unused22: {
		type: Sequelize.TEXT,
		allowNull: true
	},
	EcolSite_Assoc1: {
		type: Sequelize.TEXT,
		allowNull: true
	},
	EcolSite_Assoc2: {
		type: Sequelize.TEXT,
		allowNull: true
	},
	EcolSite_Assoc3: {
		type: Sequelize.TEXT,
		allowNull: true
	},
	EcolSite_Similar1: {
		type: Sequelize.TEXT,
		allowNull: true
	},
	EcolSite_Similar2: {
		type: Sequelize.TEXT,
		allowNull: true
	},
	EcolSite_Similar3: {
		type: Sequelize.TEXT,
		allowNull: true
	},
	EcolSite_Notes: {
		type: Sequelize.TEXT,
		allowNull: true
	},
	EcolSite_Lookup1: {
		type: Sequelize.TEXT,
		allowNull: true
	},
	EcolSite_Lookup2: {
		type: Sequelize.TEXT,
		allowNull: true
	},
	EcolSite_Lookup3: {
		type: Sequelize.TEXT,
		allowNull: true
	},
	EcolSite_Text1: {
		type: Sequelize.TEXT,
		allowNull: true
	},
	EcolSite_Text2: {
		type: Sequelize.TEXT,
		allowNull: true
	},
	EcolSite_Text3: {
		type: Sequelize.TEXT,
		allowNull: true
	},
	ESD_RecentWeatherPast12: {
		type: Sequelize.TEXT,
		allowNull: true
	},
	ESD_ErosionPatternClass: {
		type: Sequelize.TEXT,
		allowNull: true
	},
	Unused23: {
		type: Sequelize.TEXT,
		allowNull: true
	},
	Unused24: {
		type: Sequelize.TEXT,
		allowNull: true
	},
	Longitude: {
		type: Sequelize.DOUBLE,
		allowNull: true
	},
	Latitude: {
		type: Sequelize.DOUBLE,
		allowNull: true
	},
	CoordLabel1: {
		type: Sequelize.TEXT,
		allowNull: true
	},
	CoordDistance1: {
		type: Sequelize.TEXT,
		allowNull: true
	},
	Longitude1: {
		type: Sequelize.DOUBLE,
		allowNull: true
	},
	Latitude1: {
		type: Sequelize.DOUBLE,
		allowNull: true
	},
	Easting1: {
		type: Sequelize.DOUBLE,
		allowNull: true
	},
	Northing1: {
		type: Sequelize.DOUBLE,
		allowNull: true
	},
	CoordLabel2: {
		type: Sequelize.TEXT,
		allowNull: true
	},
	CoordDistance2: {
		type: Sequelize.TEXT,
		allowNull: true
	},
	Longitude2: {
		type: Sequelize.DOUBLE,
		allowNull: true
	},
	Latitude2: {
		type: Sequelize.DOUBLE,
		allowNull: true
	},
	Easting2: {
		type: Sequelize.DOUBLE,
		allowNull: true
	},
	Northing2: {
		type: Sequelize.DOUBLE,
		allowNull: true
	},
	CoordLabel3: {
		type: Sequelize.TEXT,
		allowNull: true
	},
	CoordDistance3: {
		type: Sequelize.TEXT,
		allowNull: true
	},
	Longitude3: {
		type: Sequelize.DOUBLE,
		allowNull: true
	},
	Latitude3: {
		type: Sequelize.DOUBLE,
		allowNull: true
	},
	Easting3: {
		type: Sequelize.DOUBLE,
		allowNull: true
	},
	Northing3: {
		type: Sequelize.DOUBLE,
		allowNull: true
	},
	PrimaryKey: {
		type: Sequelize.TEXT,
		allowNull: true,
		primaryKey: true
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
		tableName: 'tblPlots',
		createdAt: false,
		updatedAt:false,
	});

	module.exports = plots
