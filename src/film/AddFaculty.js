import React, { Component } from 'react';

class AddFaculty extends Component {
    constructor(props){
        super(props);
        this.state =  {
            name : ''
        }
    }
    render() {
        return (
            <div>
                <form >
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Name Faculty</label>
                        <input type="text" width="90px" className="form-control" id="exampleInputPassword1" placeholder="name faculty" />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form> 
            </div>
        );
    }
}

export default AddFaculty;