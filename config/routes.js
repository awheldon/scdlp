const router = require('express').Router()
const projects = require('../controllers/projects')

router.route('/projects')
  .get(projects.index)
  .post(projects.create)

router.route('/projects/:id')
  .get(projects.show)

module.exports = router