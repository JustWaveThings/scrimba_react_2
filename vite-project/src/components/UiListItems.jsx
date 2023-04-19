export default function UlListItems({ array }) {
	return array.map(item => (
		<li
			className="li"
			key={item}
		>
			{item}
		</li>
	));
}
