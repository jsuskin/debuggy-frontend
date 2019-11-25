import React, { Component } from 'react';

class NewProjectForm extends Component {
  state = { title: '' }

  handleChange = e => {
    this.setState({
      title: e.target.value
    })
  }

  render() {
    return (
      <div className="new-project-form">
        <header className="form-header">ADD NEW PROJECT</header>
        <br />
        <form onSubmit={e => {
          this.props.handleAddNewProject(e, this.state.title);
          this.setState({ title: '' })
        }}>
          <label>
            Title: {' '}
            <input type="text" name="title" id="new-project-title" value={this.state.title} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Add Project" id="add-project-submit" />
        </form>
        <br />
      </div>
    );
  }

}

export default NewProjectForm;
