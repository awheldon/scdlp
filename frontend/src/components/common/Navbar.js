import React from 'react'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-start">
        <a href="www.google.com" value="link" className="navbar-item">
          Studio
      </a>
        <a href="www.google.com" value="link" className="navbar-item">
          Ideas
      </a>
      </div>
      <div className="navbar-item brand">
        <a href="www.google.com" value="link" className="navbar-item logo">
          SKENE CATLING DE LA PEÑA
      </a>
      </div>
        <div className="navbar-end">
          <a href="www.google.com" value="link" className="navbar-item">
            Collaboration
      </a>
        </div>
    </nav>
  )
}

export default Navbar