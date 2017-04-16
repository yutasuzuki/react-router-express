import express from 'express'

const router = express.Router()

router.use('/', function(req, res) {
  res.json({valid: 'valid'})
})


export default router
