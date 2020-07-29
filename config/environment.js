const port = process.env.PORT || 8000
const dbURI = process.env.MONGODB_URI || 'mongodb://localhost/scdlp'
const secret = process.env.SECRET || 'scdlp' 

module.exports = {
  port,
  dbURI,
  secret
}