import React, { Component } from 'react';
import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';
import Content from './components/content/Content';
import './App.css';

const url = "http://localhost:3000";

class App extends Component {
  state = {
    projects: [],
    currentProject: null,
    theme: 'light-theme'
  }

  componentDidMount() {
    fetch(`${url}/projects`)
      .then(res => res.json())
      .then(projects => this.setState({
        projects: projects,
        currentProject: projects[0]
      }))
  }

  handleThemeChange = () => {
    this.setState({
      theme: this.state.theme === 'light-theme' ? 'dark-theme' : 'light-theme'
    })
  }

  handleProjectSelect = project => {
    this.setState({ currentProject: project })
  }

  handleDeleteIssue = () => {
    console.log('deleting issue')
  }

  handleSubmit = (e, data) => {
    e.preventDefault();
    const selectedProject = this.state.projects.find(project => project.title === data.selectedProject);
    if(!selectedProject) {
      
    }
    fetch(`${url}/issues`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        "project_id": selectedProject.id,
        "expected_output": data.expectedOutput,
        "actual_output": data.actualOutput,
        "status": "Open"
      })
    }).then(res => res.json()).then(issue => {
      this.setState({
        projects: [
          ...this.state.projects,
          this.state.projects.find(project => project.id === issue.project_id).issues.push(issue)
        ]
      })
    })
  }

  render() {
    const { projects, currentProject, theme } = this.state;

    return (
      <div className={`app ${this.state.theme}`}>
        <Header
          theme={theme}
          handleThemeChange={this.handleThemeChange}
        />
        <Sidebar
          projects={projects}
          handleProjectSelect={this.handleProjectSelect}
          currentProject={currentProject}
        />
        <Content
          projects={projects}
          currentProject={currentProject}
          handleSubmit={this.handleSubmit}
        />
      </div>
    );
  }
}

export default App;
