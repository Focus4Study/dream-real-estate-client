import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { Pagination, Navigation } from 'swiper/modules';
import { useState } from 'react';
import useProperties from '../../../Hooks/useProperties';
import { Link } from 'react-router-dom';
const AdvertisementSection = () => {
    const [swiperRef, setSwiperRef] = useState(null);
    const [, properties] = useProperties()
    const adProperties = properties.slice(0, 6)

    return (
        <div className='bg-emerald-200 lg:pb-10'>
            <h1 className='lg:text-4xl text-2xl text-center font-semibold font-serif pt-5 lg:pt-10'>Check Out Our Offers</h1>
            <p className='lg:w-3/5 px-2 text-center mx-auto py-5 lg:py-10'>We offer a diverse selection of properties to suit your lifestyle, from cozy condos in the heart of the city to spacious family homes in quiet suburbs.  Enjoy breathtaking views, top-rated schools, and convenient access to shopping, dining, and entertainment. Our experienced team is dedicated to helping you find the perfect place to call home.
            </p>


            {
                adProperties.map(property => <div key={property._id}>
                    <div className="lg:max-w-sm m-5 rounded-md bg-white shadow-md dark:bg-gray-50 dark:text-gray-800 mx-auto">
                        <img src={property.property_image} alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
                        <div className="flex flex-col justify-between p-6 space-y-8">
                            <div className="space-y-2">
                                <h2 className="text-2xl h-16 font-semibold tracking-wide">{property.property_title}</h2>
                                <p className="dark:text-gray-800">{property.property_location}</p>
                                <p className="dark:text-gray-800">{property.verification_status}</p>
                                <p className="dark:text-gray-800">{property.price_range}</p>
                            </div>
                            <Link to={`/property/details/${property._id}`}>
                                <button type="button" className="flex btn-ghost bg-emerald-400 items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md dark:bg-violet-600 dark:text-gray-50">Details button</button>
                            </Link>
                        </div>
                    </div>
                </div>)
            }

            <div className='hidden sm:block'>
                <Swiper
                    onSwiper={setSwiperRef}
                    slidesPerView={3}
                    initialSlide={1}
                    centeredSlides={true}
                    spaceBetween={30}
                    pagination={{
                        type: 'fraction',
                    }}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    className="mySwiper"
                >
                    {
                        adProperties.map(property =>
                            <SwiperSlide
                                key={property._id}
                                className='p-10'>
                                <div className="lg:max-w-md rounded-md bg-white shadow-md dark:bg-gray-50 dark:text-gray-800 mx-auto">
                                    <img src={property.property_image} alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
                                    <div className="flex flex-col justify-between p-6 space-y-8">
                                        <div className="space-y-2">
                                            <h2 className="text-2xl h-16 font-semibold tracking-wide">{property.property_title}</h2>
                                            <p className="dark:text-gray-800">{property.property_location}</p>
                                            <p className="dark:text-gray-800">{property.verification_status}</p>
                                            <p className="dark:text-gray-800">{property.price_range}</p>
                                        </div>
                                        <Link to={`/property/details/${property._id}`}>
                                            <button type="button" className="flex btn-ghost bg-emerald-400 items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md dark:bg-violet-600 dark:text-gray-50">Details button</button>
                                        </Link>
                                    </div>
                                </div>
                            </SwiperSlide>)
                    }
                </Swiper>
            </div>
            {
                swiperRef ?
                    <></>
                    :
                    <></>
            }
        </div>
    );
};

export default AdvertisementSection;