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

function Stack({ show }) {
	return (
		<section>
			<div className='section-container'>
				<FlexCol id='stack-cntr'>
					<FlexColLeft>
						<SectionHeader
							title={'Stack'}
							description={`Through my studies, I've gained a solid grasp of web development and computer science fundamentals. I'm constantly learning and am attracted to simple, adaptive libraries that can empower wider groups of people to dive into tech.`}
							show={show}
							delay={0.2}
						/>
					</FlexColLeft>
					<div className='stack'>
						<StackFrontend show={show} delay={0.4} />
						<StackBackend show={show} delay={0.55} />
						<StackHosting show={show} delay={0.7} />
						<StackML show={show} delay={0.85} />
					</div>
				</FlexCol>
			</div>
		</section>
	)
}

export default Stack
