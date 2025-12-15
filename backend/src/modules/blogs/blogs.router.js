const router = require('express').Router()
const loginCheck = require('../../middleware/auth.middleware')
const hasPermission = require('../../middleware/rbac.middleware')
const blogsController = require('./blogs.controller')
const {bodyvalidator} = require('../../middleware/validator.middleware')
const blogsDTO = require('./blogs.request')
const { setPath, uplaodFile, persistAllToS3 } = require('../../middleware/aws.middleware')
const { FileFilterType } = require('../../config/constant.config')

router.route('/')
    .post(loginCheck, hasPermission("admin"),bodyvalidator(blogsDTO),setPath("blogs"), uplaodFile(FileFilterType.IMAGE).fields([
        { name: 'thumbnail', maxCount: 1 },
        { name: 'heroImage', maxCount: 1 }
    ]),persistAllToS3, blogsController.createBlogs)
    .get(blogsController.index)

router.route('/:id')
    .get(loginCheck, hasPermission("admin"),blogsController.showById)
    .put(loginCheck, hasPermission("admin"),bodyvalidator(blogsDTO),setPath("blogs"), uplaodFile(FileFilterType.IMAGE).fields([
        { name: 'thumbnail', maxCount: 1 },
        { name: 'heroImage', maxCount: 1 }
    ]),persistAllToS3, blogsController.updateBlogs)
    .delete(loginCheck, hasPermission("admin"),blogsController.deleteBlogs)

router.route('/:id/like')
    .post(blogsController.likeBlogs)

router.route('/:id/view')
    .post(blogsController.viewBlogs)

module.exports = router