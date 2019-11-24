import React, { Component } from 'react';
import './Header.css'

class Header extends Component {

  render() {
    return (
      <header className="header">
        <span className="app-title">deBuggy</span>
        <span
          className={`change-theme ${this.props.theme === 'dark-theme' ? 'rotate' : ''}`}
          onClick={this.props.handleThemeChange}
          role="img"
          aria-label="change-theme"
        >
          🔦
        </span>
      </header>
    );
  }

}

export default Header;
