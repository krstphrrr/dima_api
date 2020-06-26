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


// get gapdetails 
router.get('/gapdetails', gapdetController.getGapDet)
// router.get('/gapdetails/:primarykey', gapdetController.getGapDetPK)

// get gapheader
router.get('/gapheader', gapheaderController.getGapHeader)
// router.get('/gapheader/:primarykey', gapheaderController.getGapHeaderPK)

// get horizontalflux
router.get('/horizontalflux', horfluxController.getHorFlux)
// router.get('/horizontalflux/:primarykey', horfluxController.getHorFluxPK)

// GET /lines
router.get('/lines', linesController.getLines)
// router.get('/lines/:primarykey', linesController.getLinesPK)

// get lpi details 
router.get('/lpidetails', lpidetController.getLPIDet)
// router.get('/lpidetails/:primarykey', lpidetController.getLPIDetPK)

// get lpi header
router.get('/lpiheader', lpiheaderController.getLPIHeader)
// router.get('/lpiheader/:primarykey', lpiheaderController.getLPIHeaderPK)

// get plots
router.get('/plots', plotsController.getPlots)
// router.get('/plots/:primarykey', plotsController.getPlotsPK)

// get sites
router.get('/sites', sitesController.getSites)
// router.get('/sites/:param', sitesController.getSitesSK)

// get species
router.get('/species', speciesController.getSpecies)

// get speciesgeneric 
router.get('/speciesgeneric', speciesGenController.getSpecGen)


module.exports = router