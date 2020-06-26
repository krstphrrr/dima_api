if(process.env.NODE_ENV!=='production'){
  require('dotenv').config()
}

const express = require('express')
const app = express()
const db = require('./config/database')
// const cors = require('cors')

//route 
const dimaRoute = require('./routes/dimaTableGet')

app.use((req, res, next)=>{
  res.setHeader('Access-Control-Allow-Origin','http://localhost:4200','https://landscapedatacommons.org', 'https://test.landscapedatacommons.org')
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, DELETE, PUT, PATCH')
  res.setHeader('Access-Control-Allow-Headers','Content-Type, Authorization')
  res.setHeader('Access-Control-Allow-Credentials', true)
  res.setHeader('set-cookie',[
    'same-site-cookie=bar; SameSite=None; Secure'
  ])
  next()
})


db.authenticate()
    .then(() => console.log('database connected...'))
    .catch(err => console.log('error:'+ err));


app.get('/', (req, res) => 
  res.send('dima api up')
)
app.use('/api', dimaRoute)
db
  .sync({logging:false})
  .catch(err=>{
    console.log(err)
  })
  .then(result=>{
    const server = app.listen(process.env.PORT || 5005)
  })