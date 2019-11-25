import React, { Component } from 'react';

class NewIssueForm extends Component {
  state = {
    selectedProject: '',
    expectedOutput: '',
    actualOutput: ''
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    const { projects } = this.props;
    return (
      <div className="new-issue-form">
        <header className="form-header">ADD NEW ISSUE</header>
        <br />
        <form onSubmit={e => {
          this.props.handleAddNewIssue(e, {...this.state});
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
          <input type="submit" value="Add Issue" />
        </form>
      </div>
    );
  }

}

export default NewIssueForm;
