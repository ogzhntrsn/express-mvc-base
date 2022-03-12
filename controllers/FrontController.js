const User = require('../models/user')
const connection = require('../db')
const { Op } = require('sequelize')

module.exports = {
    index: async (req,res) => {
        const users = await User.findAll()
        
        const name = req.query.name


        res.render('./front/home.ejs', {
            csrfToken: req.csrfToken(),
            name: name
        })
    },
    form_post: async (req, res) => {
        

        res.redirect('/?name=' + req.body.name, 301)
    }
}