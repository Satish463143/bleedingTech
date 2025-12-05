const router = require('express').Router();
const contactRouter = require('../modules/contact/contact.router')

router.use('/contact', contactRouter)

module.exports = router;