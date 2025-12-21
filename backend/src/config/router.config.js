const router = require('express').Router();
const contactRouter = require('../modules/contact/contact.router')
const projectRouter = require('../modules/projects/project.router')
const serviceRouter = require('../modules/services/service.router')
const blogsRouter = require('../modules/blogs/blogs.router')
const teamRouter = require('../modules/team/team.router')
const caseStudiesRouter = require('../modules/caseStudies/caseStudies.router')
const authRouter = require('../modules/auth/auth.router')
const testimonialRouter = require('../modules/testimonal/testimonal.router')


router.use('/contact', contactRouter)
router.use('/project', projectRouter)
router.use('/service', serviceRouter)
router.use('/blogs', blogsRouter)
router.use('/teams', teamRouter)
router.use('/caseStudies', caseStudiesRouter)
router.use('/auth', authRouter)
router.use('/testimonial', testimonialRouter)


module.exports = router;