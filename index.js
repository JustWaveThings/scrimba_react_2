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

console.log(navbar);

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(navbar);
