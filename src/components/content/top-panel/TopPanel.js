import React, { Component, Fragment } from 'react';

class TopPanel extends Component {

  render() {
    return (
      <div className="top-panel">
        <table>
          <thead>
            <tr>
              <th className="table-key-column">#</th>
              <th className="table-output-column">Expected Output</th>
              <th className="table-output-column">Actual Output</th>
              <th className="table-status-column">Status</th>
              <th className="table-delete-column"></th>
            </tr>
          </thead>
          <tbody>
            {this.props.currentProject ? this.props.currentProject.issues ? this.props.currentProject.issues.map((issue, idx) => {
              return (
                <Fragment key={idx + 1}>
                  <tr>
                    <td className="table-key-column">{idx + 1}</td>
                    <td className="table-output-column">{issue.expected_output}</td>
                    <td className="table-output-column">{issue.actual_output}</td>
                    <td className="table-status-column">{issue.status}</td>
                    <td className="table-delete-column">
                      <span
                        style={{cursor: 'pointer'}}
                        onClick={() => this.props.handleDeleteIssue(issue.id, issue.project_id)}
                      >
                        🗑
                      </span>
                    </td>
                  </tr>
                  {/*issue.id === 2 ? <><p>hibfwehbfewifubew</p></> : null*/}
                </Fragment>
              )
            }) : null : null}
          </tbody>
        </table>
      </div>
    );
  }

}

export default TopPanel;
