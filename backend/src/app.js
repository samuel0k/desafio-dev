const express = require('express')


// Create a app usng classes
class AppContoller {
    constructor(){
        this.express = express()

        this.middlewares()
        this.routes()
    }
    middlewares(){
        this.express.use(express.json())
    }
    routes(){
        this.express.use(require('../src/routes'))
    }
}

module.exports = new AppContoller().express