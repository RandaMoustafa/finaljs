import React, { Component } from 'react';
import Card from '../layouts/Card';
import axios from 'axios';
import Seo from '../layouts/Seo';
import Ios from '../layouts/Ios';
import Social from '../layouts/Socia';
import Free from '../layouts/Free';
import Digital from '../layouts/Digital';
import { NavLink, Route } from 'react-router-dom';
import Switch from 'react-bootstrap/esm/Switch';

class Category extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
             posts: [
                 {
                     id: 1,
                     name: []
                 },{
                    id: 2,
                    name: []
                },{
                    id: 3,
                    name: []
                },{
                    id: 4,
                    name: []
                },{
                    id: 5,
                    name: []
                },{
                    id: 6,
                    name: []
                },
                
                
             ]
        }
    }
    componentDidMount(){
        axios.get('https://ebusiness.ide-academy.org/api/course-categories')
        .then(res=> { 
            this.setState({posts: res.data.response.data})
            console.log(res)
        })   
    }
   
  
    render() {
        const data = this.state;
       // console.log(data)
        return (
            <div>
                <div className="Categories">
                    <div className="container text-center">
                        <h3 className="text-danger">Course Categories</h3> 
                        <nav className="navbar navbar-expand-lg navbar-light">
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <NavLink className="nav-link" to="/Entrepreurship" exact>{this.state.posts[0].category_name}  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/Digital" exact>{this.state.posts[1].category_name}</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/seo" exact>{this.state.posts[2].category_name}</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link " to="/ios" exact>{this.state.posts[3].category_name}</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link " to="/social" exact>{this.state.posts[4].category_name}</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link " to="/free" exact>{this.state.posts[5].category_name}</NavLink>
                </li>
              </ul>
            </div>
          </nav>
          <Switch>
            <Route path="/Entrepreurship" component={Card}/>
            <Route path="/Digital" component={Digital}/>
            <Route path="/seo" component={Seo}/>
            <Route path="/ios" component={Ios}/>
            <Route path="/social" component={Social}/>
            <Route path="/free" component={Free}/>
          </Switch>
                
                        
                  
                    
                    
                    
                    </div>
                </div>
                                   
            </div>
        )
    }

}


export default Category;

