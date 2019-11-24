import React, { Component } from 'react';

class TopPanel extends Component {

  render() {
    return (
      <div className="top-panel">
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Expected Output</th>
              <th>Actual Output</th>
              <th>Status</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.props.currentProject ? this.props.currentProject.issues.map((issue, idx) => {
              return (
                <tr key={idx + 1}>
                  <td>{idx + 1}</td>
                  <td>{issue.expected_output}</td>
                  <td>{issue.actual_output}</td>
                  <td>{issue.status}</td>
                  <td>
                    <span
                      style={{cursor: 'pointer'}}
                      onClick={this.props.handleDeleteIssue}
                    >
                      🗑
                    </span>
                  </td>
                </tr>
              )
            }) : null}
          </tbody>
        </table>
      </div>
    );
  }

}

export default TopPanel;
