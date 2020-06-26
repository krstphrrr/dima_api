const Plots = require('../models/tblPlots')

exports.getPlots = (req, res, next) =>{
  Plots.findAll()
  .then( r => {
    res.status(200).json(r)
  })
  .catch(err=>{console.log(err)})
}

exports.getPlotsPK= (req, res, next) =>{
  let whichPK = req.query
  Plots.findAll({
    where: whichPK
  })
  .then( r => {
    res.status(200).json(r)
  })
  .catch(err=>{console.log(err)})
}