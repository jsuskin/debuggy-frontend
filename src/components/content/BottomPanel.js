import React, { Component } from 'react';

class BottomPanel extends Component {
  state = {
    expectedOutput: '',
    actualOutput: ''
  }

  handleChange = e => {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value
    })
  }

  render() {
    const { projects } = this.props;
    return (
      <div className="bottom-panel">
        <header className="add-new-issue-header">ADD NEW ISSUE</header>
        <br />
        <br />
        <form onSubmit={this.props.handleSubmit}>
          <label>
            Project: {' '}
            <select>
              <option defaultValue className="select-project-default">Select Project</option>
              {projects ? projects.map(project => {
                return (
                  <option key={project.id}>{project.title}</option>
                )
              }) : null}
              <option>Create New Project</option>
            </select>
          </label>
          <br />
          <label>
            Expected Output: {' '}
            <textarea name="expectedOutput" value={this.state.expectedOutput} onChange={this.handleChange} rows="1" />
          </label>
          <br />
          <label>
            Actual Output: {' '}
            <textarea name="actualOutput" value={this.state.actualOutput} onChange={this.handleChange} rows="1" />
          </label>
          <br />
          <input type="submit" />
        </form>
      </div>
    );
  }

}

export default BottomPanel;
