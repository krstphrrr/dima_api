const Species = require('../models/tblSpecies')
const JSONStream = require('JSONStream')
const QueryStream = require('pg-query-stream')
const {Pool} = require('pg')
const pool = new Pool({
  connectionString:process.env.DIMA
})

exports.getSpecies = (req, res, next) =>{
  
  // SEQUELIZE CONTROLLER
  // Species.findAll({
  //   where:req.query,

  // })
  // .then( r => {
  //   res.status(200).json(r)
  // })
  // .catch(err=>{console.log(err)})


  let sql = `
  SELECT * 
  FROM public."tblSpecies"

`
let values = []
let head = "WHERE "
if (Object.keys(req.query).length!==0){
let list = []
let count = 1

for(const [key,value] of Object.entries(req.query)){
  console.log(key,value)
  if(Array.isArray(value)){
    
    for (i = 0; i<value.length; i++){
        temp = `"tblSpecies"."${key}" = $${count}`
        count+=1
        values.push(value[i])
        list.push(temp)
    }
  } else {

      temp = `"tblSpecies"."${key}" = $${count}`
      count+=1
      values.push(value)
      list.push(temp)    
    
  }
  
}

sql = sql + head + list.join(" AND ")
console.log(sql)


}
pool.connect((err,client, release)=>{
if(err){
  return console.error("error ")
}
if (Object.keys(req.query).length!==0){

  const query = new QueryStream(sql, values)
  const stream = client.query(query)
  stream.on('end',release)
  stream.pipe(JSONStream.stringify()).pipe(res)
} else{
  const query = new QueryStream(sql)
  const stream = client.query(query)

  stream.on('end',release)
  stream.pipe(JSONStream.stringify()).pipe(res)
}
})
}

