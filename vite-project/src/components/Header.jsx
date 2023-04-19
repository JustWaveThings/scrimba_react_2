export default function Header({ header, className, children }) {
	return (
		<div className={className}>
			<h1>{header}</h1>
			{children}
		</div>
	);
}
