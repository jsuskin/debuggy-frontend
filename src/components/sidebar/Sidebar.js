import React, { Component } from 'react';
import Project from './Project';
import './Sidebar.css';

class Sidebar extends Component {

  render() {
    const { projects, currentProject, handleProjectSelect } = this.props;
    return (
      <aside className="sidebar">
        <div className="projects-list-container">
          <header className="sidebar-projects-header">PROJECTS</header>
          <hr />
          <ul className="projects-list">
            {projects.length ? projects.map((project, idx) => (
              <Project
                key={idx}
                project={project}
                currentProject={currentProject}
                handleProjectSelect={handleProjectSelect}
              />
            )) : null}
          </ul>
        </div>
      </aside>
    );
  }

}

export default Sidebar;
