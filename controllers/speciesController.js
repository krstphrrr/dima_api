const Species = require('../models/tblSpecies')

exports.getSpecies = (req, res, next) =>{
  Species.findAll({
    where:req.query,

  })
  .then( r => {
    res.status(200).json(r)
  })
  .catch(err=>{console.log(err)})
}

exports.getSpeciesParam = (req, res, next) =>{
  let whichPARAM = req.query
  Species.findAll({
    where: whichPARAM,
    limit:1
  })
  .then( r => {
    res.status(200).json(r)
  })
  .catch(err=>{console.log(err)})
}