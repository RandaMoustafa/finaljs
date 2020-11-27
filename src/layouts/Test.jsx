import React, { Component } from 'react';
import axios from 'axios';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


class Test extends Component{
  constructor(props) {
    super(props);
    this.state={
      test:[
        {
          id: 1,
          name: [],
          location:'',
          studant:'',
          img: '',
        }, {
          id: 2,
          name: [],
          location:'',
          studant:'',
          img: '',

        }, {
          id: 3,
          name: [],
          location:'',
          studant:'',
          img: '',

        }, {
          id: 4,
          name: [],
          location:'',
          studant:'',
          img: '',

        }, {
          id: 5,
          name: [],
          location:'',
          studant:'',
          img: '',

        }, {
          id: 6,
          name: [],
          location:'',
          studant:'',
          img: '',

        }, {
          id: 7,
          name: [],
          location:'',
          studant:'',
          img: '',

        }, {
          id: 8,
          name: [],
          location:'',
          studant:'',
          img: '',

        }
      ]
    }
  }
  componentDidMount(){
    axios.get('https://ebusiness.ide-academy.org/api/testamonials')
    .then(r =>{
      this.setState({test: r.data.response.data})
      //console.log(r.data.response.data[0])
    })
  }
    render(){
     // const data = this.state;
     var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 1
    };

        return(
        
          
       <div className="container">
            <h3 className="text-center text-danger">Our Students</h3>
            <h5 className="text-center" >What our students have to say</h5>
            <br/> <br/>
            <Slider {...settings}>
              <div className="text-center">
              <img src={this.state.test[0].image_url } className="card-img-top" alt="..."/>
              <h5 className="card-title text-primary"> {this.state.test[0].student_name} </h5>
                <h5 className="card-title text-danger"> {this.state.test[0].student_location} </h5>
                <p className="card-text">{this.state.test[0].student_testamonial}</p>
              </div>
              <div className="text-center">
              <img src={this.state.test[1].image_url } className="card-img-top" alt="..."/>
                <h5 className="card-title text-primary"> {this.state.test[1].student_name} </h5>
                <h5 className="card-title text-danger"> {this.state.test[1].student_location} </h5>
                <p className="card-text">{this.state.test[1].student_testamonial}</p>
              </div>
              <div className="text-center">
              <img src={this.state.test[2].image_url } className="card-img-top" alt="..."/>
                <h5 className="card-title text-primary"> {this.state.test[2].student_name} </h5>
                <h5 className="card-title text-danger"> {this.state.test[2].student_location} </h5>
                <p className="card-text">{this.state.test[2].student_testamonial}</p>
              </div>
              <div className="text-center">
              <img src={this.state.test[3].image_url } className="card-img-top" alt="..."/>
                <h5 className="card-title text-primary"> {this.state.test[3].student_name} </h5>
                <h5 className="card-title text-danger"> {this.state.test[3].student_location} </h5>
                <p className="card-text">{this.state.test[3].student_testamonial}</p>
              </div>
              <div className="text-center">
              <img src={this.state.test[4].image_url } className="card-img-top" alt="..."/>
                <h5 className="card-title text-primary"> {this.state.test[4].student_name} </h5>
                <h5 className="card-title text-danger"> {this.state.test[4].student_location} </h5>
                <p className="card-text">{this.state.test[4].student_testamonial}</p> 
              </div>
              <div className="text-center">
              <img src={this.state.test[5].image_url } className="card-img-top" alt="..."/>
                <h5 className="card-title text-primary"> {this.state.test[5].student_name} </h5>
                <h5 className="card-title text-danger"> {this.state.test[5].student_location} </h5>
                <p className="card-text">{this.state.test[5].student_testamonial}</p>
              </div>
              <div className="text-center">
              <img src={this.state.test[6].image_url } className="card-img-top" alt="..."/>
                <h5 className="card-title text-primary"> {this.state.test[6].student_name} </h5>
                <h5 className="card-title text-danger"> {this.state.test[6].student_location} </h5>
                <p className="card-text">{this.state.test[6].student_testamonial}</p>
              </div>
              <div className="text-center">
              <img src={this.state.test[7].image_url } className="card-img-top" alt="..."/>
                <h5 className="card-title text-primary"> {this.state.test[7].student_name} </h5>
                <h5 className="card-title text-danger"> {this.state.test[7].student_location} </h5>
                <p className="card-text">{this.state.test[7].student_testamonial}</p>
              </div>
         
      
            {/*<div className="row row-cols-1 row-cols-md-3 ">
              
              
          <div className="col mb-4 item">
            <div className="card">
            <img src={this.state.test[0].image_url } className="card-img-top" alt="..."/>
              <div className="card-body">
                <h5 className="card-title"> {this.state.test[0].student_name} </h5>
                <h5 className="card-title"> {this.state.test[0].student_location} </h5>
                <p className="card-text">{this.state.test[0].student_testamonial}</p>
              </div>
            </div>
          </div>
          <div className="col mb-4 item">
            <div className="card">
            <img src={this.state.test[1].image_url } className="card-img-top" alt="..."/>
              <div className="card-body">
                <h5 className="card-title"> {this.state.test[1].student_name} </h5>
                <h5 className="card-title"> {this.state.test[1].student_location} </h5>
                <p className="card-text">{this.state.test[1].student_testamonial}</p>
              </div>
            </div>
          </div>
          <div className="col mb-4 item">
            <div className="card">
            <img src={this.state.test[2].image_url } className="card-img-top" alt="..."/>
              <div className="card-body">
                <h5 className="card-title"> {this.state.test[2].student_name} </h5>
                <h5 className="card-title"> {this.state.test[2].student_location} </h5>
                <p className="card-text">{this.state.test[2].student_testamonial}</p>
              </div>
            </div>
          </div> 
          <div className="col mb-4 item">
            <div className="card">
            <img src={this.state.test[3].image_url } className="card-img-top" alt="..."/>
              <div className="card-body">
                <h5 className="card-title"> {this.state.test[3].student_name} </h5>
                <h5 className="card-title"> {this.state.test[3].student_location} </h5>
                <p className="card-text">{this.state.test[3].student_testamonial}</p>
              </div>
            </div>
          </div>     
          <div className="col mb-4 item">
            <div className="card">
            <img src={this.state.test[4].image_url } className="card-img-top" alt="..."/>
              <div className="card-body">
                <h5 className="card-title"> {this.state.test[4].student_name} </h5>
                <h5 className="card-title"> {this.state.test[4].student_location} </h5>
                <p className="card-text">{this.state.test[4].student_testamonial}</p>
              </div>
            </div>
          </div>     
          <div className="col mb-4 item">
            <div className="card">
            <img src={this.state.test[5].image_url } className="card-img-top" alt="..."/>
              <div className="card-body">
                <h5 className="card-title"> {this.state.test[5].student_name} </h5>
                <h5 className="card-title"> {this.state.test[5].student_location} </h5>
                <p className="card-text">{this.state.test[5].student_testamonial}</p>
              </div>
            </div>
          </div>     
          <div className="col mb-4 item">
            <div className="card">
            <img src={this.state.test[6].image_url } className="card-img-top" alt="..."/>
              <div className="card-body">
                <h5 className="card-title"> {this.state.test[6].student_name} </h5>
                <h5 className="card-title"> {this.state.test[6].student_location} </h5>
                <p className="card-text">{this.state.test[6].student_testamonial}</p>
              </div>
            </div>
          </div>     
          <div className="col mb-4 item">
            <div className="card">
            <img src={this.state.test[7].image_url } className="card-img-top" alt="..."/>
              <div className="card-body">
                <h5 className="card-title"> {this.state.test[7].student_name} </h5>
                <h5 className="card-title"> {this.state.test[7].student_location} </h5>
                <p className="card-text">{this.state.test[7].student_testamonial}</p>
              </div>
            </div>
          </div>              
        </div>*/}
        </Slider>
          </div>
          
         
          
          
         
        );
    }
}
export default Test;
