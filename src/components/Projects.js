import React, { useLayoutEffect, useRef, useState } from 'react'
import { FlexColLeft } from './StyledComponents'
import { motion } from 'framer-motion'
import styled from 'styled-components'
import './Projects.css'

function Projects() {
	const [show, doShow] = useState({ itemOne: false })
	const refOne = useRef(null)

	useLayoutEffect(() => {
		const topPos = (element) => element.getBoundingClientRect().top
		const div1Pos = topPos(refOne.current)

		const onScroll = () => {
			const scrollPos = window.scrollY + window.innerHeight
			if (div1Pos < scrollPos) doShow((state) => ({ ...state, itemOne: true }))
		}

		window.addEventListener('scroll', onScroll)
		return () => window.removeEventListener('scroll', onScroll)
	}, [])

	return (
		<section>
			<div className='section-container'>
				<h1>Projects</h1>

				<Grid animate={show.itemOne} ref={refOne} className='grid-container'>
					<FlexColLeft>
						<a
							href='https://github.com/j-dags/InfauxWars'
							target='_blank'
							rel='noreferrer'
						>
							<motion.div
								whileHover={{
									scale: 1.05,
									opacity: 0.9,
								}}
								whileTap={{ scale: 0.95 }}
								transition={{
									type: 'tween',
									duration: 0.25,
								}}
							>
								<img src='./InfauxWars.png' alt='Infaux Wars' />
							</motion.div>
							<h3>Infaux Wars</h3>
							<p>Fake news detection web app</p>
						</a>
					</FlexColLeft>

					<FlexColLeft>
						<a
							href='https://github.com/j-dags/AboveTheBreak'
							target='_blank'
							rel='noreferrer'
						>
							<motion.div
								whileHover={{ scale: 1.05, opacity: 0.9 }}
								whileTap={{ scale: 0.95 }}
								transition={{ type: 'tween', duration: 0.25 }}
							>
								<img src='./AboveTheBreak.png' alt='Infaux Wars' />
							</motion.div>
							<h3>Above The Break</h3>
							<p>Fantasy basketball stats tracker and visualizer</p>
						</a>
					</FlexColLeft>
					<FlexColLeft>
						<a
							href='https://jon-dagdagan.medium.com/fake-news-detection-pre-processing-text-d9648a2854e5'
							target='_blank'
							rel='noreferrer'
						>
							<motion.div
								whileHover={{ scale: 1.05, opacity: 0.9 }}
								whileTap={{ scale: 0.95 }}
								transition={{ type: 'tween', duration: 0.25 }}
							>
								<img src='./MediumArticle.png' alt='Infaux Wars' />
							</motion.div>
							<h3>Medium Article</h3>
							<p>Natural language processing for beginners</p>
						</a>
					</FlexColLeft>
				</Grid>
			</div>
		</section>
	)
}
// transform: translateX(${({ animate }) => (animate ? '0' : '-7.5vw')});
// opacity: .9{({ animate }) => (animate ? '0.5' : '0')};
// transition: transform 2s;

const Grid = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
	grid-gap: 4em;
`

export default Projects
