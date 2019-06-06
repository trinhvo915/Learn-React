import React, { Component } from 'react';
import './App.css';
import TableFilm from './film/TableFilm';
import Nav from './nav/Nav';
// import * as APIs from './services/call-api';

class App extends Component {

  render() {
    // let list =  APIs.callAPI('api/faculty','GET',null);
    // console.log(list);
    return (
      <div>
        <Nav/>
        <div className="row">
          <div className="col-2">col-4</div>
          <div className="col-10">
            <TableFilm />
          </div>
        </div>
      </div>
    );
  }
}

export default (App);

