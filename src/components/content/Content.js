import React, { Component } from 'react';
import TopPanel from './TopPanel';
import BottomPanel from './BottomPanel';
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
          handleSubmit={this.props.handleSubmit}
          projects={this.props.projects}
        />
      </div>
    );
  }

}

export default Content;
