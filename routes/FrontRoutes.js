const app = require("express")
const router = app.Router()

const controller = require('../controllers/FrontController')

router.get('/:name', controller.index)

module.exports = router