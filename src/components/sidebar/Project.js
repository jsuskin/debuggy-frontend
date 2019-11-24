import React from 'react';

function Project(props) {
  const { project, currentProject, handleProjectSelect } = props;
  return (
    <li
      className={`sidebar-project-li ${currentProject === project ? 'selected-project' : ''}`}
      onClick={() => handleProjectSelect(project)}
    >
      {project.title}
    </li>
  )
}

export default Project;
