import {
	FaGoogleDrive,
	FaInstagram,
	FaYoutube,
	FaTelegram,
} from 'react-icons/fa'

import { TfiEmail } from 'react-icons/tfi'

import React from 'react'

const Social = () => {
	return (
		<div>
			<h2 className='h2'>Social Network</h2>
			<div className='max-w-[900px] m-auto flex justify-between p-4'>
				<a href='#' className='text-[50px]' target='_blank'>
					<FaGoogleDrive />
				</a>
				<a
					href='https://www.instagram.com'
					className='text-[50px]'
					target='_blank'
				>
					<FaInstagram />
				</a>
				<a href='#' className='text-[50px]' target='_blank'>
					<TfiEmail />
				</a>
				<a href='#' className='text-[50px]' target='_blank'>
					<FaYoutube />
				</a>
				<a href='#' className='text-[50px]' target='_blank'>
					<FaTelegram />
				</a>
			</div>
			<a href='#'> Etalents</a>
			<a href='#'> Akteram.com</a>
			<a href='#'> ActorAccess</a>
		</div>
	)
}

export default Social
