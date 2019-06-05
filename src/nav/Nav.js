import React, { Component } from 'react';

class Nav extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand navbar-light bg-faded">
                <a className="navbar-brand" href="#">Navbar</a>
                <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                <li className="nav-item active">
                    <a className="nav-link" href="#">Active <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Link</a>
                </li>
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="dropdownId" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</a>
                    <div className="dropdown-menu" aria-labelledby="dropdownId">
                    <a className="dropdown-item" href="#">Action 1</a>
                    <a className="dropdown-item" href="#">Action 2</a>
                    </div>
                </li>
                </ul>
                <form className="form-inline my-2 my-lg-0">
                <input className="form-control mr-sm-2" type="text" placeholder="Search" />
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
            </nav>
        );
    }
}

export default Nav;