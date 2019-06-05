import React, { Component } from 'react';
import './css/film.css';

var ShowTable = (props) => (
    props.data.film.map( (value,key) => {
        return (
            <tr key = {key}>
                <td>{value.id_film}</td>
                <td>{value.name_vn}</td>
                <td>{value.name_en}</td>
                <td>{value.actors}</td>
                <td>{value.description}</td>
            </tr>
        )
    })
)
class TableFilm extends Component {

    render() {
       // console.log("this table"+this.props.data);
        return (
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name VN</th>
                            <th>Name EN</th>
                            <th>Actors</th>
                            <th >Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        <ShowTable data = {this.props.data}/>
                    </tbody>
                </table>   
            </div>
        );
    }
}

export default TableFilm;