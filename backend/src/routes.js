const routes = require("express").Router()


routes.post('/manage', (req, res) => {
    return res.json({stts: "ok"})
})

routes.get('/dashboard', (req, res) => {
    return res.json({stts: "ok"})
})


// Export all the routes
module.exports = routes