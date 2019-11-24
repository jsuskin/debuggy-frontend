import React, { Component } from 'react';
import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';
import Content from './components/content/Content';
import './App.css';

class App extends Component {
  state = {
    projects: [],
    currentProject: null,
    theme: 'light-theme'
  }

  componentDidMount() {
    fetch(`http://localhost:3000/projects`)
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

  handleSubmit = e => {
    e.preventDefault();
    console.log('submitting issue');
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
