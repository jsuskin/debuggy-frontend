import React, { Component } from 'react';
import TopPanel from './top-panel/TopPanel';
import BottomPanel from './bottom-panel/BottomPanel';
import './Content.css';

class Content extends Component {

  render() {
    return (
      <div className="content">
        <TopPanel
          currentProject={this.props.currentProject}
          handleDeleteIssue={this.props.handleDeleteIssue}
        />
        <BottomPanel
          handleAddNewProject={this.props.handleAddNewProject}
          handleAddNewIssue={this.props.handleAddNewIssue}
          projects={this.props.projects}
        />
      </div>
    );
  }
}

export default Content;
