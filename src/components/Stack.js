import React, { useLayoutEffect, useRef, useState } from 'react'
import { FlexCol, FlexColLeft, FlexRow } from './StyledComponents'
import { motion } from 'framer-motion'
import {
	StackBackend,
	StackFrontend,
	StackML,
	StackHosting,
	SectionHeader,
} from './'
import './Stack.css'

function Stack() {
	const [show, setShow] = useState({ stack: false })
	const stackRef = useRef(null)

	useLayoutEffect(() => {
		const topPos = (element) => element.getBoundingClientRect().top
		const stackPos = topPos(stackRef.current)

		const onScroll = () => {
			const scrollPos = window.scrollY + window.innerHeight
			if (scrollPos > stackPos + 100) {
				setShow((state) => ({ ...state, stack: true }))
			}
		}

		window.addEventListener('scroll', onScroll)
		return () => window.removeEventListener('scroll', onScroll)
	}, [])

	return (
		<section>
			<div className='section-container'>
				<FlexCol id='stack-cntr'>
					<FlexColLeft ref={stackRef}>
						<SectionHeader
							title={'Stack'}
							description={`Through my studies, I've gained a solid grasp of web development and computer science fundamentals. I'm constantly learning and am attracted to simple, adaptive libraries that can empower wider groups of people to dive into tech.`}
							show={show.stack}
							delay={0.2}
						/>
					</FlexColLeft>
					<div className='stack'>
						<StackFrontend show={show} delay={0.2} />
						<StackBackend show={show} delay={0.45} />
						<StackHosting show={show} delay={0.6} />
						<StackML show={show} delay={0.75} />
					</div>
				</FlexCol>
			</div>
		</section>
	)
}

export default Stack
