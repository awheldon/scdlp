const Project = require('../models/project')

async function projectsIndex(req, res) {
  try {
    const projects = await Project.find()
    res.status(200).json(projects)
  } catch (err) {
    res.status(404).json(err)
  }
}

async function projectShow(req, res) {
  const projectId = req.params.id
  try {
    const project = await Project.findById(projectId)
    if (!project) throw new Error()
    res.status(200).json(project)
  } catch (err) {
    res.status(404).json({ 'message': 'That project is not found ' })
  }
}

async function projectCreate(req, res) {
  try {
    const createdProject = await Project.create(req.body)
    res.status(201).json(createdProject)
  } catch (err) {
    res.status(422).json(err)
  }
}

module.exports = {
  index: projectsIndex,
  show: projectShow,
  create: projectCreate
}