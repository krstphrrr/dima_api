const Sequelize = require('sequelize')

const db = require("../config/database")

const plots = db.define('tblPlots', {
		siteKey: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'SiteKey'
		},
		plotKey: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'PlotKey'
		},
		dateModified: {
			type: Sequelize.DATE,
			allowNull: true,
			field: 'DateModified'
		},
		plotId: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'PlotID'
		},
		genericPlot: {
			type: Sequelize.BOOLEAN,
			allowNull: true,
			field: 'genericPlot'
		},
		establishDate: {
			type: Sequelize.DATE,
			allowNull: true,
			field: 'EstablishDate'
		},
		state: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'State'
		},
		county: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'County'
		},
		directions: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'Directions'
		},
		avgPrecip: {
			type: Sequelize.DOUBLE,
			allowNull: true,
			field: 'AvgPrecip'
		},
		avgPrecipUom: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'AvgPrecipUOM'
		},
		ecolSite: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'EcolSite'
		},
		ecolSiteMlra: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'EcolSiteMLRA'
		},
		ecolSiteSubMlra: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'EcolSiteSubMLRA'
		},
		ecolSiteNum: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'EcolSiteNum'
		},
		ecolSiteState: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'EcolSiteState'
		},
		soil: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'Soil'
		},
		parentMaterial: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'ParentMaterial'
		},
		slope: {
			type: Sequelize.DOUBLE,
			allowNull: true,
			field: 'Slope'
		},
		aspect: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'Aspect'
		},
		esdSlopeShape: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'ESD_SlopeShape'
		},
		landscapeType: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'LandscapeType'
		},
		landscapeTypeSecondary: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'LandscapeTypeSecondary'
		},
		mgtUnit: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'MgtUnit'
		},
		gpsCoordSys: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'GPSCoordSys'
		},
		datum: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'Datum'
		},
		zone: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'Zone'
		},
		easting: {
			type: Sequelize.DOUBLE,
			allowNull: true,
			field: 'Easting'
		},
		northing: {
			type: Sequelize.DOUBLE,
			allowNull: true,
			field: 'Northing'
		},
		elevation: {
			type: Sequelize.DOUBLE,
			allowNull: true,
			field: 'Elevation'
		},
		elevationType: {
			type: Sequelize.INTEGER,
			allowNull: true,
			field: 'ElevationType'
		},
		recentWeatherPast12: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'RecentWeatherPast12'
		},
		recentWeatherPrevious12: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'RecentWeatherPrevious12'
		},
		disturbWildfire: {
			type: Sequelize.BOOLEAN,
			allowNull: true,
			field: 'DisturbWildfire'
		},
		disturbRodents: {
			type: Sequelize.BOOLEAN,
			allowNull: true,
			field: 'DisturbRodents'
		},
		disturbMammals: {
			type: Sequelize.BOOLEAN,
			allowNull: true,
			field: 'DisturbMammals'
		},
		disturbWater: {
			type: Sequelize.BOOLEAN,
			allowNull: true,
			field: 'DisturbWater'
		},
		disturbWind: {
			type: Sequelize.BOOLEAN,
			allowNull: true,
			field: 'DisturbWind'
		},
		disturbWaterSoilDep: {
			type: Sequelize.BOOLEAN,
			allowNull: true,
			field: 'DisturbWaterSoilDep'
		},
		disturbWindSoilDep: {
			type: Sequelize.BOOLEAN,
			allowNull: true,
			field: 'DisturbWindSoilDep'
		},
		disturbUndgroundUtils: {
			type: Sequelize.BOOLEAN,
			allowNull: true,
			field: 'DisturbUndgroundUtils'
		},
		disturbOverhdTransLines: {
			type: Sequelize.BOOLEAN,
			allowNull: true,
			field: 'DisturbOverhdTransLines'
		},
		disturbOther: {
			type: Sequelize.BOOLEAN,
			allowNull: true,
			field: 'DisturbOther'
		},
		disturbOtherDesc: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'DisturbOtherDesc'
		},
		wildlifeUse: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'WildlifeUse'
		},
		mgtHistory: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'MgtHistory'
		},
		offsiteInfluences: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'OffsiteInfluences'
		},
		comments: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'Comments'
		},
		speciesList: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'SpeciesList'
		},
		densityList: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'DensityList'
		},
		mapUnitComponent: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'MapUnitComponent'
		},
		soilPhase: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'SoilPhase'
		},
		unused3: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'Unused3'
		},
		unused4: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'Unused4'
		},
		esdMlra: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'ESD_MLRA'
		},
		esdCra: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'ESD_CRA'
		},
		unused5: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'Unused5'
		},
		esdRegion: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'ESD_Region'
		},
		esdInvestigators: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'ESD_Investigators'
		},
		esdBedrock: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'ESD_Bedrock'
		},
		unused6: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'Unused6'
		},
		esdMajorLandform: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'ESD_MajorLandform'
		},
		esdComponentLandform: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'ESD_ComponentLandform'
		},
		hillslopeType: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'HillslopeType'
		},
		esdGeomorphicComp: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'ESD_GeomorphicComp'
		},
		esdRunInRunOff: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'ESD_RunIn_RunOff'
		},
		esdSlopeComplexity: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'ESD_SlopeComplexity'
		},
		unused7: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'Unused7'
		},
		unused8: {
			type: Sequelize.DOUBLE,
			allowNull: true,
			field: 'Unused8'
		},
		unused9: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'Unused9'
		},
		unused10: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'Unused10'
		},
		unused11: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'Unused11'
		},
		esdLitterClass: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'ESD_LitterClass'
		},
		esdBiologicalCrustClass: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'ESD_BiologicalCrustClass'
		},
		unused12: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'Unused12'
		},
		unused13: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'Unused13'
		},
		unused14: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'Unused14'
		},
		unused15: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'Unused15'
		},
		unused16: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'Unused16'
		},
		unused17: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'Unused17'
		},
		unused18: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'Unused18'
		},
		unused19: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'Unused19'
		},
		unused20: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'Unused20'
		},
		esdSeries: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'ESD_Series'
		},
		esdParticleSizeClass: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'ESD_ParticleSizeClass'
		},
		esdMineralogy: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'ESD_Mineralogy'
		},
		esdSoilTempRegime: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'ESD_SoilTempRegime'
		},
		esdDepthClass: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'ESD_DepthClass'
		},
		esdSubgroup: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'ESD_Subgroup'
		},
		esdGreatgroup: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'ESD_Greatgroup'
		},
		esdReaction: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'ESD_Reaction'
		},
		esdSoilMoistureRegime: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'ESD_SoilMoistureRegime'
		},
		esdCationExchangeActivityClass: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'ESD_CationExchangeActivityClass'
		},
		esdEpipedon: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'ESD_Epipedon'
		},
		esdSubsurfaceFeatures: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'ESD_Subsurface_features'
		},
		esdDepthToRootHorizon: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'ESD_Depth_to_root_horizon'
		},
		esdTypeRootHorizon: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'ESD_Type_root_horizon'
		},
		esdHorizonNotes: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'ESD_Horizon_notes'
		},
		esdTrackingId: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'ESD_TrackingID'
		},
		unused21: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'Unused21'
		},
		unused22: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'Unused22'
		},
		ecolSiteAssoc1: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'EcolSite_Assoc1'
		},
		ecolSiteAssoc2: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'EcolSite_Assoc2'
		},
		ecolSiteAssoc3: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'EcolSite_Assoc3'
		},
		ecolSiteSimilar1: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'EcolSite_Similar1'
		},
		ecolSiteSimilar2: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'EcolSite_Similar2'
		},
		ecolSiteSimilar3: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'EcolSite_Similar3'
		},
		ecolSiteNotes: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'EcolSite_Notes'
		},
		ecolSiteLookup1: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'EcolSite_Lookup1'
		},
		ecolSiteLookup2: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'EcolSite_Lookup2'
		},
		ecolSiteLookup3: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'EcolSite_Lookup3'
		},
		ecolSiteText1: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'EcolSite_Text1'
		},
		ecolSiteText2: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'EcolSite_Text2'
		},
		ecolSiteText3: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'EcolSite_Text3'
		},
		esdRecentWeatherPast12: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'ESD_RecentWeatherPast12'
		},
		esdErosionPatternClass: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'ESD_ErosionPatternClass'
		},
		unused23: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'Unused23'
		},
		unused24: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'Unused24'
		},
		longitude: {
			type: Sequelize.DOUBLE,
			allowNull: true,
			field: 'Longitude'
		},
		latitude: {
			type: Sequelize.DOUBLE,
			allowNull: true,
			field: 'Latitude'
		},
		coordLabel1: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'CoordLabel1'
		},
		coordDistance1: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'CoordDistance1'
		},
		longitude1: {
			type: Sequelize.DOUBLE,
			allowNull: true,
			field: 'Longitude1'
		},
		latitude1: {
			type: Sequelize.DOUBLE,
			allowNull: true,
			field: 'Latitude1'
		},
		easting1: {
			type: Sequelize.DOUBLE,
			allowNull: true,
			field: 'Easting1'
		},
		northing1: {
			type: Sequelize.DOUBLE,
			allowNull: true,
			field: 'Northing1'
		},
		coordLabel2: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'CoordLabel2'
		},
		coordDistance2: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'CoordDistance2'
		},
		longitude2: {
			type: Sequelize.DOUBLE,
			allowNull: true,
			field: 'Longitude2'
		},
		latitude2: {
			type: Sequelize.DOUBLE,
			allowNull: true,
			field: 'Latitude2'
		},
		easting2: {
			type: Sequelize.DOUBLE,
			allowNull: true,
			field: 'Easting2'
		},
		northing2: {
			type: Sequelize.DOUBLE,
			allowNull: true,
			field: 'Northing2'
		},
		coordLabel3: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'CoordLabel3'
		},
		coordDistance3: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'CoordDistance3'
		},
		longitude3: {
			type: Sequelize.DOUBLE,
			allowNull: true,
			field: 'Longitude3'
		},
		latitude3: {
			type: Sequelize.DOUBLE,
			allowNull: true,
			field: 'Latitude3'
		},
		easting3: {
			type: Sequelize.DOUBLE,
			allowNull: true,
			field: 'Easting3'
		},
		northing3: {
			type: Sequelize.DOUBLE,
			allowNull: true,
			field: 'Northing3'
		},
		primaryKey: {
			type: Sequelize.TEXT,
			allowNull: true,
			primaryKey:true,
			field: 'PrimaryKey'
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
		tableName: 'tblPlots',
		createdAt: false,
		updatedAt:false,
	});

	module.exports = plots
