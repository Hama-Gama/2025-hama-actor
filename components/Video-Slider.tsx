'use client'
// import Swiper JS
import { Swiper, SwiperSlide } from 'swiper/react'
// import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import React from 'react'
import { Fragment } from 'react'
import ReactPlayer from 'react-player/youtube'
import Section from './Section'

// modules
import { Navigation, Pagination, } from 'swiper/modules'

const VideoSlider = (props) => {
	return (
		<Section>
			<h2 className='h2'>{props.title}</h2>
			<Swiper
				spaceBetween={15}
				breakpoints={{
					360: {
						slidesPerView: 1.1,
					},
					480: {
						slidesPerView: 1.2,
					},
					768: {
						slidesPerView: 2.2,
					},
					920: {
						slidesPerView: 3.2,
					},
				}}
				pagination={{
					type: 'fraction',
				}}
				modules={[Navigation, Pagination]}
				className='mySwiper  w-[80%]'
			>
				<SwiperSlide className='mb-[35px]'>
					<div className='video'>
						<Fragment>
							{/* <ReactPlayer url={video} width="100%" height="240px" /> */}
							<ReactPlayer
								// className='react-player'
								light
								url='https://youtu.be/NOhDyUmT9z0?si=iACK2IamK35ovvKE'
								// playIcon={<PlayIcon width='60' />}
								width='100%'
								height='100%'
								controls
								playing
								// style={}
							/>
						</Fragment>
					</div>
				</SwiperSlide>

				<SwiperSlide>
					<div className='video'>
						<Fragment>
							{/* <ReactPlayer url={video} width="100%" height="240px" /> */}
							<ReactPlayer
								// className='react-player'
								light
								url='https://youtu.be/uPzOyzsnmio?si=b61bnI_0JzS2S5ur'
								// playIcon={<PlayIcon width='60' />}
								width='100%'
								height='100%'
								controls
								playing
								// style={}
							/>
						</Fragment>
					</div>
				</SwiperSlide>
				
				<SwiperSlide>
					<div className='video'>
						<Fragment>
							{/* <ReactPlayer url={video} width="100%" height="240px" /> */}
							<ReactPlayer
								// className='react-player'
								light
								url='https://youtu.be/uPzOyzsnmio?si=b61bnI_0JzS2S5ur'
								// playIcon={<PlayIcon width='60' />}
								width='100%'
								height='100%'
								controls
								playing
								// style={}
							/>
						</Fragment>
					</div>
				</SwiperSlide>
				
				<SwiperSlide>
					<div className='video'>
						<Fragment>
							{/* <ReactPlayer url={video} width="100%" height="240px" /> */}
							<ReactPlayer
								// className='react-player'
								light
								url='https://youtu.be/uPzOyzsnmio?si=b61bnI_0JzS2S5ur'
								// playIcon={<PlayIcon width='60' />}
								width='100%'
								height='100%'
								controls
								playing
								// style={}
							/>
						</Fragment>
					</div>
				</SwiperSlide>
			</Swiper>
		</Section>
	)
}

export default VideoSlider
