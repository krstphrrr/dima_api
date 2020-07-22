const gapHeader = require('../models/tblGapHeader')

exports.getGapHeader = (req, res, next) =>{
  gapHeader.findAll({
    where:req.query
  })
  .then( r => {
    res.status(200).json(r)
  })
  .catch(err=>{console.log(err)})
}
