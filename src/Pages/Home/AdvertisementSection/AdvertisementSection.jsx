import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { Pagination, Navigation } from 'swiper/modules';
import { useState } from 'react';
import useProperties from '../../../Hooks/useProperties';
const AdvertisementSection = () => {
    const [swiperRef, setSwiperRef] = useState(null);
    const [,properties] = useProperties()
    const adProperties = properties.slice(0,6)

    return (
        <div>
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
                            <div className="max-w-xs rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800 mx-auto">
                                <img src={property.property_image} alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
                                <div className="flex flex-col justify-between p-6 space-y-8">
                                    <div className="space-y-2">
                                        <h2 className="text-2xl h-16 font-semibold tracking-wide">{property.property_title}</h2>
                                        <p className="dark:text-gray-800">{property.property_location}</p>
                                        <p className="dark:text-gray-800">{property.verification_status}</p>
                                        <p className="dark:text-gray-800">{property.price_range}</p>
                                    </div>
                                    <button type="button" className="flex btn-ghost items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md dark:bg-violet-600 dark:text-gray-50">Details button</button>
                                </div>
                            </div>
                        </SwiperSlide>)
                }
            </Swiper>
                {
                    swiperRef?
                    <></>
                    :
                    <></>
                }
        </div>
    );
};

export default AdvertisementSection;