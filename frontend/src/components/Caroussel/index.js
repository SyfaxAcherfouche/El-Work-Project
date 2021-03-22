import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';

const Caroussel = () => {
    return (
        <Carousel indicators={false} controls={false}  className="carousel-fade">
            <Carousel.Item style={{ height: "100vh"}} interval={3000}>
                <img
                    className="d-block w-100"
                    src="images/Carousel-1.jpg"
                    alt="First slide"
                    style={{ height: "100%", width: "100%"}}
                />
            </Carousel.Item>
            <Carousel.Item style={{ height: "100vh" }} interval={3000}>
                <img
                    className="d-block w-100"
                    src="images/Carousel-2.jpg"
                    alt="Third slide"
                    style={{ height: "100%", width: "100%"}}
                />
            </Carousel.Item>
            <Carousel.Item style={{ height: "100vh" }} interval={3000}>
                <img
                    className="d-block w-100"
                    src="images/Carousel-3.jpg"
                    alt="Third slide"
                    style={{ height: "100%", width: "100%"}}
                />
            </Carousel.Item>
            <Carousel.Item style={{ height: "100vh" }} interval={3000}>
                <img
                    className="d-block w-100"
                    src="images/Carousel-4.jpg"
                    alt="Third slide"
                    style={{ height: "100%", width: "100%"}}
                />
            </Carousel.Item>
        </Carousel>
    )
}

export default Caroussel