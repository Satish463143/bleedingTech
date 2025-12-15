const router = require('express').Router()
const loginCheck = require('../../middleware/auth.middleware')
const hasPermission = require('../../middleware/rbac.middleware')
const packageController = require('./package.controller')
const {bodyvalidator} = require('../../middleware/validator.middleware')
const packageDTO = require('./package.request')
const { setPath, uplaodFile, persistAllToS3 } = require('../../middleware/aws.middleware')
const { FileFilterType } = require('../../config/constant.config')

router.route('/')
    .post(loginCheck, hasPermission("admin"),bodyvalidator(serviceDTO),setPath("service"), uplaodFile(FileFilterType.IMAGE).single("icon"),persistAllToS3, serviceController.createService)
    .get(serviceController.index)

router.route('/:id')
    .get(loginCheck, hasPermission("admin"),serviceController.showById)
    .put(loginCheck, hasPermission("admin"),bodyvalidator(serviceDTO),setPath("service"), uplaodFile(FileFilterType.IMAGE).single("icon"),persistAllToS3, serviceController.updateService)
    .delete(loginCheck, hasPermission("admin"),serviceController.deleteService)


module.exports = router