import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {observer, inject} from "mobx-react";
import { observable, computed, action } from 'mobx';

@observer
class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedType: '',
      selectedName: ''
    };
  }


  onClickDelete(id) {
    this.props.store.deleteCreature(id);
  }

  onFormSubmit(event) {
    this.props.store.addCreature(this.state.selectedType, this.state.selectedName);
    event.preventDefault();
    return false;
  }

  render() {
    return (
      <div className="App">
        <h1>Creatures list</h1>
        <div>
          Creatures count: {this.props.store.creaturesCount}
        </div>
        <div>
          <h4>List</h4>
          <ul>
            {this.props.store.creatures.map((item, index) => {
              return <li key={index}>
                  {item.type} {item.name}
                <a href="#" onClick={() => this.onClickDelete(item.id)}>[x]</a>
              </li>;
            })}
          </ul>
        </div>
        <div>
          <h4>Create</h4>
          <form onSubmit={(event) => this.onFormSubmit(event)}>
            <h5>Type</h5>
            <select onChange={(event) => this.setState({selectedType: event.target.value})}>
              <option value="">Select type</option>
              <option>{'\u{1F400}'}</option>
              <option>{'\u{1F43F}'}</option>
              <option>{'\u{1F413}'}</option>
              <option>{'\u{1F427}'}</option>
              <option>{'\u{1F986}'}</option>
              <option>{'\u{1F989}'}</option>
            </select>
            <h5>Name</h5>
            <input type="text" onChange={(event) => this.setState({selectedName: event.target.value})}/>
            <button type="submit">Save</button>
          </form>
        </div>
      </div>
    );
  }
}

export default App;
