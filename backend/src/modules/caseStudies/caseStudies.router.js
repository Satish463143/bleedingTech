const router = require('express').Router()
const loginCheck = require('../../middleware/auth.middleware')
const hasPermission = require('../../middleware/rbac.middleware')
const caseStudiesController = require('./caseStudies.controller')
const {bodyvalidator} = require('../../middleware/validator.middleware')
const caseStudiesDTO = require('./caseStudies.request')
const { setPath, uplaodFile, persistAllToS3 } = require('../../middleware/aws.middleware')
const { FileFilterType } = require('../../config/constant.config')

router.route('/')
    .post(loginCheck, hasPermission("admin"),setPath("caseStudies"), uplaodFile(FileFilterType.IMAGE).fields([
        { name: 'image', maxCount: 1 },
        { name: 'heroImage', maxCount: 1 },
        { name: 'logo', maxCount: 1},
        { name: 'testimonialAvatar', maxCount: 1}
    ]),persistAllToS3,bodyvalidator(caseStudiesDTO), caseStudiesController.createCaseStudies)
    .get(caseStudiesController.index)

router.route('/:id')
    .get(caseStudiesController.showById)
    .put(loginCheck, hasPermission("admin"),setPath("caseStudies"), uplaodFile(FileFilterType.IMAGE).fields([
        { name: 'image', maxCount: 1 },
        { name: 'heroImage', maxCount: 1 },
        { name: 'logo', maxCount: 1},
        { name: 'testimonialAvatar', maxCount: 1}
    ]),persistAllToS3,bodyvalidator(caseStudiesDTO), caseStudiesController.updateCaseStudies)
    .delete(loginCheck, hasPermission("admin"),caseStudiesController.deleteCaseStudies)

module.exports = router