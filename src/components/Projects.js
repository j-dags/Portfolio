import { motion } from 'framer-motion'
import { FlexColLeft, ProjectCard, SectionHeader } from './'
import './Projects.css'

function Projects({ show }) {
	return (
		<section>
			<div className='section-container'>
				<FlexColLeft>
					<SectionHeader
						title={'Projects'}
						description={`When I have an idea I like to build it! Check out what I've been working on.`}
						show={show}
						delay={0.2}
					/>
					<motion.div
						initial={{ opacity: 0, y: '3vh' }}
						animate={{
							opacity: show ? 1 : 0,
							y: show ? '0' : '3vh',
						}}
						transition={{ type: 'spring', duration: 2, delay: 0.4 }}
					>
						<div className='grid-container'>
							<ProjectCard
								className='project-card'
								link={'https://infauxwars.herokuapp.com/'}
								github={'https://github.com/j-dags/InfauxWars'}
								img={'./InfauxWars.png'}
								alt={'Infaux Wars'}
								title={'Infaux Wars'}
								description={'Fake news detection web app.'}
							/>

							<ProjectCard
								className='project-card'
								link={'https://abovethebreak.herokuapp.com/'}
								github={'https://github.com/j-dags/AboveTheBreak'}
								img={'./AboveTheBreak.png'}
								alt={'Above The Break'}
								title={'Above The Break'}
								description={'Fantasy basketball stats tracker and visualizer.'}
							/>
							<ProjectCard
								className='project-card'
								link={
									'https://jon-dagdagan.medium.com/fake-news-detection-pre-processing-text-d9648a2854e5'
								}
								img={'./MediumArticle.png'}
								alt={'Medium Article'}
								title={'Medium Article'}
								description={'Natural language processing for beginners.'}
							/>
						</div>
					</motion.div>
				</FlexColLeft>
			</div>
		</section>
	)
}

export default Projects
