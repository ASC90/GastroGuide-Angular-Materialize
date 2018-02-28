var express = require('express')
  , router = express.Router()
  , multer = require('multer')

var uploading = multer({
  dest: __dirname + '../GastroGuide/src/assets/',
})

router.post('/upload', uploading, function(req, res) {

})

module.exports = router