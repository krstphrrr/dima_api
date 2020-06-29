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
 * /api/gapdetails:
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
 */

// get gapdetails 
router.get('/gapdetails', gapdetController.getGapDet)
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
 */


// get gapheader
router.get('/gapheader', gapheaderController.getGapHeader)
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
 */



// get horizontalflux
router.get('/horizontalflux', horfluxController.getHorFlux)
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
 */


// GET /lines
router.get('/lines', linesController.getLines)
// router.get('/lines/:primarykey', linesController.getLinesPK)

/**
 * @swagger 
 * /api/lpidetails:
 *  get:
 *    tags:
 *      - LPI Details
 *    name: LPI Details
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
 */


// get lpi details 
router.get('/lpidetails', lpidetController.getLPIDet)
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
 */


// get lpi header
router.get('/lpiheader', lpiheaderController.getLPIHeader)
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
 */

// get plots
router.get('/plots', plotsController.getPlots)
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
 */


// get sites
router.get('/sites', sitesController.getSites)
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
 */



// get species
router.get('/species', speciesController.getSpecies)

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
 */


// get speciesgeneric 
router.get('/speciesgeneric', speciesGenController.getSpecGen)


module.exports = router