const navbar = (
	<nav>
		<h1>Brand Name</h1>
		<ul>
			<li>Pricing</li>
			<li>About</li>
			<li>Contact</li>
		</ul>
	</nav>
);

const factArray = [
	'React was developed by Facebook: React was developed and released by Facebook in 2013, and since then it has become one of the most popular JavaScript libraries for building user interfaces',

	"React is not a framework: React is often mistakenly referred to as a framework, but it's actually a library for building user interfaces. Unlike a framework, React doesn't prescribe a particular way of organizing your code or building your application",

	"React uses a virtual DOM: React's virtual DOM is a lightweight representation of the actual DOM. By using a virtual DOM, React can efficiently update only the parts of the actual DOM that need to be changed, which can lead to significant performance improvements",

	'React Native allows for building native mobile apps: React Native is a framework for building mobile apps using React. With React Native, you can write code once and deploy it to both iOS and Android devices, while still providing a native look and feel',

	'React has a strong ecosystem: React has a large and active community, which has created a rich ecosystem of libraries, tools, and resources. This ecosystem includes everything from state management libraries like Redux to UI component libraries like Material-UI',
];

function App() {
	return (
		<div>
			<Image height={'80px'} />
			<Header header={'Fun facts about React'} />
			<ListContainer listType={'ul'}>
				<UlListItems array={factArray} />
			</ListContainer>
		</div>
	);
}

function Image({ height }) {
	return (
		<div>
			<img
				src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png"
				className="App-logo"
				alt="logo"
				height={height}
			/>
		</div>
	);
}

function Header({ header }) {
	return <h1> {header}</h1>;
}

function ListContainer({ listType, children }) {
	return listType === 'ul' ? <ul>{children}</ul> : <ol>{children}</ol>;
}

function UlListItems({ array }) {
	return array.map(item => <li key={item}>{item}</li>);
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
