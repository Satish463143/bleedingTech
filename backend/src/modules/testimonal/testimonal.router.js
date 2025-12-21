const router = require('express').Router()
const loginCheck = require('../../middleware/auth.middleware')
const hasPermission = require('../../middleware/rbac.middleware')
const testimonialController = require('./testimonal.controller')
const {bodyvalidator} = require('../../middleware/validator.middleware')
const testimonialDTO = require('./testimonal.request')
const { setPath, uplaodFile, persistAllToS3 } = require('../../middleware/aws.middleware')
const { FileFilterType } = require('../../config/constant.config')

router.route('/')
    .post(loginCheck, hasPermission("admin"),setPath("testimonial"), uplaodFile(FileFilterType.IMAGE).fields([{name: "image", maxCount: 1}]),persistAllToS3,bodyvalidator(testimonialDTO), testimonialController.createTestimonal)
    .get(testimonialController.index)

router.route('/:id')
    .get(loginCheck, hasPermission("admin"),testimonialController.showById)
    .put(loginCheck, hasPermission("admin"),setPath("testimonial"), uplaodFile(FileFilterType.IMAGE).fields([{name: "image", maxCount: 1}]),persistAllToS3,bodyvalidator(testimonialDTO), testimonialController.updateTestimonial)
    .delete(loginCheck, hasPermission("admin"),testimonialController.deleteTestimonial)


module.exports = router