import React from 'react'
import { motion } from 'framer-motion'
import { FlexColLeft, FlexRow } from './'

function ProjectCard({ link, img, alt, title, description, github }) {
	return (
		<FlexColLeft>
			<a href={link} target='_blank' rel='noreferrer'>
				<motion.div
					whileHover={{ scale: 1.05, opacity: 0.9 }}
					whileTap={{ scale: 0.95 }}
					transition={{ type: 'tween', duration: 0.25 }}
				>
					<img src={img} alt={alt} />
				</motion.div>
				<FlexRow
					style={{ justifyContent: 'space-between', marginBottom: '1rem' }}
				>
					<h2>{title}</h2>
					{github && (
						<a
							className='githubLink'
							href={github}
							target='_blank'
							rel='noreferrer'
						>
							github
						</a>
					)}
				</FlexRow>
				<p>{description}</p>
				<span>{<br />}</span>
			</a>
		</FlexColLeft>
	)
}

export default ProjectCard
