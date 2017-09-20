import React, { Component } from 'react';
import './Container.css';

export class Container extends Component {
  render() {
    const { header, children } = this.props;
    const tag = header.replace(' ', '-').toLowerCase();
    return (
      <div className="container-box">
        {
          header &&
          <h1>
            <a id={tag} href={`#${tag}`}>{header}</a>
          </h1>
        }
        {children}
      </div>
    );
  }
}