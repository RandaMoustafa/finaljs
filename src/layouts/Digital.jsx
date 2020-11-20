
import axios from 'axios';
import React, { Component } from 'react';



class Digital extends Component {
  
  constructor(props) {
    super(props);
    this.state={
     
      digital: [
        {
          id:1,
          name: "",
          inName:"",
          price: 0,
          dis: 0,
          img:""
        }, 
          {
          id:2,
          name: "",
          inName:"",
          price: 0,
          dis: 0,
          img:""
        }, {
          id:3,
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
    axios.get("https://ebusiness.ide-academy.org/api/course-categories/6_Digital business")
    .then (r2 =>{
      this.setState({digital: r2.data.response.data})
      console.log( r2.data.response.data)
    })
  }
 

  
    render(){
        return(
    <div className="row row-cols-1 row-cols-md-3">
              <div className="col mb-4">
            <div className="card-nav">
              <img src={this.state.digital[0].course_image} className="card-img-top" alt="..."/>
              <div className="card-body-size">
                <h4 className="card-title"> {this.state.digital[0].course_name} </h4>
                <h5 className="card-title text-danger"> {this.state.digital[0].instructor_name} </h5>
                <h5 className="text-primary"> {this.state.digital[0].start_date} </h5>
                <h5 className="text-primary"> students({this.state.digital[0].number_of_students}) </h5>
                <h5 className="card-title"> {this.state.digital[0].price_after_discount}
                  <span className="dis"> {this.state.digital[0].price} </span> </h5>
           
          </div>
         </div>
           
        </div>
        <div className="col mb-4">
            <div className="card-nav">
              <img src={this.state.digital[1].course_image} className="card-img-top" alt="..."/>
              <div className="card-body-size">
                <h4 className="card-title"> {this.state.digital[1].course_name} </h4>
                <h5 className="card-title text-danger"> {this.state.digital[1].instructor_name} </h5>
                <h5 className="text-primary"> {this.state.digital[1].start_date} </h5>
                <h5 className="text-primary"> students({this.state.digital[1].number_of_students}) </h5>
                <h5 className="card-title"> {this.state.digital[1].price_after_discount}
                  <span className="dis"> {this.state.digital[1].price} </span> </h5>
           
          </div>
         </div>
           
        </div>
        <div className="col mb-4">
            <div className="card-nav">
              <img src={this.state.digital[2].course_image} className="card-img-top" alt="..."/>
              <div className="card-body-size">
                <h4 className="card-title"> {this.state.digital[2].course_name} </h4>
                <h5 className="card-title text-danger"> {this.state.digital[2].instructor_name} </h5>
                <h5 className="text-primary"> {this.state.digital[2].start_date} </h5>
                <h5 className="text-primary"> students({this.state.digital[2].number_of_students}) </h5>
                <h5 className="card-title"> {this.state.digital[2].price_after_discount}
                  <span className="dis"> {this.state.digital[2].price} </span> </h5>
           
          </div>
         </div>
           
        </div>
        
        

        </div>
         
        
        
           
      
        );
    }
  }


export default Digital;
 