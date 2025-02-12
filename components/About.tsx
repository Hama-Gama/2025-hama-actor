import Image from 'next/image'
import React from 'react'

const About = () => {
	return (
		<div>
			<h2 className='h2'>About</h2>
			<div className='mb-8 grid grid-flow-row lg:grid-cols-2 grid-cols-1 sm:gap-6'>
				<div className='bg-red-300'>
					<Image
						src='/about-gray.jpg'
						alt='About me'
						// layout='fill'
						// objectFit='cover'
						width={0}
						height={0}
						sizes='100vw'
						style={{ width: '100%', height: '100%', objectFit: 'contain', maxWidth: '300px'}} // optional
					/>
				</div>

				<div className='tracking-wider leading-7  bb-div text-lg bg-green-200 py-4 sm:py-0'>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonummy
						molestie erat. Pellentesque habitant morbi tristique senectus et
						netus et malesuada fames ac turpis egestas. Vestibulum facilisis,
						urna ac scelerisque tincidunt, mauris quam tristique arcu, vel
						semper est ex ut neque. Donec vitae ipsum ac velit euismod sagittis.
						Donec sed est vel neque tincidunt ultricies.
					</p>
					<p>
						Nulla facilisi. Sed vel viverra felis. In hac habitasse platea
						dictumst. Duis nec consectetur nunc. Sed vel justo in felis faucibus
						tempor. Donec id diam velit. Nulla facilisi. Sed vel viverra felis.
						In hac habitasse platea dictumst. Duis nec consectetur nunc. Sed vel
						justo in felis faucibus tempor.
					</p>
					<hr />
				</div>
			</div>
		</div>
	)
}

export default About