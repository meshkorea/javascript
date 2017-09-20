import React, { Component } from 'react';
import './DataTable.css';

export class DataTable extends Component {
  render() {
    return (
      <div>
        <table>
          <tr>
            <th>Title</th>
            <td>Lorem</td>
          </tr>
          <tr>
            <th>Title</th>
            <td>Ipsum</td>
          </tr>
          <tr>
            <th>Title</th>
            <td>Dolor</td>
          </tr>
        </table>
      </div>
    );
  }
}