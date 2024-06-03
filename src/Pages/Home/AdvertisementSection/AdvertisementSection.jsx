import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { Pagination, Navigation } from 'swiper/modules';
import { useState } from 'react';
const AdvertisementSection = () => {
    const [swiperRef, setSwiperRef] = useState(null);
    console.log(swiperRef);
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
                <SwiperSlide className='p-10'>
                    <div className="max-w-xs rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800 mx-auto">
                        <img src="https://source.unsplash.com/random/300x300/?2" alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
                        <div className="flex flex-col justify-between p-6 space-y-8">
                            <div className="space-y-2">
                                <h2 className="text-3xl font-semibold tracking-wide">Property Name</h2>
                                <p className="dark:text-gray-800">Property location</p>
                                <p className="dark:text-gray-800">Verification status</p>
                                <p className="dark:text-gray-800">Price Range</p>
                            </div>
                            <button type="button" className="flex btn-ghost items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md dark:bg-violet-600 dark:text-gray-50">Details button</button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='p-10'>
                    <div className="max-w-xs rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800 mx-auto">
                        <img src="https://source.unsplash.com/random/300x300/?2" alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
                        <div className="flex flex-col justify-between p-6 space-y-8">
                            <div className="space-y-2">
                                <h2 className="text-3xl font-semibold tracking-wide">Property Name</h2>
                                <p className="dark:text-gray-800">Property location</p>
                                <p className="dark:text-gray-800">Verification status</p>
                                <p className="dark:text-gray-800">Price Range</p>
                            </div>
                            <button type="button" className="flex btn-ghost items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md dark:bg-violet-600 dark:text-gray-50">Details button</button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='p-10'>
                    <div className="max-w-xs rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800 mx-auto">
                        <img src="https://source.unsplash.com/random/300x300/?2" alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
                        <div className="flex flex-col justify-between p-6 space-y-8">
                            <div className="space-y-2">
                                <h2 className="text-3xl font-semibold tracking-wide">Property Name</h2>
                                <p className="dark:text-gray-800">Property location</p>
                                <p className="dark:text-gray-800">Verification status</p>
                                <p className="dark:text-gray-800">Price Range</p>
                            </div>
                            <button type="button" className="flex btn-ghost items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md dark:bg-violet-600 dark:text-gray-50">Details button</button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='p-10'>
                    <div className="max-w-xs rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800 mx-auto">
                        <img src="https://source.unsplash.com/random/300x300/?2" alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
                        <div className="flex flex-col justify-between p-6 space-y-8">
                            <div className="space-y-2">
                                <h2 className="text-3xl font-semibold tracking-wide">Property Name</h2>
                                <p className="dark:text-gray-800">Property location</p>
                                <p className="dark:text-gray-800">Verification status</p>
                                <p className="dark:text-gray-800">Price Range</p>
                            </div>
                            <button type="button" className="flex btn-ghost items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md dark:bg-violet-600 dark:text-gray-50">Details button</button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='p-10'>
                    <div className="max-w-xs rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800 mx-auto">
                        <img src="https://source.unsplash.com/random/300x300/?2" alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
                        <div className="flex flex-col justify-between p-6 space-y-8">
                            <div className="space-y-2">
                                <h2 className="text-3xl font-semibold tracking-wide">Property Name</h2>
                                <p className="dark:text-gray-800">Property location</p>
                                <p className="dark:text-gray-800">Verification status</p>
                                <p className="dark:text-gray-800">Price Range</p>
                            </div>
                            <button type="button" className="flex btn-ghost items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md dark:bg-violet-600 dark:text-gray-50">Details button</button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='p-10'>
                    <div className="max-w-xs rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800 mx-auto">
                        <img src="https://source.unsplash.com/random/300x300/?2" alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
                        <div className="flex flex-col justify-between p-6 space-y-8">
                            <div className="space-y-2">
                                <h2 className="text-3xl font-semibold tracking-wide">Property Name</h2>
                                <p className="dark:text-gray-800">Property location</p>
                                <p className="dark:text-gray-800">Verification status</p>
                                <p className="dark:text-gray-800">Price Range</p>
                            </div>
                            <button type="button" className="flex btn-ghost items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md dark:bg-violet-600 dark:text-gray-50">Details button</button>
                        </div>
                    </div>
                </SwiperSlide>
                
            </Swiper>

        </div>
    );
};

export default AdvertisementSection;