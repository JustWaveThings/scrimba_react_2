export default function ListContainer({ className, listType, children }) {
	return listType === 'ul' ? (
		<ul className={className}>{children}</ul>
	) : (
		<ol className={className}>{children}</ol>
	);
}
