import React from 'react'

const ProjectCard = ({ projectTitle, indexImage }) => (
  <div className="column is-one-third-desktop">
      <div className="card-image">
          <img className="gradientapply" src={indexImage} alt={projectTitle} loading="lazy" width="438" height="504" />
          <div className="is-overlay"><br /><br /><br /><br /><br /><br /><br /><br />{projectTitle}</div>
      </div>
  </div>
)

export default ProjectCard