// Wk1 Task 3 assignment //
const express = require('express');
const bodyParser = require('body-parser');

const partnerRouter = express.Router();
partnerRouter.use(bodyParser.json());

partnerRouter.route('/')
.all((req, res, next) => {
    res.status = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})

.get((req, res) => {
    res.end('Will send all partners to you')
})

.post( (req, res) => {
    res.statusCode = 403;
    res.end(`Will add the partner: ${req.body.name} with description: ${req.body.description}`);
})

.put( (req, res) => {
    res.statusCode= 403;
    res.end('PUT operation not supported for /partners')
})

.delete( (req, res) => {
    res.end('Deleting all partners')
});


partnerRouter.route('/:partnerId')
.all((req, res, next) => {
    res.status = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})

.get((req, res) => {
    res.end(`Will send info for partner ${req.params.partnerId} to you`)
})

.post( (req, res) => {
    res.statusCode = 403;
    res.end(`POST operation not supported on /partners/${req.params.partnerId}`);
})

.put( (req, res) => {
    res.write(`Updating the partner: ${req.params.partnerId}\n`)
    res.end(`Will update the partner: ${req.body.name}
           with description: ${req.body.description}`);
})

.delete( (req, res) => {
    res.end(`Deleting the partner ${req.params.partnerId}`)
});

module.exports = partnerRouter;
