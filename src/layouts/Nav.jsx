import React from 'react';
import { Container, Navbar, FormControl, Form } from 'react-bootstrap';

const Nav = props => {
    return (
            <Navbar className="navbar navbar-expand-lg   sticky navbar-light bg-primary fixed " >
                <Navbar.Brand href=""><img src={props.label} width="60%" height="60%"></img></Navbar.Brand>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" onChange={props.onChange} />
                    {/* <Button variant="outline-info">Search</Button> */}
                </Form>
                <button className="navbar-toggler " type="button" data-toggle="collapse"
                data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse sticky " id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto ">
                <li className="nav-item active">
                    <a className="nav-link" href="#">Our Blog <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">About us</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Free talks</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Companies</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Login</a>
                </li>
                
            </ul>
            
        </div>
            </Navbar>

            
    )
}

export default Nav;






































/*import React from "react";

export const Nav = props => (
    <nav className="navbar navbar-expand-lg navbar-light bg-light navclassss">
        <a className="navbar-brand" href="#">{props.data.site.logo}</a>
        <button className="navbar-toggler " type="button" data-toggle="collapse"
                data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
            <form className="form-inline my-2 my-lg-0">
                <input className="form-control mr-sm-2" type="search" placeholder="Search"
                       aria-label="Search"/>
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
                <li className="nav-item active">
                    <a className="nav-link" href="#">Our Blog <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">About us</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Free talks</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Companies</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Login</a>
                </li>
                
            </ul>
            
        </div>
    </nav>
);

export default Nav;
*/