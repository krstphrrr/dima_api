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
 *    tblLPIHeader:
 *      type: "object"
 *      properties:
 *        RecKey:
 *          type: "string"
 *    tblPlots:
 *      type: "object"
 *      properties:
 *        RecKey:
 *          type: "string"
 *    tblSites:
 *      type: "object"
 *      properties:
 *        RecKey:
 *          type: "string"
 *    tblSpecies:
 *      type: "object"
 *      properties:
 *        RecKey:
 *          type: "string"
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