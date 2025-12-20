const router = require('express').Router()
const loginCheck = require('../../middleware/auth.middleware')
const hasPermission = require('../../middleware/rbac.middleware')
const projectController = require('./project.controller')
const {bodyvalidator} = require('../../middleware/validator.middleware')
const projectDTO = require('./project.request')
const { setPath, uplaodFile, persistAllToS3 } = require('../../middleware/aws.middleware')
const { FileFilterType } = require('../../config/constant.config')

router.route('/')
    .post(loginCheck, hasPermission("admin"),setPath("project"), uplaodFile(FileFilterType.IMAGE).fields([
        { name: 'image', maxCount: 1 }
    ])
    ,persistAllToS3,bodyvalidator(projectDTO), projectController.createProject)
    .get(projectController.index)

router.route('/:id')
    .get(loginCheck, hasPermission("admin"),projectController.showById)
    .put(loginCheck, hasPermission("admin"),setPath("project"), uplaodFile(FileFilterType.IMAGE).
    fields([
        { name: 'image', maxCount: 1 }
    ])
    ,persistAllToS3,bodyvalidator(projectDTO), projectController.updateProject)
    .delete(loginCheck, hasPermission("admin"),projectController.deleteProject)


module.exports = router