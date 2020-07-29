const mongoose = require('mongoose')

const headerImagesSchema = new mongoose.Schema({
  imageLocation: { type: String, required: true }
})

const imageSchema = new mongoose.Schema({
  imageLocation: { type: String, required: true }
})

const projectSchema = new mongoose.Schema({
  projectId: { type: String, required: true, trim: true },
  projectTitle: { type: String, required: true },
  indexImage: { type: String, required: true },
  bodyCopy: { type: String, required: true },
  detailsCopy: { type: String, required: true },
  headerImages: [headerImagesSchema],
  images: [imageSchema]
})

module.exports = mongoose.model('Project', projectSchema)