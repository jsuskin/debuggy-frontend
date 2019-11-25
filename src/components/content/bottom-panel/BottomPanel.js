import React, { Component } from 'react';
import NewIssueForm from './NewIssueForm';
import NewProjectForm from './NewProjectForm';

class BottomPanel extends Component {
  render() {
    return (
      <div className="bottom-panel">
        <NewProjectForm handleAddNewProject={this.props.handleAddNewProject} />
        <NewIssueForm {...this.props} handleAddNewIssue={this.props.handleAddNewIssue} />
      </div>
    );
  }

}

export default BottomPanel;
