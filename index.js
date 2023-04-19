/* const navbar = (
	<nav>
		<h1>Brand Name</h1>
		<ul>
			<li>Pricing</li>
			<li>About</li>
			<li>Contact</li>
		</ul>
	</nav>
);
 */
/* const factArray = [
	'React was developed by Facebook: React was developed and released by Facebook in 2013, and since then it has become one of the most popular JavaScript libraries for building user interfaces',

	"React is not a framework: React is often mistakenly referred to as a framework, but it's actually a library for building user interfaces. Unlike a framework, React doesn't prescribe a particular way of organizing your code or building your application",

	"React uses a virtual DOM: React's virtual DOM is a lightweight representation of the actual DOM. By using a virtual DOM, React can efficiently update only the parts of the actual DOM that need to be changed, which can lead to significant performance improvements",

	'React Native allows for building native mobile apps: React Native is a framework for building mobile apps using React. With React Native, you can write code once and deploy it to both iOS and Android devices, while still providing a native look and feel',

	'React has a strong ecosystem: React has a large and active community, which has created a rich ecosystem of libraries, tools, and resources. This ecosystem includes everything from state management libraries like Redux to UI component libraries like Material-UI',
]; */

const factArray = [
	'React is one of the most popular JavaScript libraries for building user interfaces, which means learning it can increase your job opportunities and career prospects.',
	'React is component-based, which makes it easier to write reusable and modular code.',
	'React has a large and active community, which means there are plenty of resources and support available for developers.',
	"React's virtual DOM allows for fast and efficient updates to the user interface, making it ideal for building complex and interactive applications.",
	'React works well with other JavaScript libraries and frameworks, allowing you to integrate it with your existing projects or learn other technologies alongside it.',
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
				</Nav>
			</Header>
			<Header
				header={"Five Reasons I'm excited to Learn React:"}
				className={'smallHeader'}
			/>
			<ListContainer listType={'ol'}>
				<UlListItems array={factArray} />
			</ListContainer>
			<Footer
				text={'© 20xx <last name here> development. All rights reserved.'}
				className={'Footer'}
			/>
		</div>
	);
}

function Image({ height }) {
	return (
		<div className="Image">
			<img
				src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png"
				className="App-logo"
				alt="logo"
				height={height}
			/>
		</div>
	);
}

function Header({ header, className, children }) {
	return (
		<div className={className}>
			<h1>{header}</h1>
			{children}
		</div>
	);
}

function Nav({ children }) {
	return (
		<div className="Nav">
			<nav>{children}</nav>
		</div>
	);
}

function ListContainer({ listType, children }) {
	return listType === 'ul' ? <ul>{children}</ul> : <ol>{children}</ol>;
}

function UlListItems({ array }) {
	return array.map(item => (
		<li
			className="li"
			key={item}
		>
			{item}
		</li>
	));
}

function Footer({ text, className }) {
	return <small className={className}>{text}</small>;
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
