import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/index';
class AddFaculty extends Component {

    constructor(props){
        super(props);
        this.state =  {
            data : {
              name : ''  
            }
        }
    }

    handleChange = event => {
        const value = event.target.value;
        console.log(value);
        this.setState({
            data: {
                ...this.state.data, name: value
            }
        });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.AddFilmAPI(this.state.data);
        this.setState({
            data : {
               name: ""
            }
        });
    }
    
    render() {
        console.log('state',this.state);
        return (
            <div>
                <form onSubmit = {this.handleSubmit} >
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Name Faculty</label>
                        <input onChange = {this.handleChange}  value= {this.state.name} type="text" className="form-control"  placeholder="name faculty" />
                    </div>
                    <button  type="submit" className="btn btn-primary">Submit</button>
                </form> 
            </div>
        );
    }
}

const mapStateToProps = (state) =>{
    return {
        faculty : state.filmReducer.faculty
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        AddFilmAPI : (name) => {
            console.log(name);
            return actions.postFacultyAPI(name,dispatch);
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(AddFaculty);