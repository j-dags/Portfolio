import './App.css'
import Projects from './Projects'
import Intro from './Intro'
import Footer from './Footer'
import Stack from './Stack'
import Nav from './Nav'

function App() {
	return (
		<div className='App'>
			<Nav />
			<Intro />
			<Stack />
			<Projects />
			<Footer />
		</div>
	)
}

export default App
