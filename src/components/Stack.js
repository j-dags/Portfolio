import React, { useLayoutEffect, useRef, useState } from 'react'
import { FlexRow } from './StyledComponents'
import { motion } from 'framer-motion'
import { StackBackend, StackFrontend, StackML, StackHosting } from './'
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
				<FlexRow id='stack-cntr'>
					<motion.div
						ref={stackRef}
						initial={{ opacity: 0, x: '-3vw' }}
						animate={{
							opacity: show.stack ? 1 : 0,
							x: show.stack ? '0' : '-3vw',
						}}
						transition={{ type: 'spring', duration: 2 }}
					>
						<h1 style={{ margin: 0 }}>Stack</h1>
					</motion.div>
					<div className='stack'>
						<StackFrontend show={show} delay={0.15} />
						<StackBackend show={show} delay={0.3} />
						<StackHosting show={show} delay={0.45} />
						<StackML show={show} delay={0.6} />
					</div>
				</FlexRow>
			</div>
		</section>
	)
}

export default Stack
