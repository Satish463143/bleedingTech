const loginCheck = require('../../middleware/auth.middleware')
const hasPermission = require('../../middleware/rbac.middleware')
const pageController = require('./page.controller')

const router = require('express').Router()

router.post('/track', pageController.track)
    // FE sends { userId, page, duration, referrer, device }
router.get('/page-views', loginCheck, hasPermission('admin'),pageController.pageViews)
    // Returns total page views per page
router.get('/session-duration', loginCheck, hasPermission('admin'),pageController.sessionDuration)
    // Returns avg session time, max time, etc.
router.get('/top-pages', loginCheck, hasPermission('admin'),pageController.topPages)
    // Returns most visited pages
router.get('/visitors-overview', loginCheck, hasPermission('admin'),pageController.visitorsOverview)
    // Returns total visitors, new vs returning, unique vs returning visitors


module.exports = router