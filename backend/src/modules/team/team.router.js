const router = require('express').Router()
const loginCheck = require('../../middleware/auth.middleware')
const hasPermission = require('../../middleware/rbac.middleware')
const teamController = require('./team.controller')
const bodyvalidator = require('../../middleware/bodyvalidator.middleware')
const teamDTO = require('./team.request')
const { setPath, uplaodFile, persistAllToS3 } = require('../../middleware/aws.middleware')
const { FileFilterType } = require('../../config/constant.config')

router.route('/')
    .post(loginCheck, hasPermission("admin"),bodyvalidator(teamDTO),setPath("team"), uplaodFile(FileFilterType.IMAGE).single("image"),persistAllToS3, teamController.createTeam)
    .get(teamController.index)

router.route('/:id')
    .get(loginCheck, hasPermission("admin"),teamController.showById)
    .put(loginCheck, hasPermission("admin"),bodyvalidator(teamDTO),setPath("team"), uplaodFile(FileFilterType.IMAGE).single("image"),persistAllToS3, teamController.updateTeam)
    .delete(loginCheck, hasPermission("admin"),teamController.deleteTeam)


module.exports = router