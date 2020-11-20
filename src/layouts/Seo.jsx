
import axios from 'axios';
import React, { Component } from 'react';



class Seo extends Component {
  
  constructor(props) {
    super(props);
    this.state={
     
      seo: [
        {
          id:1,
          name: "",
          inName:"",
          price: 0,
          dis: 0,
          img:""
        }

      ]
    }
  }
  componentDidMount() {
    axios.get("https://ebusiness.ide-academy.org/api/course-categories/8_SEO")
    .then (r3 =>{
      this.setState({seo: r3.data.response.data})
      console.log( r3.data.response.data)
    })
  }
 

  
    render(){
        return(
    <div className="row row-cols-1 row-cols-md-3">
              <div className="col mb-4">
            <div className="card-nav">
              <img src={this.state.seo[0].course_image} className="card-img-top" alt="..."/>
              <div className="card-body-size">
                <h4 className="card-title"> {this.state.seo[0].course_name} </h4>
                <h5 className="card-title text-danger"> {this.state.seo[0].instructor_name} </h5>
                <h5 className="text-primary"> {this.state.seo[0].start_date} </h5>
                <h5 className="text-primary"> students({this.state.seo[0].number_of_students}) </h5>
                <h5 className="card-title"> {this.state.seo[0].price_after_discount}
                  <span className="dis"> {this.state.seo[0].price} </span> </h5>
           
          </div>
         </div>
           
        </div>
        
        

        </div>
         
        
        
           
      
        );
    }
  }


export default Seo;
 