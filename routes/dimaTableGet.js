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
 *    tblHorizontalFlux:
 *      type: "object"
 *      properties:
 *        RecKey:
 *          type: "string"
 *    tblLines:
 *      type: "object"
 *      properties:
 *        RecKey:
 *          type: "string"
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