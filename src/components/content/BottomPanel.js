import React, { Component } from 'react';

class BottomPanel extends Component {
  state = {
    selectedProject: '',
    expectedOutput: '',
    actualOutput: '',
    newProject: false
  }

  handleChange = e => {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value,
      newProject: e.target.name === 'selectedProject' && e.target.value === 'Create New Project' ? true : false
    })
  }

  render() {
    const { projects } = this.props;
    return (
      <div className="bottom-panel">
        <header className="add-new-issue-header">ADD NEW ISSUE</header>
        <br />
        <br />
        <form onSubmit={e => {
          this.props.handleSubmit(e, {...this.state});
          this.setState({
            selectedProject: '',
            expectedOutput: '',
            actualOutput: ''
          })
        }}>
          <label>
            Project: {' '}
            <select name="selectedProject" onChange={this.handleChange}>
              <option defaultValue className="select-project-default">Select Project</option>
              {projects ? projects.map(project => {
                return (
                  <option key={project.id}>{project.title}</option>
                )
              }) : null}
              <option>Create New Project</option>
            </select>
            {this.state.newProject ? <input type="text" /> : null}
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
