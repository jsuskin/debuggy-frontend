import React, { Component } from 'react';
import TopPanel from './TopPanel';
import BottomPanel from './BottomPanel';
import './Content.css';

class Content extends Component {

  render() {
    return (
      <div className="content">
        <TopPanel currentProject={this.props.currentProject} />
        <BottomPanel />
      </div>
    );
  }

}

export default Content;
