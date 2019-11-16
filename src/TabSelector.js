import React, { Component } from 'react';

class TabSelector extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { active , handleChangeTab } = this.props;
    return (
      <div className="TabSelector">
        <button
          id="home"
          onClick={handleChangeTab}
          className={active === 'home' ? 'active' : ''}
        >
          Home
        </button>
        <button
          id="about"
          onClick={handleChangeTab}
          className={active === 'about' ? 'active' : ''}
        >
          About
        </button>
        <button
          id="contact"
          onClick={handleChangeTab}
          className={active === 'contact' ? 'active' : ''}
        >
          Contact
        </button>
      </div>
    );
  }
}

export default TabSelector;
