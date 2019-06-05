import React, { Component } from 'react';
import './App.css';
import listFilm from './data/film';
import { createStore } from 'redux';
import TableFilm from './film/TableFilm';
import Nav from './nav/Nav';

let initState = {
  film: []
}

let myReducer = (state = initState, action) => {
  if (acion.type === 'GET_ALL_FILM') {
    return initState.film = action.data;
  }
}

var acion = {
  type: 'GET_ALL_FILM',
  data: listFilm
}

const store = createStore(myReducer);
store.dispatch(acion);

class App extends Component {
  render() {
    //console.log(initState);
    return (
      <div>
        <Nav/>
        <div class="row">
          <div class="col-2">col-4</div>
          <div class="col-10">
            <TableFilm data={initState} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;

