import React, { Component } from 'react';
import './App.css';
import dataFilm from './data/film';
import TableFilm from './film/TableFilm';
import Nav from './nav/Nav';
import { createStore } from 'redux'

var initData = {
  film : []
};

let myReducer = (state = initData, action) =>{
  switch(action.type){
    case 'GET_DATA': 
      return initData.film = action.data;
    default :
      return initData.film;
  }
}

const store = createStore(myReducer);

var actionFilm =  {
  type : 'GET_DATA',
  data : dataFilm
};

store.dispatch(actionFilm);

class App extends Component {
  render() {
    //console.log(initState);
    return (
      <div>
        <Nav/>
        <div className="row">
          <div className="col-2">col-4</div>
          <div className="col-10">
            <TableFilm data={initData} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;

