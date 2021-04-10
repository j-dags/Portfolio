import React, { useLayoutEffect, useRef, useState } from 'react'
import { Footer, Intro, Nav, Projects, Stack } from './'
import './App.css'

function App() {
	const [show, doShow] = useState({ projects: false, stack: false })
	const projectsRef = useRef(null)
	const stackRef = useRef(null)

	// Scrolling listener will trigger the loading animations for our stack and project components
	useLayoutEffect(() => {
		// Find the height of our ref/component in question (i.e. projectsRef)
		const topPos = (element) => element.getBoundingClientRect().top
		const projectsPos = topPos(projectsRef.current)
		const stackPos = topPos(stackRef.current)

		// Scroll listener
		const onScroll = () => {
			const scrollPos = window.scrollY + window.innerHeight
			// If window scroll height exceeds height of our ref (+200), show component
			if (scrollPos > stackPos + 400)
				doShow((state) => ({ ...state, stack: true }))
			if (scrollPos > projectsPos + 400)
				doShow((state) => ({ ...state, projects: true }))
		}

		window.addEventListener('scroll', onScroll)
		return () => window.removeEventListener('scroll', onScroll)
	}, [])

	return (
		<div className='App'>
			<Nav />
			<Intro />
			<div ref={stackRef}>
				<Stack show={show.stack} />
			</div>
			<div ref={projectsRef}>
				<Projects show={show.projects} />
			</div>
			<Footer />
		</div>
	)
}

export default App
