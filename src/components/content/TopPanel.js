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
            </tr>
          </thead>
          <tbody>
            {this.props.currentProject.issues.map((issue, idx) => {
              return (
                <tr key={idx + 1}>
                  <td>{idx + 1}</td>
                  <td>{issue.expectedOutput}</td>
                  <td>{issue.actualOutput}</td>
                  <td>{issue.status}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    );
  }

}

export default TopPanel;
