"use client"
// import Swiper JS
import { Swiper, SwiperSlide } from 'swiper/react';
// import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

// modules
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import Image from 'next/image';
import Section from './Section';

const Slider = () => {
	return (
		<Section>
			<Swiper
			spaceBetween={30}
			// slidesPerView={3}
			breakpoints={{
				480: {
					slidesPerView: 1,
				},
				768: {
					slidesPerView: 2,
				},
				920: {
					slidesPerView: 3,
				},
			}}
			// navigation={true}
			// scrollbar={{ draggable: true }}
			loop={true}
			autoplay={{
        delay: 2000,
        disableOnInteraction: false,
      }}
			pagination={{
				type: 'fraction',
			}}
			modules={[Navigation, Pagination, Autoplay]}
			className='mySwiper  w-[80%]'
		>
				<SwiperSlide className='mb-[35px]'>
					<Image
						src='/1.jpg'
						width={300}
						height={200}
						alt='Lambada'
						layout='responsive'
					/>
				</SwiperSlide>
				<SwiperSlide className='mb-10'>
					<Image
						src='/2.jpg'
						width={300}
						height={200}
						alt='Lambada'
						layout='responsive'
					/>
				</SwiperSlide>
				<SwiperSlide>
					<Image
						src='/3.jpg'
						width={300}
						height={200}
						alt='Lambada'
						layout='responsive'
					/>
				</SwiperSlide>
				<SwiperSlide>
					<Image
						src='/4.jpg'
						width={300}
						height={200}
						alt='Lambada-4'
						layout='responsive'
					/>
				</SwiperSlide>
				<SwiperSlide>
					<Image
						src='/5.jpg'
						width={300}
						height={200}
						alt='Lambada'
						layout='responsive'
					/>
				</SwiperSlide>
				<SwiperSlide>
					<Image
						src='/6.jpg'
						width={300}
						height={200}
						alt='Lambada'
						layout='responsive'
					/>
				</SwiperSlide>
				<SwiperSlide>
					<Image
						src='/7.jpg'
						width={300}
						height={200}
						alt='Lambada'
						layout='responsive'
					/>
				</SwiperSlide>
			</Swiper>
		</Section>
	)
}

export default Slider