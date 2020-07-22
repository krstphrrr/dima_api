const gapDet = require('../models/tblGapDetail')


exports.getGapDet = (req, res, next) =>{
 
  
  gapDet.findAll({
    where:req.query,
    // limit:50
    
  })
  .then( r => {
    res.status(200).json(r)
  })
  .catch(err=>{console.log(err)})
}

