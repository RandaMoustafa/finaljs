import React from 'react';
import { Container,Carousel, FormControl, Form } from 'react-bootstrap';

const Slider = props => {
    return (
        <Container>
<Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={props.slido.image_url}
      alt="First slide"
    />
    <Carousel.Caption>
      <h4>{props.slido.instructor_name}</h4>
      <h4>{props.slido.instructor_title}</h4>
      <h4>{props.slido.instructor_organization}</h4>
      <p>{props.slido.instructor_description}</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={props.slido1.image_url}
      alt="First slide"
    />
    <Carousel.Caption>
      <h4>{props.slido1.instructor_name}</h4>
      <h4>{props.slido1.instructor_title}</h4>
      <h4>{props.slido1.instructor_organization}</h4>
      <p>{props.slido1.instructor_description}</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={props.slido2.image_url}
      alt="First slide"
    />
    <Carousel.Caption>
      <h4>{props.slido2.instructor_name}</h4>
      <h4>{props.slido2.instructor_title}</h4>
      <h4>{props.slido2.instructor_organization}</h4>
      <p>{props.slido2.instructor_description}</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={props.slido3.image_url}
      alt="First slide"
    />
    <Carousel.Caption>
      <h4>{props.slido3.instructor_name}</h4>
      <h4>{props.slido3.instructor_title}</h4>
      <h4>{props.slido3.instructor_organization}</h4>
      <p>{props.slido3.instructor_description}</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={props.slido4.image_url}
      alt="First slide"
    />
    <Carousel.Caption>
      <h4>{props.slido4.instructor_name}</h4>
      <h4>{props.slido4.instructor_title}</h4>
      <h4>{props.slido4.instructor_organization}</h4>
      <p>{props.slido4.instructor_description}</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={props.slido5.image_url}
      alt="First slide"
    />
    <Carousel.Caption>
      <h4>{props.slido5.instructor_name}</h4>
      <h4>{props.slido5.instructor_title}</h4>
      <h4>{props.slido5.instructor_organization}</h4>
      <p>{props.slido5.instructor_description}</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={props.slido6.image_url}
      alt="First slide"
    />
    <Carousel.Caption>
      <h4>{props.slido6.instructor_name}</h4>
      <h4>{props.slido6.instructor_title}</h4>
      <h4>{props.slido6.instructor_organization}</h4>
      <p>{props.slido6.instructor_description}</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={props.slido7.image_url}
      alt="First slide"
    />
    <Carousel.Caption>
      <h4>{props.slido7.instructor_name}</h4>
      <h4>{props.slido7.instructor_title}</h4>
      <h4>{props.slido7.instructor_organization}</h4>
      <p>{props.slido7.instructor_description}</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={props.slido8.image_url}
      alt="First slide"
    />
    <Carousel.Caption>
      <h4>{props.slido8.instructor_name}</h4>
      <h4>{props.slido8.instructor_title}</h4>
      <h4>{props.slido8.instructor_organization}</h4>
      <p>{props.slido8.instructor_description}</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={props.slido9.image_url}
      alt="First slide"
    />
    <Carousel.Caption>
      <h4>{props.slido9.instructor_name}</h4>
      <h4>{props.slido9.instructor_title}</h4>
      <h4>{props.slido9.instructor_organization}</h4>
      <p>{props.slido9.instructor_description}</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={props.slido10.image_url}
      alt="First slide"
    />
    <Carousel.Caption>
      <h4>{props.slido10.instructor_name}</h4>
      <h4>{props.slido10.instructor_title}</h4>
      <h4>{props.slido10.instructor_organization}</h4>
      <p>{props.slido10.instructor_description}</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={props.slido11.image_url}
      alt="First slide"
    />
    <Carousel.Caption>
      <h4>{props.slido11.instructor_name}</h4>
      <h4>{props.slido11.instructor_title}</h4>
      <h4>{props.slido11.instructor_organization}</h4>
      <p>{props.slido11.instructor_description}</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={props.slido12.image_url}
      alt="First slide"
    />
    <Carousel.Caption>
      <h4>{props.slido12.instructor_name}</h4>
      <h4>{props.slido12.instructor_title}</h4>
      <h4>{props.slido12.instructor_organization}</h4>
      <p>{props.slido12.instructor_description}</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={props.slido13.image_url}
      alt="First slide"
    />
    <Carousel.Caption>
      <h4>{props.slido13.instructor_name}</h4>
      <h4>{props.slido13.instructor_title}</h4>
      <h4>{props.slido13.instructor_organization}</h4>
      <p>{props.slido13.instructor_description}</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={props.slido14.image_url}
      alt="First slide"
    />
    <Carousel.Caption>
      <h4>{props.slido14.instructor_name}</h4>
      <h4>{props.slido14.instructor_title}</h4>
      <h4>{props.slido14.instructor_organization}</h4>
      <p>{props.slido14.instructor_description}</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={props.slido15.image_url}
      alt="First slide"
    />
    <Carousel.Caption>
      <h4>{props.slido15.instructor_name}</h4>
      <h4>{props.slido15.instructor_title}</h4>
      <h4>{props.slido15.instructor_organization}</h4>
      <p>{props.slido15.instructor_description}</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={props.slido16.image_url}
      alt="First slide"
    />
    <Carousel.Caption>
      <h4>{props.slido16.instructor_name}</h4>
      <h4>{props.slido16.instructor_title}</h4>
      <h4>{props.slido16.instructor_organization}</h4>
      <p>{props.slido16.instructor_description}</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={props.slido17.image_url}
      alt="First slide"
    />
    <Carousel.Caption>
      <h4>{props.slido17.instructor_name}</h4>
      <h4>{props.slido17.instructor_title}</h4>
      <h4>{props.slido17.instructor_organization}</h4>
      <p>{props.slido17.instructor_description}</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={props.slido18.image_url}
      alt="First slide"
    />
    <Carousel.Caption>
      <h4>{props.slido18.instructor_name}</h4>
      <h4>{props.slido18.instructor_title}</h4>
      <h4>{props.slido18.instructor_organization}</h4>
      <p>{props.slido18.instructor_description}</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={props.slido19.image_url}
      alt="First slide"
    />
    <Carousel.Caption>
      <h4>{props.slido19.instructor_name}</h4>
      <h4>{props.slido19.instructor_title}</h4>
      <h4>{props.slido19.instructor_organization}</h4>
      <p>{props.slido19.instructor_description}</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={props.slido20.image_url}
      alt="First slide"
    />
    <Carousel.Caption>
      <h4>{props.slido20.instructor_name}</h4>
      <h4>{props.slido20.instructor_title}</h4>
      <h4>{props.slido20.instructor_organization}</h4>
      <p>{props.slido20.instructor_description}</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={props.slido21.image_url}
      alt="First slide"
    />
    <Carousel.Caption>
      <h4>{props.slido21.instructor_name}</h4>
      <h4>{props.slido21.instructor_title}</h4>
      <h4>{props.slido21.instructor_organization}</h4>
      <p>{props.slido21.instructor_description}</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={props.slido22.image_url}
      alt="First slide"
    />
    <Carousel.Caption>
      <h4>{props.slido22.instructor_name}</h4>
      <h4>{props.slido22.instructor_title}</h4>
      <h4>{props.slido22.instructor_organization}</h4>
      <p>{props.slido22.instructor_description}</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={props.slido23.image_url}
      alt="First slide"
    />
    <Carousel.Caption>
      <h4>{props.slido23.instructor_name}</h4>
      <h4>{props.slido23.instructor_title}</h4>
      <h4>{props.slido23.instructor_organization}</h4>
      <p>{props.slido23.instructor_description}</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={props.slido24.image_url}
      alt="First slide"
    />
    <Carousel.Caption>
      <h4>{props.slido24.instructor_name}</h4>
      <h4>{props.slido24.instructor_title}</h4>
      <h4>{props.slido24.instructor_organization}</h4>
      <p>{props.slido24.instructor_description}</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={props.slido25.image_url}
      alt="First slide"
    />
    <Carousel.Caption>
      <h4>{props.slido25.instructor_name}</h4>
      <h4>{props.slido25.instructor_title}</h4>
      <h4>{props.slido25.instructor_organization}</h4>
      <p>{props.slido25.instructor_description}</p>
    </Carousel.Caption>
  </Carousel.Item>


</Carousel>
</Container>

)
}

export default Slider;

