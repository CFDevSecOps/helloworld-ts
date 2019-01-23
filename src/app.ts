import * as express from 'express'

class App {
    public express

    constructor () {
        this.express = express()
        this.mountRoutes()
    }

    private mountRoutes(): void {
        const router = express.Router()
        router.get('/', (req, res) => {
            console.log('Hello world received a request.');
            res.set('Content-Type', 'text/plain');
            res.set('Cache-Control', 'no-cache, no-store');
            const target = process.env.TARGET || 'World';
            res.send(`Hello ${target}\n`);            
        })
        this.express.use('/', router)
    }
}

export default new App().express