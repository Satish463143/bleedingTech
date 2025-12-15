const router = require('express').Router()
const loginCheck = require('../../middleware/auth.middleware')
const hasPermission = require('../../middleware/rbac.middleware')
const projectController = require('./project.controller')
const {bodyvalidator} = require('../../middleware/validator.middleware')
const projectDTO = require('./project.request')
const { setPath, uplaodFile, persistAllToS3 } = require('../../middleware/aws.middleware')
const { FileFilterType } = require('../../config/constant.config')

router.route('/')
    .post(loginCheck, hasPermission("admin"),bodyvalidator(projectDTO),setPath("project"), uplaodFile(FileFilterType.IMAGE).single("image"),persistAllToS3, projectController.createProject)
    .get(projectController.index)

router.route('/:id')
    .get(loginCheck, hasPermission("admin"),projectController.showById)
    .put(loginCheck, hasPermission("admin"),bodyvalidator(projectDTO),setPath("project"), uplaodFile(FileFilterType.IMAGE).single("image"),persistAllToS3, projectController.updateProject)
    .delete(loginCheck, hasPermission("admin"),projectController.deleteProject)


module.exports = router