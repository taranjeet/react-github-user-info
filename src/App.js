import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Title, SearchForm } from './components';

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12">
            <Title title={"Github User Info"} />
            <SearchForm />
            <hr/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
