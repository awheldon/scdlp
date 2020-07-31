import React from 'react'

import Navbar from './components/common/Navbar'
import ProjectsIndex from './components/projects/ProjectsIndex'

class App extends React.Component {

  render() {
    return(
      <>
        <Navbar />
        <ProjectsIndex />
      </>
    )
  }
}

export default App
