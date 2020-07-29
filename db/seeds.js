const mongoose = require('mongoose')
const { dbURI } = require('../config/environment')
const Project = require('../models/project')
const projectsData = require('./data/projects')

mongoose.connect(
  dbURI,
  { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true },
  async (err, db) => {
    if (err) return console.log(err)
    try {
      await db.dropDatabase()
      const projects = await Project.create(projectsData)
      console.log(`${'X '.repeat(projects.length)} projects created `)
      await mongoose.connection.close()
      console.log('Goodbye 👋')
    } catch (err) {
      console.log(err)
    }
  })