import React, { Component } from 'react';

class Filter extends Component {
  render() {
    const { filter, handleFilterChange } = this.props;

    return (
      <div>
        <div style={{ marginBottom: '8px' }}>
          <label htmlFor="filterInput">Find contacts by name</label>
        </div>
        <div>
          <input
            type="text"
            id="filterInput"
            value={filter}
            onChange={handleFilterChange}
          />
        </div>
      </div>
    );
  }
}

export default Filter;
