import React from 'react'

import ProjectCard from './ProjectCard'

class ProjectsIndex extends React.Component {
  state = { projects: [] }

  async componentDidMount() {
    try {
      const res = await fetch('/api/projects')
      const data = await res.json()
      this.setState({ projects: data })
      console.log(data)
    } catch(err) {
      console.log(err)
    }  
  }

  render() {
    return(
        <section className="section">
          <div className="container">
            <div className="columns is-multiline">
              {this.state.projects.map(project => (
                <ProjectCard key={project._id} {...project}/>
              ))}
            </div>
          </div>
        </section>
    )
  }
}

export default ProjectsIndex