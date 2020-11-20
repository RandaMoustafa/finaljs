import React, {Component} from "react";
//import '../assets/scss/app.scss';
import Nav from "../layouts/Nav";
//import TaskItem from "./tasks/TaskItem";
import axios from 'axios';
//import Test from '../layouts/Test';
import { Container,Carousel, FormControl, Form } from 'react-bootstrap';
import Category from "../component/Category";
import Test from '../layouts/Test';
//const BASE_URL = 'https://ebusiness.ide-academy.org/api';

class App extends Component { // React.Component

    constructor(props) {
        super(props);
        this.state = {
          items: [],
          isLoaded: false,
          items1: [],
          items2: [],
          items3: [],
          items4: [],
          items6: [],
          items7: [],
          items8: [],
          items9: [],
          items10: [],
          items111:[],
          items222:[],
          items333: [],
          items444: [],
          items55: [],
          test11:[
               {
                   id:1,
                   instructor_name:[],
                   instructor_title:'',
                   instructor_organization:'',
                   instructor_description:'',
                   image:''
                },
                {
                    id:2,
                    instructor_name:[],
                    instructor_title:'',
                    instructor_organization:'',
                    instructor_description:'',
                    image:''
                },
                 {
                    id:3,
                    instructor_name:[],
                    instructor_title:'',
                    instructor_organization:'',
                    instructor_description:'',
                    image:''
                },
                 {
                    id:4,
                    instructor_name:[],
                    instructor_title:'',
                    instructor_organization:'',
                    instructor_description:'',
                    image:''
                }
                 ,
                 {
                    id:5,
                    instructor_name:[],
                    instructor_title:'',
                    instructor_organization:'',
                    instructor_description:'',
                    image:''
                },
                 {
                    id:6,
                    instructor_name:[],
                    instructor_title:'',
                    instructor_organization:'',
                    instructor_description:'',
                    image:''
                },
                 {
                    id:7,
                    instructor_name:[],
                    instructor_title:'',
                    instructor_organization:'',
                    instructor_description:'',
                    image:''
                },
                 {
                    id:8,
                    instructor_name:[],
                    instructor_title:'',
                    instructor_organization:'',
                    instructor_description:'',
                    image:''
                }
                 ,
                 {
                    id:9,
                    instructor_name:[],
                    instructor_title:'',
                    instructor_organization:'',
                    instructor_description:'',
                    image:''
                },
                 {
                    id:10,
                    instructor_name:[],
                    instructor_title:'',
                    instructor_organization:'',
                    instructor_description:'',
                    image:''
                },
                 {
                    id:11,
                    instructor_name:[],
                    instructor_title:'',
                    instructor_organization:'',
                    instructor_description:'',
                    image:''
                },
                 {
                    id:12,
                    instructor_name:[],
                    instructor_title:'',
                    instructor_organization:'',
                    instructor_description:'',
                    image:''
                },
                 {
                    id:13,
                    instructor_name:[],
                    instructor_title:'',
                    instructor_organization:'',
                    instructor_description:'',
                    image:''
                },
                 {
                    id:14,
                    instructor_name:[],
                    instructor_title:'',
                    instructor_organization:'',
                    instructor_description:'',
                    image:''
                },
                 {
                    id:15,
                    instructor_name:[],
                    instructor_title:'',
                    instructor_organization:'',
                    instructor_description:'',
                    image:''
                },
                 {
                    id:16,
                    instructor_name:[],
                    instructor_title:'',
                    instructor_organization:'',
                    instructor_description:'',
                    image:''
                },
                 {
                    id:17,
                    instructor_name:[],
                    instructor_title:'',
                    instructor_organization:'',
                    instructor_description:'',
                    image:''
                },
                 {
                    id:18,
                    instructor_name:[],
                    instructor_title:'',
                    instructor_organization:'',
                    instructor_description:'',
                    image:''
                },
                 {
                    id:19,
                    instructor_name:[],
                    instructor_title:'',
                    instructor_organization:'',
                    instructor_description:'',
                    image:''
                },
                 {
                    id:20,
                    instructor_name:[],
                    instructor_title:'',
                    instructor_organization:'',
                    instructor_description:'',
                    image:''
                }
                 ,
                 {
                    id:21,
                    instructor_name:[],
                    instructor_title:'',
                    instructor_organization:'',
                    instructor_description:'',
                    image:''
                }
                 ,
                 {
                    id:22,
                    instructor_name:[],
                    instructor_title:'',
                    instructor_organization:'',
                    instructor_description:'',
                    image:''
                }
                 ,
                 {
                    id:23,
                    instructor_name:[],
                    instructor_title:'',
                    instructor_organization:'',
                    instructor_description:'',
                    image:''
                }
                 ,
                 {
                    id:24,
                    instructor_name:[],
                    instructor_title:'',
                    instructor_organization:'',
                    instructor_description:'',
                    image:''
                }
                 ,
                 {
                    id:25,
                    instructor_name:[],
                    instructor_title:'',
                    instructor_organization:'',
                    instructor_description:'',
                    image:''
                }






          ],
         


        }
      }
      
      componentDidMount() {
          axios.get(`https://ebusiness.ide-academy.org/api/settings`)
          .then(res => {
            const user = res.data.response.data["site.logo"];
            this.setState({
              isLoaded: true,
              items: user
            });
            console.log('object in this'+res.data.response.data["site.logo"]);

          })
          
          axios.get(`https://ebusiness.ide-academy.org/api/homepage`)
          .then(res => {
            const user1 = res.data.response.data["upper_row_text"];
            const user2 = res.data.response.data["main_text"];
            const user3 = res.data.response.data["lower_row_text"];
            const user4 = res.data.response.data["button_text"];
            const user5 = res.data.response.data["image_url"];

            this.setState({
              isLoaded: true,
              items1: user1,
              items2: user2,
              items3: user3,
              items4: user4,
              items5: user5




            });
            console.log('object in this'+res.data.response.data["upper_row_text"]);
            console.log('object in this'+res.data.response.data["main_text"]);
            console.log('object in this'+res.data.response.data["lower_row_text"]);
            console.log('object in this'+res.data.response.data["button_text"]);
            console.log(res.data.response.data["image_url"]);


          })
          /*axios.get(`https://ebusiness.ide-academy.org/api/contact-us`)
          .then(res => {
            const user22 = res.data["name"];
            const user23 = res.data["email"];
            const user33 = res.data["company"];
            const user44 =res.data["subject"];
            const user55 = res.data["message"];

            this.setState({
              isLoaded: true,
              items111: user22,
              items222: user23,
              items333: user33,
              items444: user44,
              items55: user55




            });
            console.log('object in this'+res.data["name"]);
            console.log('object in this'+res.data["email"]);
            console.log('object in this'+res.data["company"]);
            console.log('object in this'+res.data["subject"]);
            console.log(res.data["message"]);


          })*/
          
          axios.get(`https://ebusiness.ide-academy.org/api/instructors`)
          .then(res => {
            //const user6 = res.data.response.data["instructor_name"];
            //const user7 = res.data.response.data["instructor_title"];
            //const user8 = res.data.response.data["instructor_organization"];
            //const user9 = res.data.response.data["instructor_description"];
            //const user10= res.data.response.data["image_url"];
            /*
            */
           this.setState( {test11:res.data.response.data})
           console.log(res.data.response.data[1])

            //console.log('object in this'+res.data.response.data["instructor_name"]);
            //console.log('object in this'+res.data.response.data["instructor_title"]);
           // console.log('object in this'+res.data.response.data["instructor_organization"]);
           // console.log('object in this'+res.data.response.data["instructor_description"]);
           // console.log(res.data.response.data["image_url"]);

          })

          
      }
    
      filter(e){
        this.setState({filter: e.target.value})
      }
    
      render() {
        var { isLoaded, items, filter } = this.state;
    
        if(filter) {
          items = items.filter(item =>
            item.name.toLowerCase()
            .includes(filter.toLowerCase()))
        }
    
        if (!isLoaded) {
          return <div>Loading...</div>
        }
        else {
          return (
            <div className="App">
               
              <Nav label={this.state.items}  onChange={this.filter.bind(this)} />
              <img src={this.state.items5} width="100%" height="100%"></img>n

             <div className="my-3 backimago1" dangerouslySetInnerHTML={{__html:this.state.items1}}></div><br></br>
             <div className="my-3 backimago2" dangerouslySetInnerHTML={{__html:this.state.items2}}></div><br></br>
             <div className="my-3 backimago3" dangerouslySetInnerHTML={{__html:this.state.items3}}></div><br></br>
             <button className="my-3 backimago4 btn btn-success" dangerouslySetInnerHTML={{__html:this.state.items4}}></button><br></br>
             
          <Category/>

 <Container className=" jumbotron colorrrro11   width: 100%;">
             <h1 className="sizingggg11">Our Instructors</h1>

<Carousel id="carouselExampleIndicators" className="  sizingggg">

  <Carousel.Item>
    <img
      className="d-block w-100"
      src={this.state.test11[1].image_url}
      alt="First slide"
      width="10%"
      height="10%"
    />
    <Carousel.Caption>
      <h4>{this.state.test11[1].instructor_name}</h4>
      <h4>{this.state.test11[1].instructor_title}</h4>
      <h4>{this.state.test11[1].instructor_organization}</h4>
      <p>{this.state.test11[1].instructor_description}</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={this.state.test11[2].image_url}
      alt="First slide"
      width="10%"
      height="10%"
    />
    <Carousel.Caption>
      <h4>{this.state.test11[2].instructor_name}</h4>
      <h4>{this.state.test11[2].instructor_title}</h4>
      <h4>{this.state.test11[2].instructor_organization}</h4>
      <p>{this.state.test11[2].instructor_description}</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={this.state.test11[3].image_url}
      alt="First slide"
      width="10%"
      height="10%"
    />
    <Carousel.Caption>
      <h4>{this.state.test11[3].instructor_name}</h4>
      <h4>{this.state.test11[3].instructor_title}</h4>
      <h4>{this.state.test11[3].instructor_organization}</h4>
      <p>{this.state.test11[3].instructor_description}</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={this.state.test11[4].image_url}
      alt="First slide"
      width="10%"
      height="10%"
    />
    <Carousel.Caption>
      <h4>{this.state.test11[4].instructor_name}</h4>
      <h4>{this.state.test11[4].instructor_title}</h4>
      <h4>{this.state.test11[4].instructor_organization}</h4>
      <p>{this.state.test11[4].instructor_description}</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={this.state.test11[5].image_url}
      alt="First slide"
      width="10%"
      height="10%"
    />
    <Carousel.Caption>
      <h4>{this.state.test11[5].instructor_name}</h4>
      <h4>{this.state.test11[5].instructor_title}</h4>
      <h4>{this.state.test11[5].instructor_organization}</h4>
      <p>{this.state.test11[5].instructor_description}</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={this.state.test11[6].image_url}
      alt="First slide"
      width="10%"
      height="10%"
    />
    <Carousel.Caption>
      <h4>{this.state.test11[6].instructor_name}</h4>
      <h4>{this.state.test11[6].instructor_title}</h4>
      <h4>{this.state.test11[6].instructor_organization}</h4>
      <p>{this.state.test11[6].instructor_description}</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={this.state.test11[7].image_url}
      alt="First slide"
      width="10%"
      height="10%"
    />
    <Carousel.Caption>
      <h4>{this.state.test11[7].instructor_name}</h4>
      <h4>{this.state.test11[7].instructor_title}</h4>
      <h4>{this.state.test11[7].instructor_organization}</h4>
      <p>{this.state.test11[7].instructor_description}</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={this.state.test11[8].image_url}
      alt="First slide"
      width="10%"
      height="10%"
    />
    <Carousel.Caption>
      <h4>{this.state.test11[8].instructor_name}</h4>
      <h4>{this.state.test11[8].instructor_title}</h4>
      <h4>{this.state.test11[8].instructor_organization}</h4>
      <p>{this.state.test11[8].instructor_description}</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={this.state.test11[9].image_url}
      alt="First slide"
      width="10%"
      height="10%"
    />
    <Carousel.Caption>
      <h4>{this.state.test11[9].instructor_name}</h4>
      <h4>{this.state.test11[9].instructor_title}</h4>
      <h4>{this.state.test11[9].instructor_organization}</h4>
      <p>{this.state.test11[9].instructor_description}</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={this.state.test11[10].image_url}
      alt="First slide"
      width="10%"
      height="10%"
    />
    <Carousel.Caption>
      <h4>{this.state.test11[10].instructor_name}</h4>
      <h4>{this.state.test11[10].instructor_title}</h4>
      <h4>{this.state.test11[10].instructor_organization}</h4>
      <p>{this.state.test11[10].instructor_description}</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={this.state.test11[11].image_url}
      alt="First slide"
      width="10%"
      height="10%"
    />
    <Carousel.Caption>
      <h4>{this.state.test11[11].instructor_name}</h4>
      <h4>{this.state.test11[11].instructor_title}</h4>
      <h4>{this.state.test11[11].instructor_organization}</h4>
      <p>{this.state.test11[11].instructor_description}</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={this.state.test11[12].image_url}
      alt="First slide"
      width="10%"
      height="10%"
    />
    <Carousel.Caption>
      <h4>{this.state.test11[12].instructor_name}</h4>
      <h4>{this.state.test11[12].instructor_title}</h4>
      <h4>{this.state.test11[12].instructor_organization}</h4>
      <p>{this.state.test11[12].instructor_description}</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={this.state.test11[13].image_url}
      alt="First slide"
      width="10%"
      height="10%"
    />
    <Carousel.Caption>
      <h4>{this.state.test11[13].instructor_name}</h4>
      <h4>{this.state.test11[13].instructor_title}</h4>
      <h4>{this.state.test11[13].instructor_organization}</h4>
      <p>{this.state.test11[13].instructor_description}</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={this.state.test11[14].image_url}
      alt="First slide"
      width="10%"
      height="10%"
    />
    <Carousel.Caption>
      <h4>{this.state.test11[14].instructor_name}</h4>
      <h4>{this.state.test11[14].instructor_title}</h4>
      <h4>{this.state.test11[14].instructor_organization}</h4>
      <p>{this.state.test11[14].instructor_description}</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={this.state.test11[15].image_url}
      alt="First slide"
      width="10%"
      height="10%"
    />
    <Carousel.Caption>
      <h4>{this.state.test11[15].instructor_name}</h4>
      <h4>{this.state.test11[15].instructor_title}</h4>
      <h4>{this.state.test11[15].instructor_organization}</h4>
      <p>{this.state.test11[15].instructor_description}</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={this.state.test11[16].image_url}
      alt="First slide"
      width="10%"
      height="10%"
    />
    <Carousel.Caption>
      <h4>{this.state.test11[16].instructor_name}</h4>
      <h4>{this.state.test11[16].instructor_title}</h4>
      <h4>{this.state.test11[16].instructor_organization}</h4>
      <p>{this.state.test11[16].instructor_description}</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={this.state.test11[17].image_url}
      alt="First slide"
      width="10%"
      height="10%"
    />
    <Carousel.Caption>
      <h4>{this.state.test11[17].instructor_name}</h4>
      <h4>{this.state.test11[17].instructor_title}</h4>
      <h4>{this.state.test11[17].instructor_organization}</h4>
      <p>{this.state.test11[17].instructor_description}</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={this.state.test11[18].image_url}
      alt="First slide"
      width="10%"
      height="10%"
    />
    <Carousel.Caption>
      <h4>{this.state.test11[18].instructor_name}</h4>
      <h4>{this.state.test11[18].instructor_title}</h4>
      <h4>{this.state.test11[18].instructor_organization}</h4>
      <p>{this.state.test11[18].instructor_description}</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={this.state.test11[19].image_url}
      alt="First slide"
      width="10%"
      height="10%"
    />
    <Carousel.Caption>
      <h4>{this.state.test11[19].instructor_name}</h4>
      <h4>{this.state.test11[19].instructor_title}</h4>
      <h4>{this.state.test11[19].instructor_organization}</h4>
      <p>{this.state.test11[19].instructor_description}</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={this.state.test11[20].image_url}
      alt="First slide"
      width="10%"
      height="10%"
    />
    <Carousel.Caption>
      <h4>{this.state.test11[20].instructor_name}</h4>
      <h4>{this.state.test11[20].instructor_title}</h4>
      <h4>{this.state.test11[20].instructor_organization}</h4>
      <p>{this.state.test11[20].instructor_description}</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={this.state.test11[21].image_url}
      alt="First slide"
      width="10%"
      height="10%"
    />
    <Carousel.Caption>
      <h4>{this.state.test11[21].instructor_name}</h4>
      <h4>{this.state.test11[21].instructor_title}</h4>
      <h4>{this.state.test11[21].instructor_organization}</h4>
      <p>{this.state.test11[21].instructor_description}</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={this.state.test11[22].image_url}
      alt="First slide"
      width="10%"
      height="10%"
    />
    <Carousel.Caption>
      <h4>{this.state.test11[22].instructor_name}</h4>
      <h4>{this.state.test11[22].instructor_title}</h4>
      <h4>{this.state.test11[22].instructor_organization}</h4>
      <p>{this.state.test11[22].instructor_description}</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={this.state.test11[23].image_url}
      alt="First slide"
      width="10%"
      height="10%"
    />
    <Carousel.Caption>
      <h4>{this.state.test11[23].instructor_name}</h4>
      <h4>{this.state.test11[23].instructor_title}</h4>
      <h4>{this.state.test11[23].instructor_organization}</h4>
      <p>{this.state.test11[23].instructor_description}</p>
    </Carousel.Caption>
  </Carousel.Item>
  



</Carousel>
</Container>

<Test/>


<div className="margincenteroo">
      <h1 className="centerrrro11">Contact Us</h1>
      <h5 className="adjustingside11">325 B South Academy - New Cairo</h5>
      <h5 className="adjustingside11">Postal code 11865</h5>
      <h5 className="adjustingside11">contactus@ebschoolonline.com</h5>
      <h5 className="adjustingside11">+20 1005663147</h5>

      <form className="centerrrro">
     
         <label>
           <input width="100%" placeholder="Name"  required/>
         </label><br></br>
         <label>
           <input width="100%" placeholder="Email" required />
         </label><br></br>
         <label>
           <input width="100%" placeholder="Company" required/>
         </label><br></br>
         <label>
           <input width="100%" placeholder="Subject" required />
         </label><br></br>
         <label>
           <input width="100%" placeholder="Message" required />
         </label><br></br>
       
       <button className="colloordarkbleur centerrrro22"  type="submit">Send</button>
      </form>
    </div>














             
             


            </div>

          );
          console.log('object in this'+this.state.items);

        }
      }

















}

export default App;
