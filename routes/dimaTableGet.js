const express = require('express')
const linesController = require('../controllers/linesController')
const gapdetController = require('../controllers/gapdetController')
const gapheaderController = require('../controllers/gapheaderController')
const horfluxController = require('../controllers/horizontalController')
const lpidetController = require('../controllers/lpidetController')
const lpiheaderController = require('../controllers/lpiheaderController')
const plotsController = require('../controllers/plotsController')
const sitesController = require('../controllers/sitesController')
const speciesController = require('../controllers/speciesController')
const speciesGenController = require('../controllers/speciesgenericController')

const router = express.Router()


/**
 * @swagger 
 * /api/gapdetail:
 *  get:
 *    tags:
 *      - GapDetail
 *    name: GapDetail
 *    produces:
 *      - application/json
 *    consumes:
 *      - application/json
 *    parameters:
 *      - in : query
 *        name: PrimaryKey
 *        schema:
 *          type: string
 *      - in : query
 *        name: DBKey
 *        schema:
 *          type: string
 *    responses:
 *      '200':
 *        description: A successful response.
 *        schema:
 *          type: "array"
 *          items:
 *            $ref: "#/definitions/tblGapDetail"
 */

// get gapdetails 
router.get('/tblGapDetail', gapdetController.getGapDet)
// router.get('/gapdetails/:primarykey', gapdetController.getGapDetPK)

/**
 * @swagger 
 * /api/gapheader:
 *  get:
 *    tags:
 *      - GapHeader
 *    name: GapHeader
 *    produces:
 *      - application/json
 *    parameters:
 *      - in : query
 *        name: PrimaryKey
 *        schema:
 *          type: string
 *      - in : query
 *        name: DBKey
 *        schema:
 *          type: string
 *    responses:
 *      '200':
 *        description: A successful response.
 *        schema:
 *          type: "array"
 *          items:
 *            $ref: "#/definitions/tblGapHeader"
 */


// get gapheader
router.get('/tblGapHeader', gapheaderController.getGapHeader)
// router.get('/gapheader/:primarykey', gapheaderController.getGapHeaderPK)


/**
 * @swagger 
 * /api/horizontalflux:
 *  get:
 *    tags:
 *      - HorizontalFlux
 *    name: HorizontalFlux
 *    produces:
 *      - application/json
 *    consumes:
 *      - application/json
 *    parameters:
 *      - in : query
 *        name: PrimaryKey
 *        schema:
 *          type: string
 *      - in : query
 *        name: DBKey
 *        schema:
 *          type: string
 *    responses:
 *      '200':
 *        description: A successful response.
 *        schema:
 *          type: "array"
 *          items:
 *            $ref: "#/definitions/tblHorizontalFlux"
 */



// get horizontalflux
router.get('/tblHorizontalFlux', horfluxController.getHorFlux)
// router.get('/horizontalflux/:primarykey', horfluxController.getHorFluxPK)


/**
 * @swagger 
 * /api/lines:
 *  get:
 *    tags:
 *      - Lines
 *    name: Lines
 *    produces:
 *      - application/json
 *    consumes:
 *      - application/json
 *    parameters:
 *      - in : query
 *        name: PrimaryKey
 *        schema:
 *          type: string
 *      - in : query
 *        name: DBKey
 *        schema:
 *          type: string
 *    responses:
 *      '200':
 *        description: A successful response.
 *        schema:
 *          type: "array"
 *          items:
 *            $ref: "#/definitions/tblLines"
 */


// GET /lines
router.get('/tblLines', linesController.getLines)
// router.get('/lines/:primarykey', linesController.getLinesPK)

/**
 * @swagger 
 * /api/lpidetail:
 *  get:
 *    tags:
 *      - LPI Detail
 *    name: LPI Detail
 *    produces:
 *      - application/json
 *    consumes:
 *      - application/json
 *    parameters:
 *      - in : query
 *        name: PrimaryKey
 *        schema:
 *          type: string
 *      - in : query
 *        name: DBKey
 *        schema:
 *          type: string
 *    responses:
 *      '200':
 *        description: A successful response.
 *        schema:
 *          type: "array"
 *          items:
 *            $ref: "#/definitions/tblLPIDetail"
 */


// get lpi details 
router.get('/tblLPIDetail', lpidetController.getLPIDet)
// router.get('/lpidetails/:primarykey', lpidetController.getLPIDetPK)

/**
 * @swagger 
 * /api/lpiheader:
 *  get:
 *    tags:
 *      - LPI Header
 *    name: LPI Header
 *    produces:
 *      - application/json
 *    consumes:
 *      - application/json
 *    parameters:
 *      - in : query
 *        name: PrimaryKey
 *        schema:
 *          type: string
 *      - in : query
 *        name: DBKey
 *        schema:
 *          type: string
 *    responses:
 *      '200':
 *        description: A successful response.
 *        schema:
 *          type: "array"
 *          items:
 *            $ref: "#/definitions/tblLPIHeader"
 */


// get lpi header
router.get('/tblLPIHeader', lpiheaderController.getLPIHeader)
// router.get('/lpiheader/:primarykey', lpiheaderController.getLPIHeaderPK)

/**
 * @swagger 
 * /api/plots:
 *  get:
 *    tags:
 *      - Plots
 *    name: Plots
 *    produces:
 *      - application/json
 *    consumes:
 *      - application/json
 *    parameters:
 *      - in : query
 *        name: PrimaryKey
 *        schema:
 *          type: string
 *      - in : query
 *        name: DBKey
 *        schema:
 *          type: string
 *    responses:
 *      '200':
 *        description: A successful response.
 *        schema:
 *          type: "array"
 *          items:
 *            $ref: "#/definitions/tblPlots"
 */

// get plots
router.get('/tblPlots', plotsController.getPlots)
// router.get('/plots/:primarykey', plotsController.getPlotsPK)

/**
 * @swagger 
 * /api/sites:
 *  get:
 *    tags:
 *      - Sites
 *    name: Sites
 *    produces:
 *      - application/json
 *    consumes:
 *      - application/json
 *    parameters:
 *      - in : query
 *        name: SiteKey
 *        schema:
 *          type: string
 *      - in : query
 *        name: DBKey
 *        schema:
 *          type: string
 *    responses:
 *      '200':
 *        description: A successful response.
 *        schema:
 *          type: "array"
 *          items:
 *            $ref: "#/definitions/tblSites"
 */


// get sites
router.get('/tblSites', sitesController.getSites)
// router.get('/sites/:param', sitesController.getSitesSK)

/**
 * @swagger 
 * /api/species:
 *  get:
 *    tags:
 *      - Species
 *    name: Species
 *    produces:
 *      - application/json
 *    consumes:
 *      - application/json
 *    parameters:
 *      - in : query
 *        name: DBKey
 *        schema:
 *          type: string
 *    responses:
 *      '200':
 *        description: A successful response.
 *        schema:
 *          type: "array"
 *          items:
 *            $ref: "#/definitions/tblSpecies"
 */



// get species
router.get('/tblSpecies', speciesController.getSpecies)

/**
 * @swagger 
 * /api/speciesgeneric:
 *  get:
 *    tags:
 *      - SpeciesGeneric
 *    name: SpeciesGeneric
 *    produces:
 *      - application/json
 *    consumes:
 *      - application/json
 *    parameters:
 *      - in : query
 *        name: DBKey
 *        schema:
 *          type: string
 *    responses:
 *      '200':
 *        description: A successful response.
 *        schema:
 *          type: "array"
 *          items:
 *            $ref: "#/definitions/tblSpeciesGeneric"
 *definitions:
 *    tblGapDetail:
 *      type: "object"
 *      properties:
 *        RecKey:
 *          type: "string"
 *          maxLength: 50
 *        SeqNo:
 *          type: "integer"
 *          format: int32
 *        RecType:
 *          type: "string"
 *          maxLength: 1
 *          Possible values:
 *            - "C"
 *            - "B"
 *        GapStart:
 *          type: "number"
 *          maxLength: 50
 *        GapEnd:
 *          type: "number"
 *          maxLength: 50
 *        Gap:
 *          type: "number"
 *          maxLength: 50
 *        PrimaryKey:
 *          type: "number"
 *          maxLength: 50
 *        DateLoadedInDB:
 *          type: "string"
 *          format: "date"
 *        DBKey:
 *          type: "string"
 *          maxLength: 50
 *    tblGapHeader:
 *      type: "object"
 *      properties:
 *        LineKey:
 *          type: "string"
 *          maxLength: 20
 *        RecKey:
 *          type: "string"
 *          maxLength: 50
 *        DateModified:
 *          type: "string"
 *          format: "date-time"
 *        FormType:
 *          type: "string"
 *          maxLength: 5
 *        FormDate:
 *          type: "string"
 *          format: "date-time"
 *        Observer:
 *          type: "string"
 *          maxLength: 50
 *        Recorder:
 *          type: "string"
 *          maxLength: 50
 *        DataEntry:
 *          type: "string"
 *          maxLength: 50
 *        DataErrorChecking:
 *          type: "string"
 *          maxLength: 50
 *        Direction:
 *          type: "string"
 *          maxLength: 50
 *        Measure:
 *          type: "string"
 *          format: "byte"
 *        LineLengthAmount:
 *          type: "integer"
 *          format: "int32"
 *        GapMin:
 *          type: "number"
 *        GapData:
 *          type: "string"
 *          maxLength: 5
 *        PerennialsCanopy:
 *          type: "integer"
 *          format: "int32"
 *        AnnualGrassesCanopy:
 *          type: "integer"
 *          format: "int32"
 *        AnnualForbsCanopy:
 *          type: "integer"
 *          format: "int32"
 *        OtherCanopy:
 *          type: "integer"
 *          format: "int32"
 *        sumCanCat1:
 *          type: "number"
 *        sumCanCat2:
 *          type: "number"
 *        sumCanCat3:
 *          type: "number"
 *        sumCanCat4:
 *          type: "number"
 *        pctCanCat1:
 *          type: "number"
 *        pctCanCat2:
 *          type: "number"
 *        pctCanCat3:
 *          type: "number"
 *        pctCanCat4:
 *          type: "number"
 *        sumBasCat1:
 *          type: "number"
 *        sumBasCat2:
 *          type: "number"
 *        sumBasCat3:
 *          type: "number"
 *        sumBasCat4:
 *          type: "number"
 *        pctBasCat1:
 *          type: "number"
 *        pctBasCat2:
 *          type: "number"
 *        pctBasCat3:
 *          type: "number"
 *        pctBasCat4:
 *          type: "number"
 *        Notes:
 *          type: "string"
 *          maxLength: 250
 *        NoCanopyGap:
 *          type: "integer"
 *          format: "int32"
 *        NoBasalGap:
 *          type: "integer"
 *          format: "int32"
 *        PerennialsBasal:
 *          type: "integer"
 *          format: "int32"
 *        AnnualGrassesBasal:
 *          type: "integer"
 *          format: "int32"
 *        AnnualForbsBasal:
 *          type: "integer"
 *          format: "int32"
 *        OtherBasal:
 *          type: "integer"
 *          format: "int32"
 *        PrimaryKey:
 *          type: "string"
 *        DateLoadedInDB:
 *          type: "string"
 *          format: "date-time"
 *        DBKey:
 *          type: "string"
 * 
 *    tblHorizontalFlux:
 *      type: "object"
 *      properties:
 *        BoxID:
 *          type: "string"
 *          maxLength: 50
 *        StackID:
 *          type: "string"
 *          maxLength: 50
 *        Height:
 *          type: "number"
 *        DateEstablished:
 *          type: "string"
 *          format: "date"
 *        DateModified:
 *          type: "string"
 *          format: "date-time"
 *        Description:
 *          type: "string"
 *          maxLength: 50
 *        openingSize:
 *          type: "string"
 *          maxLength: 20
 *        ovenTemp:
 *          type: "integer"
 *        BoxType:
 *          type: "integer"
 *        azimuth:
 *          type: "string"
 *          maxLength: 255
 *        SamplerType:
 *          type: "string"
 *          maxLength: 25
 *        InletArea:
 *          type: "number"
 *        PlotKey:
 *          type: "string"
 *          maxLength: 50
 *        Location:
 *          type: "string"
 *          maxLength: 100
 *        ItemType:
 *          type: "string"
 *          maxLength: 1
 *        trapOpeningArea:
 *          type: "number"
 *        GPSCoordSys:
 *          type: "string"
 *          maxLength: 50
 *        Datum:
 *          type: "string"
 *          maxLength: 50
 *        Zone:
 *          type: "string"
 *          maxLength: 50
 *        Easting:
 *          type: "string"
 *          maxLength: 50
 *        Northing:
 *          type: "string"
 *          maxLength: 50
 *        Longitude:
 *          type: "string"
 *          maxLength: 50
 *        Latitude:
 *          type: "string"
 *          maxLength: 50
 *        RecKey:
 *          type: "string"
 *          maxLength: 255
 *        collectDate:
 *          type: "string"
 *          format: "date"
 *        Collector:
 *          type: "string"
 *          maxLength: 30
 *        labTech:
 *          type: "string"
 *          maxLength: 30
 *        beakerNbr:
 *          type: "string"
 *          maxLength: 20
 *        emptyWeight:
 *          type: "number"
 *        recordedWeight:
 *          type: "number"
 *        sedimentWeight:
 *          type: "number"
 *          maxLength: 1
 *        daysExposed:
 *          type: "integer"
 *          format: "int32"
 *        sedimentGperDay:
 *          type: "number"
 *        sedimentArchived:
 *          type: "string"
 *        Notes:
 *          type: "string"
 *        sedimentGperDayByInlet:
 *          type: "number"
 *        SeqNo:
 *          type: "integer"
 *          maxLength: "int32"
 *        SampleCompromised:
 *          type: "string"
 *        PrimaryKey:
 *          type: "string"
 *          maxLength: 50
 *        DateLoadedInDB:
 *          type: "string"
 *          format: "date"
 *        DBKey:
 *          type: "string"
 *          maxLength: 50
 * 
 *    tblLines:
 *      type: "object"
 *      properties:
 *        PlotKey:
 *          type: "string"
 *          maxLength: 20
 *        LineKey:
 *          type: "string"
 *          maxLength: 20
 *        DateModified:
 *          type: "string"
 *          format: "date"
 *        LineID:
 *          type: "string"
 *          maxLength: 15
 *        Azimuth:
 *          type: "integer"
 *          format: "int32"
 *        ElevationType:
 *          type: "string"
 *        NorthType:
 *          type: "integer"
 *          format: "int32"
 *        NorthingStart:
 *          type: "number"
 *        EastingStart:
 *          type: "number"
 *        ElevationStart:
 *          type: "number"
 *        NorthingEnd:
 *          type: "number"
 *        EastingEnd:
 *          type: "number"
 *        ElevationEnd:
 *          type: "number"
 *        LatitudeStart:
 *          type: "number"
 *        LongitudeStart:
 *          type: "number"
 *        LatitudeEnd:
 *          type: "number"
 *        LongitudeEnd:
 *          type: "number"
 *        PrimaryKey:
 *          type: "string"
 *          maxLength: 50
 *        DateLoadedInDB:
 *          type: "string"
 *          format: "date"
 *        DBKey:
 *          type: "string"
 *          maxLength: 50
 * 
 *    tblLPIDetail:
 *      type: "object"
 *      properties:
 *        RecKey:
 *          type: "string"
 *          maxLength: 50
 *        PointLoc:
 *          type: "number"
 *        PointNbr:
 *          type: "integer"
 *          format: "int32"
 *        Lower1:
 *          type: "string"
 *          maxLength: 50
 *        Lower2:
 *          type: "string"
 *          maxLength: 50
 *        Lower3:
 *          type: "string"
 *          maxLength: 50
 *        Lower4:
 *          type: "string"
 *          maxLength: 50
 *        SoilSurface:
 *          type: "string"
 *          maxLength: 50
 *        HeightTop:
 *          type: "string"
 *          maxLength: 12
 *        ChkboxTop:
 *          type: "number"
 *        ChkboxLower1:
 *          type: "number"
 *        ChkboxLower2:
 *          type: "number"
 *        ChkboxLower3:
 *          type: "number"
 *        ChkboxLower4:
 *          type: "number"
 *        ChkboxSoil:
 *          type: "number"
 *        HeightLower1:
 *          type: "string"
 *          maxLength: 12
 *        HeightLower2:
 *          type: "string"
 *          maxLength: 12
 *        HeightLower3:
 *          type: "string"
 *          maxLength: 12
 *        HeightLower4:
 *          type: "string"
 *          maxLength: 12
 *        HeightSurface:
 *          type: "string"
 *          maxLength: 12
 *        HeightWoody:
 *          type: "string"
 *          maxLength: 12
 *        HeightHerbaceous:
 *          type: "string"
 *          maxLength: 12
 *        ShrubShape:
 *          type: "string"
 *          maxLength: 5
 *        SpeciesWoody:
 *          type: "string"
 *          maxLength: 50
 *        SpeciesHerbaceous:
 *          type: "string"
 *          maxLength: 50
 *        ChkboxWoody:
 *          type: "number"
 *        ChkboxHerbaceous:
 *          type: "number"
 *        Lower5:
 *          type: "string"
 *          maxLength: 50
 *        Lower6:
 *          type: "string"
 *          maxLength: 50
 *        Lower7:
 *          type: "string"
 *          maxLength: 50
 *        ChkboxLower5:
 *          type: "number"
 *        ChkboxLower6:
 *          type: "number"
 *        ChkboxLower7:
 *          type: "number"
 *        HeightLower5:
 *          type: "string"
 *          maxLength: 12
 *        HeightLower6:
 *          type: "string"
 *          maxLength: 12
 *        HeightLower7:
 *          type: "string"
 *          maxLength: 12
 *        SpeciesLowerHerb:
 *          type: "string"
 *          maxLength: 50
 *        HeightLowerHerb:
 *          type: "string"
 *          maxLength: 50
 *        ChkboxLowerHerb:
 *          type: "string"
 *          maxLength: 50
 *        PrimaryKey:
 *          type: "string"
 *          maxLength: 50
 *        DateLoadedInDB:
 *          type: "string"
 *          format: "date"
 *        DBKey:
 *          type: "string"
 *          maxLength: 50
 * 
 *    tblLPIHeader:
 *      type: "object"
 *      properties:
 *        LineKey:
 *          type: "string"
 *          maxLength: 50
 *        RecKey:
 *          type: "string"
 *          maxLength: 50
 *        DateModified:
 *          type: "string"
 *          maxLength: 50
 *        FormType:
 *          type: "string"
 *          maxLength: 50
 *        FormDate:
 *          type: "string"
 *          maxLength: 50
 *        Observer:
 *          type: "string"
 *          maxLength: 50
 *        Recorder:
 *          type: "string"
 *          maxLength: 50
 *        DataEntry:
 *          type: "string"
 *          maxLength: 50
 *        DataErrorChecking:
 *          type: "string"
 *          maxLength: 50
 *        Direction:
 *          type: "string"
 *          maxLength: 50
 *        Measure:
 *          type: "string"
 *          maxLength: 50
 *        LineLengthAmount:
 *          type: "string"
 *          maxLength: 50
 *        SpacingIntervalAmount:
 *          type: "string"
 *          maxLength: 50
 *        SpacingType:
 *          type: "string"
 *          maxLength: 50
 *        HeightOption:
 *          type: "string"
 *          maxLength: 50
 *        HeightUOM:
 *          type: "string"
 *          maxLength: 50
 *        ShowCheckbox:
 *          type: "string"
 *          maxLength: 50
 *        CheckboxLabel:
 *          type: "string"
 *          maxLength: 50
 *        numCanopy:
 *          type: "string"
 *          maxLength: 50
 *        numBare:
 *          type: "string"
 *          maxLength: 50
 *        numBasal:
 *          type: "string"
 *          maxLength: 50
 *        pctCheckedPlants:
 *          type: "string"
 *          maxLength: 50
 *        pctCheckedTopPlants:
 *          type: "string"
 *          maxLength: 50
 *        pctCheckedTopPoints:
 *          type: "string"
 *          maxLength: 50
 *        LayerHeights:
 *          type: "string"
 *          maxLength: 50
 *        WoodyHerbHeights:
 *          type: "string"
 *          maxLength: 50
 *        LowerHerbHeight:
 *          type: "string"
 *          maxLength: 50
 *        pctCheckedSoil:
 *          type: "string"
 *          maxLength: 50
 *        avgHeightTop:
 *          type: "string"
 *          maxLength: 50
 *        Notes:
 *          type: "string"
 *          maxLength: 50
 *        avgHeightLower1:
 *          type: "string"
 *          maxLength: 50
 *        avgHeightLower2:
 *          type: "string"
 *          maxLength: 50
 *        avgHeightLower3:
 *          type: "string"
 *          maxLength: 50
 *        avgHeightLower4:
 *          type: "string"
 *          maxLength: 50
 *        avgHeightSurface:
 *          type: "string"
 *          maxLength: 50
 *        numGrCovTotal:
 *          type: "string"
 *          maxLength: 50
 *        numGrCovBetween:
 *          type: "string"
 *          maxLength: 50
 *        numGrCovUnder:
 *          type: "string"
 *          maxLength: 50
 *        numLitterTotal:
 *          type: "string"
 *          maxLength: 50
 *        numLitterBetween:
 *          type: "string"
 *          maxLength: 50
 *        numLitterUnder:
 *          type: "string"
 *          maxLength: 50
 *        pctGrCovTotal:
 *          type: "string"
 *          maxLength: 50
 *        pctGrCovBetween:
 *          type: "string"
 *          maxLength: 50
 *        pctGrCovUnder:
 *          type: "string"
 *          maxLength: 50
 *        HeightNoneOption:
 *          type: "string"
 *          maxLength: 50
 *        avgHeightWoody:
 *          type: "string"
 *          maxLength: 50
 *        avgHeightHerb:
 *          type: "string"
 *          maxLength: 50
 *        ShowShrubShape:
 *          type: "string"
 *          maxLength: 50
 *        RapidMode:
 *          type: "string"
 *          maxLength: 50
 *        avgHeightLower5:
 *          type: "string"
 *          maxLength: 50
 *        avgHeightLower6:
 *          type: "string"
 *          maxLength: 50
 *        avgHeightLower7:
 *          type: "string"
 *          maxLength: 50
 *        HAF_Other:
 *          type: "string"
 *          maxLength: 50
 *        avgHeightLowerHerb:
 *          type: "string"
 *          maxLength: 50
 *        EveryNth_num:
 *          type: "string"
 *          maxLength: 50
 *        PrimaryKey:
 *          type: "string"
 *          maxLength: 50
 *        DateLoadedInDB:
 *          type: "string"
 *          maxLength: 50
 *        DBKey:
 *          type: "string"
 *          maxLength: 50
 * 
 *    tblPlots:
 *      type: "object"
 *      SiteKey:
 *          type: "string"
 *          maxLength: 50
 *      PlotKey:
 *          type: "string"
 *          maxLength: 50
 *      DateModified:
 *          type: "string"
 *          maxLength: 50
 *      PlotID:
 *          type: "string"
 *          maxLength: 50
 *      genericPlot:
 *          type: "string"
 *          maxLength: 50
 *      EstablishDate:
 *          type: "string"
 *          maxLength: 50
 *      State:
 *          type: "string"
 *          maxLength: 50
 *      County:
 *          type: "string"
 *          maxLength: 50
 *      Directions:
 *          type: "string"
 *          maxLength: 50
 *      AvgPrecip:
 *          type: "string"
 *          maxLength: 50
 *      AvgPrecipUOM:
 *          type: "string"
 *          maxLength: 50
 *      EcolSite:
 *          type: "string"
 *          maxLength: 50
 *      EcolSiteMLRA:
 *          type: "string"
 *          maxLength: 50
 *      EcolSiteSubMLRA:
 *          type: "string"
 *          maxLength: 50
 *      EcolSiteNum:
 *          type: "string"
 *          maxLength: 50
 *      EcolSiteState:
 *          type: "string"
 *          maxLength: 50
 *      Soil:
 *          type: "string"
 *          maxLength: 50
 *      ParentMaterial:
 *          type: "string"
 *          maxLength: 50
 *      Slope:
 *          type: "string"
 *          maxLength: 50
 *      Aspect:
 *          type: "string"
 *          maxLength: 50
 *      ESD_SlopeShape:
 *          type: "string"
 *          maxLength: 50
 *      LandscapeType:
 *          type: "string"
 *          maxLength: 50
 *      LandscapeTypeSecondary:
 *          type: "string"
 *          maxLength: 50
 *      MgtUnit:
 *          type: "string"
 *          maxLength: 50
 *      GPSCoordSys:
 *          type: "string"
 *          maxLength: 50
 *      Datum:
 *          type: "string"
 *          maxLength: 50
 *      Zone:
 *          type: "string"
 *          maxLength: 50
 *      Easting:
 *          type: "string"
 *          maxLength: 50
 *      Northing:
 *          type: "string"
 *          maxLength: 50
 *      Elevation:
 *          type: "string"
 *          maxLength: 50
 *      ElevationType:
 *          type: "string"
 *          maxLength: 50
 *      RecentWeatherPast12:
 *          type: "string"
 *          maxLength: 50
 *      RecentWeatherPrevious12:
 *          type: "string"
 *          maxLength: 50
 *      DisturbWildfire:
 *          type: "string"
 *          maxLength: 50
 *      DisturbRodents:
 *          type: "string"
 *          maxLength: 50
 *      DisturbMammals:
 *          type: "string"
 *          maxLength: 50
 *      DisturbWater:
 *          type: "string"
 *          maxLength: 50
 *      DisturbWind:
 *          type: "string"
 *          maxLength: 50
 *      DisturbWaterSoilDep:
 *          type: "string"
 *          maxLength: 50
 *      DisturbWindSoilDep:
 *          type: "string"
 *          maxLength: 50
 *      DisturbUndgroundUtils:
 *          type: "string"
 *          maxLength: 50
 *      DisturbOverhdTransLines:
 *          type: "string"
 *          maxLength: 50
 *      DisturbOther:
 *          type: "string"
 *          maxLength: 50
 *      DisturbOtherDesc:
 *          type: "string"
 *          maxLength: 50
 *      WildlifeUse:
 *          type: "string"
 *          maxLength: 50
 *      MgtHistory:
 *          type: "string"
 *          maxLength: 50
 *      OffsiteInfluences:
 *          type: "string"
 *          maxLength: 50
 *      Comments:
 *          type: "string"
 *          maxLength: 50
 *      SpeciesList:
 *          type: "string"
 *          maxLength: 50
 *      DensityList:
 *          type: "string"
 *          maxLength: 50
 *      MapUnitComponent:
 *          type: "string"
 *          maxLength: 50
 *      SoilPhase:
 *          type: "string"
 *          maxLength: 50
 *      Unused3:
 *          type: "string"
 *          maxLength: 50
 *      Unused4:
 *          type: "string"
 *          maxLength: 50
 *      ESD_MLRA:
 *          type: "string"
 *          maxLength: 50
 *      ESD_CRA:
 *          type: "string"
 *          maxLength: 50
 *      Unused5:
 *          type: "string"
 *          maxLength: 50
 *      ESD_Region:
 *          type: "string"
 *          maxLength: 50
 *      ESD_Investigators:
 *          type: "string"
 *          maxLength: 50
 *      ESD_Bedrock:
 *          type: "string"
 *          maxLength: 50
 *      Unused6:
 *          type: "string"
 *          maxLength: 50
 *      ESD_MajorLandform:
 *          type: "string"
 *          maxLength: 50
 *      ESD_ComponentLandform:
 *          type: "string"
 *          maxLength: 50
 *      HillslopeType:
 *          type: "string"
 *          maxLength: 50
 *      ESD_GeomorphicComp:
 *          type: "string"
 *          maxLength: 50
 *      ESD_RunIn_RunOff:
 *          type: "string"
 *          maxLength: 50
 *      ESD_SlopeComplexity:
 *          type: "string"
 *          maxLength: 50
 *      Unused7:
 *          type: "string"
 *          maxLength: 50
 *      Unused8:
 *          type: "string"
 *          maxLength: 50
 *      Unused9:
 *          type: "string"
 *          maxLength: 50
 *      Unused10:
 *          type: "string"
 *          maxLength: 50
 *      Unused11:
 *          type: "string"
 *          maxLength: 50
 *      ESD_LitterClass:
 *          type: "string"
 *          maxLength: 50
 *      ESD_BiologicalCrustClass:
 *          type: "string"
 *          maxLength: 50
 *      Unused12:
 *          type: "string"
 *          maxLength: 50
 *      Unused13:
 *          type: "string"
 *          maxLength: 50
 *      Unused14:
 *          type: "string"
 *          maxLength: 50
 *      Unused15:
 *          type: "string"
 *          maxLength: 50
 *      Unused16:
 *          type: "string"
 *          maxLength: 50
 *      Unused17:
 *          type: "string"
 *          maxLength: 50
 *      Unused18:
 *          type: "string"
 *          maxLength: 50
 *      Unused19:
 *          type: "string"
 *          maxLength: 50
 *      Unused20:
 *          type: "string"
 *          maxLength: 50
 *      ESD_Series:
 *          type: "string"
 *          maxLength: 50
 *      ESD_ParticleSizeClass:
 *          type: "string"
 *          maxLength: 50
 *      ESD_Mineralogy:
 *          type: "string"
 *          maxLength: 50
 *      ESD_SoilTempRegime:
 *          type: "string"
 *          maxLength: 50
 *      ESD_DepthClass:
 *          type: "string"
 *          maxLength: 50
 *      ESD_Subgroup:
 *          type: "string"
 *          maxLength: 50
 *      ESD_Greatgroup:
 *          type: "string"
 *          maxLength: 50
 *      ESD_Reaction:
 *          type: "string"
 *          maxLength: 50
 *      ESD_SoilMoistureRegime:
 *          type: "string"
 *          maxLength: 50
 *      ESD_CationExchangeActivityClass:
 *          type: "string"
 *          maxLength: 50
 *      ESD_Epipedon:
 *          type: "string"
 *          maxLength: 50
 *      ESD_Subsurface_features:
 *          type: "string"
 *          maxLength: 50
 *      ESD_Depth_to_root_horizon:
 *          type: "string"
 *          maxLength: 50
 *      ESD_Type_root_horizon:
 *          type: "string"
 *          maxLength: 50
 *      ESD_Horizon_notes:
 *          type: "string"
 *          maxLength: 50
 *      ESD_TrackingID:
 *          type: "string"
 *          maxLength: 50
 *      Unused21:
 *          type: "string"
 *          maxLength: 50
 *      Unused22:
 *          type: "string"
 *          maxLength: 50
 *      EcolSite_Assoc1:
 *          type: "string"
 *          maxLength: 50
 *      EcolSite_Assoc2:
 *          type: "string"
 *          maxLength: 50
 *      EcolSite_Assoc3:
 *          type: "string"
 *          maxLength: 50
 *      EcolSite_Notes:
 *          type: "string"
 *          maxLength: 50
 *      EcolSite_Lookup1:
 *          type: "string"
 *          maxLength: 50
 *      EcolSite_Lookup2:
 *          type: "string"
 *          maxLength: 50
 *      EcolSite_Lookup3:
 *          type: "string"
 *          maxLength: 50
 *      EcolSite_Text1:
 *          type: "string"
 *          maxLength: 50
 *      EcolSite_Text2:
 *          type: "string"
 *          maxLength: 50
 *      EcolSite_Text3:
 *          type: "string"
 *          maxLength: 50
 *      ESD_RecentWeatherPast12:
 *          type: "string"
 *          maxLength: 50
 *      ESD_ErosionPatternClass:
 *          type: "string"
 *          maxLength: 50
 *      Unused23:
 *          type: "string"
 *          maxLength: 50
 *      Unused24:
 *          type: "string"
 *          maxLength: 50
 *      Longitude:
 *          type: "string"
 *          maxLength: 50
 *      Latitude:
 *          type: "string"
 *          maxLength: 50
 *      CoordLabel1:
 *          type: "string"
 *          maxLength: 50
 *      CoordDistance1:
 *          type: "string"
 *          maxLength: 50
 *      Longitude1:
 *          type: "string"
 *          maxLength: 50
 *      Latitude1:
 *          type: "string"
 *          maxLength: 50
 *      Easting1:
 *          type: "string"
 *          maxLength: 50
 *      Northing1:
 *          type: "string"
 *          maxLength: 50
 *      CoordLabel2:
 *          type: "string"
 *          maxLength: 50
 *      CoordDistance2:
 *          type: "string"
 *          maxLength: 50
 *      Longitude2:
 *          type: "string"
 *          maxLength: 50
 *      Latitude2:
 *          type: "string"
 *          maxLength: 50
 *      Easting2:
 *          type: "string"
 *          maxLength: 50
 *      Northing2:
 *          type: "string"
 *          maxLength: 50
 *      CoordLabel3:
 *          type: "string"
 *          maxLength: 50
 *      CoordDistance3:
 *          type: "string"
 *          maxLength: 50
 *      Longitude3:
 *          type: "string"
 *          maxLength: 50
 *      Latitude3:
 *          type: "string"
 *          maxLength: 50
 *      Easting3:
 *          type: "string"
 *          maxLength: 50
 *      Northing3:
 *          type: "string"
 *          maxLength: 50
 *      PrimaryKey:
 *          type: "string"
 *          maxLength: 50
 *      DateLoadedInDB:
 *          type: "string"
 *          maxLength: 50
 *      DBKey:
 *          type: "string"
 *          maxLength: 50
 *      ProjectKey:
 *          type: "string"
 *          maxLength: 50
 * 
 * 
 *    tblSites:
 *      type: "object"
 *      properties:
 *        SiteKey:
 *          type: "string"
 *          maxLength: 50
 *        DateModified:
 *          type: "string"
 *          maxLength: 50
 *        SiteID:
 *          type: "string"
 *          maxLength: 50
 *        SiteName:
 *          type: "string"
 *          maxLength: 50
 *        Ownership:
 *          type: "string"
 *          maxLength: 50
 *        ContactName:
 *          type: "string"
 *          maxLength: 50
 *        MgtObject:
 *          type: "string"
 *          maxLength: 50
 *        MonObject:
 *          type: "string"
 *          maxLength: 50
 *        Notes:
 *          type: "string"
 *          maxLength: 50
 *        uploaded:
 *          type: "string"
 *          maxLength: 50
 *        DateLoadedInDB:
 *          type: "string"
 *          maxLength: 50
 * 
 *    tblSpecies:
 *      type: "object"
 *      properties:
 *        SpeciesCode:
 *          type: "string"
 *          maxLength: 50
 *        ScientificName:
 *          type: "string"
 *          maxLength: 50
 *        CommonName:
 *          type: "string"
 *          maxLength: 50
 *        Family:
 *          type: "string"
 *          maxLength: 50
 *        SortSeq:
 *          type: "string"
 *          maxLength: 50
 *        synonymOf:
 *          type: "string"
 *          maxLength: 50
 *        GrowthHabitCode:
 *          type: "string"
 *          maxLength: 50
 *        Duration:
 *          type: "string"
 *          maxLength: 50
 *        Stabilizing:
 *          type: "string"
 *          maxLength: 50
 *        Invasive:
 *          type: "string"
 *          maxLength: 50
 *        Group:
 *          type: "string"
 *          maxLength: 50
 *        DateLoadedInDB:
 *          type: "string"
 *          maxLength: 50
 *        DBKey:
 *          type: "string"
 *          maxLength: 50
 * 
 *    tblSpeciesGeneric:
 *      type: "object"
 *      properties:
 *        RecKey:
 *          type: "string"
 * 
 */


// get speciesgeneric 
router.get('/tblSpeciesGeneric', speciesGenController.getSpecGen)


module.exports = router