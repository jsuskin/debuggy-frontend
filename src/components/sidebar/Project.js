import React from 'react';

function Project(props) {
  const { project, idx, handleProjectSelect } = props;
  return (
    <li
      key={idx}
      className="sidebar-project-li"
      onClick={() => handleProjectSelect(project)}
    >
      {project.title}
    </li>
  )
}

export default Project;
