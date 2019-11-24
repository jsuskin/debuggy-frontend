import React, { Component } from 'react';
import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';
import Content from './components/content/Content';
import * as data from './data/constants'
import './App.css';

class App extends Component {
  state = {
    projects: data.projects,
    currentProject: data.projects[0],
    theme: 'light-theme'
  }

  handleThemeChange = () => {
    this.setState({
      theme: this.state.theme === 'light-theme' ? 'dark-theme' : 'light-theme'
    })
  }

  handleProjectSelect = project => {
    this.setState({ currentProject: project })
  }

  render() {
    const { projects, currentProject, theme } = this.state;

    return (
      <div className={`app ${this.state.theme}`}>
        <Header
          handleThemeChange={this.handleThemeChange}
          theme={theme}
        />
        <Sidebar
          projects={projects}
          handleProjectSelect={this.handleProjectSelect}
        />
        <Content
          projects={projects}
          currentProject={currentProject}
        />
      </div>
    );
  }
}

export default App;
