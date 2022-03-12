const app = require("express")
const router = app.Router()
const bodyParser = require('body-parser')
const csurf = require('csurf')
const csrfProtection = csurf({ cookie: true })

var parseForm = bodyParser.urlencoded({ extended: false })

const controller = require('../controllers/FrontController')

router.get('/', csrfProtection, controller.index)
router.post('/', parseForm, csrfProtection, controller.form_post)

module.exports = router