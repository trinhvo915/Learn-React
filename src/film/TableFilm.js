import React, { Component } from 'react';
import './css/film.css';
import { connect } from 'react-redux';
import * as actions from './../actions/index';
import AddFaculty from './AddFaculty';
import * as APIs from '../services/call-api';

var ShowTable = (props) => (
    props.data.map( (value,key) => {
        return (
            <tr key = {key}>
                <td>{value.id}</td>
                <td>{value.name}</td>
            </tr>
        )
    })
)

class TableFilm extends Component {

    constructor(props){
        super(props);
        this.state = {
            films : []
        }
    }
    componentDidMount(){
        this.props.getFilmAPI();
    }
    
    render() {
       console.log("this table",this.props.films);
       let  faculties =  APIs.callAPI('api/faculty','GET',null);
       console.log("this ",faculties);
        return (
            <div>
                <AddFaculty/>
                <br/>
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        <ShowTable data = {this.props.films}/>
                    </tbody>
                </table>   
            </div>
        );
    }
}

const mapStateToPros = (state)=>{
    return {
        films : state.filmReducer.films
    }
}
  
const mapDispatchToProps = (dispatch) => {
    return {
        getFilmAPI: () => {
            return actions.getAPIFilms(dispatch);
        }
    }
}

export default connect(mapStateToPros,mapDispatchToProps)(TableFilm) ;