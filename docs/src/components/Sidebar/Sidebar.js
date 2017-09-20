import React, { Component } from 'react';
import './Sidebar.css';

export class Sidebar extends Component {
  render() {
    const { selected, onClick } = this.props;
    return (
      <div className="sidebar">
        <h2>
          <strong>Mesh</strong> UI
        </h2>
        <h4>Style Guide</h4>
        <h5>Basic</h5>
        <ul>
          <li className={selected === '#colors' ? 'selected' : ''}>
            <a name="#colors" href="#colors" onClick={onClick}>Colors</a>
          </li>
        </ul>
        <h5>Layout</h5>
        <ul>
          <li className={selected === '#data-table' ? 'selected' : ''}>
            <a name="#data-table" href="#data-table" onClick={onClick}>Data Table</a>
          </li>
          <li className={selected === '#tab' ? 'selected' : ''}>
            <a name="#tab" href="#tab" onClick={onClick}>Tab</a>
          </li>
          <li className={selected === '#list-table' ? 'selected' : ''}>
            <a name="#list-table" href="#list-table" onClick={onClick}>List Table</a>
          </li>
          <li className={selected === '#breadcrumb' ? 'selected' : ''}>
            <a name="#breadcrumb" href="#breadcrumb" onClick={onClick}>Breadcrumb</a>
          </li>
        </ul>
        <h5>Input</h5>
        <ul>
          <li className={selected === '#buttons' ? 'selected' : ''}>
            <a name="#buttons" href="#buttons" onClick={onClick}>Buttons</a>
          </li>
          <li className={selected === '#forms' ? 'selected' : ''}>
            <a name="#forms" href="#forms" onClick={onClick}>Forms</a>
          </li>
        </ul>
      </div>
    );
  }
}
