import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const Banner = () => {
    return (
        <div>
            <Carousel className="text-center mb-52">
                <div>
                    <img className="max-h-[600px]" src="https://i.ibb.co/J7rrQ8r/2151004063.jpg" />
                </div>
                <div>
                    <img className="max-h-[600px]" src="https://i.ibb.co/bvqXC5m/2149661456.jpg" />
                </div>
                <div>
                    <img className="max-h-[600px]" src="https://i.ibb.co/L9KmsLt/2149836942.jpg" />
                </div>
            </Carousel>
        </div>
    );
};

export default Banner;