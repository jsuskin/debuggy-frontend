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
    newProjectId: null,
    theme: 'light-theme'
  }

  fetchProjects = () => {
    fetch(`${url}/projects`)
      .then(res => res.json())
      .then(projects => this.setState({
        projects: projects,
        currentProject: projects[0]
      }))
  }

  componentDidMount() {
    this.fetchProjects();
  }

  handleThemeChange = () => {
    this.setState({
      theme: this.state.theme === 'light-theme' ? 'dark-theme' : 'light-theme'
    })
  }

  handleProjectSelect = project => {
    this.setState({ currentProject: project })
  }

  handleDeleteIssue = (issueId, projectId) => {
    fetch(`${url}/issues/${issueId}`, {
      method: 'DELETE'
    }).then(res => {
      const currentProject = this.state.projects
        .find(project => project.id === projectId);
      console.log(currentProject);
    })

  }

  handleAddNewProject = (e, title) => {
    e.preventDefault();

    fetch(`${url}/projects`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        "title": title
      })
    })
      .then(res => res.json())
      .then(project => {
        this.setState({
          ...this.state,
          projects: [...this.state.projects, project],
          currentProject: project
        })
      })
  }

  handleAddNewIssue = (e, data) => {
    e.preventDefault();

    const { selectedProject, expectedOutput, actualOutput } = data;
    let currentProject = this.state.projects.find(project => project.title === selectedProject);

    if(currentProject && currentProject.id) {
      fetch(`${url}/issues`, {
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify({
          "project_id": currentProject.id,
          "expected_output": expectedOutput,
          "actual_output": actualOutput,
          "status": 'Open'
        })
      })
        .then(res => res.json())
        .then(issue => {
          this.setState({
            ...this.state,
            projects: this.state.projects.map(project => {
              if(project === currentProject) {
                project = {
                  ...project,
                  issues: project.issues ? [...project.issues, issue] : [issue]
                };
                currentProject = project;
              }
              return project;
            }),
            currentProject: currentProject
          })
        })
    } else {
      console.log('please select a project')
    }
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
          handleAddNewProject={this.handleAddNewProject}
          handleAddNewIssue={this.handleAddNewIssue}
          handleDeleteIssue={this.handleDeleteIssue}
        />
      </div>
    );
  }
}

export default App;
