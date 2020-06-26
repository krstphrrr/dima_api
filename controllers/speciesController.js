const Species = require('../models/tblSpecies')

exports.getSpecies = (req, res, next) =>{
  Species.findAll()
  .then( r => {
    res.status(200).json(r)
  })
  .catch(err=>{console.log(err)})
}

exports.getSpeciesParam = (req, res, next) =>{
  let whichPARAM = req.query
  Species.findAll({
    where: whichPARAM
  })
  .then( r => {
    res.status(200).json(r)
  })
  .catch(err=>{console.log(err)})
}