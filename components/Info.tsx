"use client";

import { ReactSpoiler } from 'react-simple-spoiler'
import React from 'react'

const Info = () => {
	return (
		<div>
			<h2 className='h2'>Info</h2>
			<ReactSpoiler
				noOfLines={5}
				containerStyle={{ background: 'red' }}
				showMoreComponent={
					<p className='btn-info'>
						Show more
					</p>
			 	}
				showLessComponent={
					<p className='btn-info'>
						Show less
					</p>
				}
			>
				<div className='info-container grid grid-flow-row lg:grid-cols-3 md:grid-cols-2'>
					<div>
						<ul className='text-xl tracking-wider leading-10'>
							<li>Name: Khamit Arkayev</li>
							<li>Age: 39</li>
							<li>Country: Kazakhstan</li>
							<li>City: Zhezkazgan</li>
							<li>Occupation: Actor</li>
						</ul>
					</div>

					<div>
						<ul className='text-xl tracking-wider leading-10'>
							<li>Height: 180cm</li>
							<li>Weight: 65kg</li>
							<li>Eyes Color: Green</li>
							<li>Hair Color: Dark Brown</li>
							<li>Nationality: Kazakh</li>
						</ul>
					</div>

					<div>
						<ul className='text-xl tracking-wider leading-10'>
							<li>
								Languages:
								<ul className='ml-4'>
									<li>Native: Kazakh/Russian </li>
									<li>Second Language: English</li>
									<li>Third Language: Turkish</li>
									<li>Fourth Language: Korean</li>
								</ul>
							</li>
						</ul>
					</div>

				</div>
			</ReactSpoiler>
		</div>
	)
}

export default Info
