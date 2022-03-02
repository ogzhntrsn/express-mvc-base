const User = require('../models/user')
const connection = require('../db')

module.exports = {
    index: async (req,res) => {
        const users = await User.findAll()

        const name = req.params.name


        res.render('./front/home.ejs', {
            users: users,
            name: name
        })
    }
}