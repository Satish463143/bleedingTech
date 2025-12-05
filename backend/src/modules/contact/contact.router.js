const loginCheck = require('../../middleware/auth.middleware')
const hasPermission = require('../../middleware/rbac.middleware')
const { bodyvalidator } = require('../../middleware/validator.middleware')
const contactController = require('./contact.controller')
const contactDTO = require('./cotact.request')

const router = require('express').Router()

router.post('/', bodyvalidator(contactDTO), contactController.sendInquiry)

router.get('/', loginCheck, hasPermission("admin"), contactController.getAllInquiries)

module.exports = router