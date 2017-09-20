import React, { Component } from 'react';
import './App.css';

import { Container, Sidebar, Colors, DataTable, Tab, ListTable, Breadcrumb, Buttons, Forms } from './components';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: window.location.hash || '#colors',
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(event) {
    this.setState({
      selected: event.target.name,
    });
  }
  render() {
    const { selected } = this.state;
    return (
      <div className="App">
        <Sidebar selected={selected} onClick={this.handleClick} />
        <div className="container">
          <Container header="Colors">
            <Colors />
          </Container>
          <Container header="Data Table">
            <DataTable />
          </Container>
          <Container header="Tab">
            <Tab />
          </Container>
          <Container header="List Table">
            <ListTable />
          </Container>
          <Container header="Breadcrumb">
            <Breadcrumb />
          </Container>
          <Container header="Buttons">
            <Buttons />
          </Container>
          <Container header="Forms">
            <Forms />
          </Container>

        </div>
      </div>
    );
  }
}

export default App;
