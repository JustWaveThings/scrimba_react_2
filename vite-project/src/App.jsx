import './App.css';
import Footer from './components/Footer';
import UlListItems from './components/UiListItems';
import ListContainer from './components/ListContainer';
import Nav from './components/Nav';
import Header from './components/Header';
import Image from './components/Image';

const navList = ['Pricing', 'Contact', 'About'];
const reasonsArray = [
	"Wide Adoption and Community Support: React is a popular and widely-used JavaScript library for building user interfaces, particularly for single-page applications. With a large community of developers, there's a wealth of resources, tutorials, and tools available to help you learn and grow as a React developer.",
	'Component-Based Architecture: React focuses on a modular, component-based approach to building web applications. This makes it easier to manage, test, and maintain your code, leading to more scalable and reusable codebases.',
	'Improved Performance: React uses a virtual DOM, which significantly improves performance by reducing the number of direct updates to the actual DOM. This can lead to faster and more responsive web applications, making for a better user experience.',
	"Strong Ecosystem and Integration: React's ecosystem includes many complementary libraries and tools that can help streamline your development process. This includes popular state management libraries like Redux or MobX, and routing libraries like React Router. Additionally, React can be easily integrated with other technologies, such as GraphQL for API queries and server-side rendering.",
	'Job Opportunities and Career Growth: React is in high demand in the job market, with many companies seeking skilled React developers. Learning React can help you stand out as a candidate, opening up new job opportunities and potentially leading to career growth in the field of web development.',
];

function App() {
	return (
		<div className="App">
			<Header
				className={'headerNav'}
				header={'Scrimba React Course'}
			>
				<Nav>
					<Image height={'80px'} />
					<ListContainer
						className="navList"
						type={'ul'}
					>
						<UlListItems array={navList} />
					</ListContainer>
				</Nav>
			</Header>
			<Header
				header={"Five Reasons I'm excited to Learn React:"}
				className={'smallHeader'}
			/>
			<ListContainer listType={'ol'}>
				<UlListItems array={reasonsArray} />
			</ListContainer>
			<Footer
				text={'© 20xx <last name here> development. All rights reserved.'}
				className={'footer'}
			/>
		</div>
	);
}

export default App;
