import React, { useLayoutEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { FlexColLeft, ProjectCard, SectionHeader } from './'
import './Projects.css'

function Projects() {
	const [show, doShow] = useState({ projects: false })
	const projectsRef = useRef(null)

	useLayoutEffect(() => {
		// Find the height of our ref/component in question (i.e. projectsRef)
		const topPos = (element) => element.getBoundingClientRect().top
		const projectsPos = topPos(projectsRef.current)

		// Scroll listener
		const onScroll = () => {
			const scrollPos = window.scrollY + window.innerHeight
			// If window scroll height exceeds height of our ref (+200), show component
			if (scrollPos > projectsPos + 200)
				doShow((state) => ({ ...state, projects: true }))
		}

		window.addEventListener('scroll', onScroll)
		return () => window.removeEventListener('scroll', onScroll)
	}, [])

	return (
		<section>
			<div className='section-container'>
				<FlexColLeft ref={projectsRef}>
					<SectionHeader
						title={'Projects'}
						description={`I like to stay busy and always have a project in the works. Take a look at some of the applications, articles, and companies I've dedicated my time to.`}
						show={show.projects}
						delay={0.2}
					/>
					<motion.div
						initial={{ opacity: 0, y: '3vh' }}
						animate={{
							opacity: show.projects ? 1 : 0,
							y: show.projects ? '0' : '3vh',
						}}
						transition={{ type: 'spring', duration: 2, delay: 0.5 }}
					>
						<div className='grid-container'>
							<ProjectCard
								link={'https://github.com/j-dags/InfauxWars'}
								img={'./InfauxWars.png'}
								alt={'Infaux Wars'}
								title={'Infaux Wars'}
								description={'Fake news detection web app'}
							/>

							<ProjectCard
								link={'https://github.com/j-dags/AboveTheBreak'}
								img={'./AboveTheBreak.png'}
								alt={'Above The Break'}
								title={'Above The Break'}
								description={'Fantasy basketball stats tracker and visualizer'}
							/>
							<ProjectCard
								link={
									'https://jon-dagdagan.medium.com/fake-news-detection-pre-processing-text-d9648a2854e5'
								}
								img={'./MediumArticle.png'}
								alt={'Medium Article'}
								title={'Medium Article'}
								description={'Natural language processing for beginners'}
							/>
						</div>
					</motion.div>
				</FlexColLeft>
			</div>
		</section>
	)
}

export default Projects
